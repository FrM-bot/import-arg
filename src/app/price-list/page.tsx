import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
import React from "react";
import type NotionDatabaseResponse from "@/response/notion/database.json";
import { getExchangeRate } from "@/services/exchange";
import { LoadMore } from "./load-more.component";
import ProductsList from "./products-list.component";
import Filters from "./filters.component";
// {
//   "filter": {
//       "property": "Status",
//       "select": {
//           "equals": "Reading"
//       }
//   },
//   "sorts": [
//       {
//       "property": "MODELO",
//       "direction": "ascending"
//       }
//   ]
// }

async function getDatabase({
  cursor,
  pageSize,
  filter,
}: {
  cursor?: string;
  pageSize?: number;
  filter?: {
    field: string;
    term: string;
  };
}) {
  const body = { page_size: pageSize } as {
    page_size?: number;
    start_cursor?: string;
    filter?: {
      property: string;
      select: {
        equals: string;
      };
    };
  };

  if (cursor && cursor !== "null") {
    body.start_cursor = cursor;
  }
  if (filter?.term) {
    body.filter = {
      property: filter.field,
      select: {
        equals: filter.term,
      },
    };
  }
  const response = await fetch(
    `https://api.notion.com/v1/databases/${process.env.NOTION_DATABASE_ID}/query`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.NOTION_TOKEN}`,
        "Content-Type": "application/json",
        "Notion-Version": "2022-06-28", // o la última versión
      },
      body: JSON.stringify({
        ...body,
        sorts: [
          {
            property: "brand",
            direction: "ascending",
          },
        ],
      }), // puedes agregar filtros aquí
    }
  );

  const data = (await response.json()) as typeof NotionDatabaseResponse;
  return {
    data: data.results,
    pagination: {
      cursor: data.next_cursor,
      hasMore: data.has_more,
    },
  };
}

function formatData(data: (typeof NotionDatabaseResponse)["results"]) {
  const products = data?.map((item) => {
    return {
      brand: item.properties.brand.select.name,
      storage: item.properties.storage.select.name,
      ram: item.properties.ram.select.name,
      price: item.properties.price.number,
      model: item.properties.model.title[0].plain_text,
      totalPrice: item.properties.total_price.formula.number,
    };
  });

  return products;
}

export default async function PriceListPage({
  searchParams: searchParamsValue,
}: {
  searchParams: Promise<{ cursor?: string; field?: string; term?: string }>;
}) {
  const searchParams = await searchParamsValue;
  const pageSize = 10;

  // Get the total number of products for pagination
  const { data, pagination } = await getDatabase({
    cursor: searchParams.cursor as string,
    pageSize,
    filter: {
      field: searchParams.field as string,
      term: searchParams.term as string,
    },
  });
  const products = formatData(data);
  const exchangeRate = await getExchangeRate();

  return (
    <Container>
      <Typography variant="title" className="mb-4">
        Lista de precios
      </Typography>
      <Filters
        filter={{
          field: searchParams.field as string,
          term: searchParams.term as string,
        }}
      />
      <ProductsList products={products} exchangeRate={exchangeRate.venta} />
      <LoadMore next={pagination.cursor} />
    </Container>
  );
}
