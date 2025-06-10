import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
import React from "react";
import type NotionDatabaseResponse from "@/response/notion/database.json";
import { getExchangeRate } from "@/services/exchange";
import { LoadMore } from "./load-more.component";
import ProductsList from "./products-list.component";
import Filters from "./filters.component";

const properties = {
  model: 'title',
  brand: 'select'
} as const

const propertiesQuery = {
  model: 'contains',
  brand: 'equals',
} as const

type Properties = keyof typeof properties

// type PropertiesKey = typeof properties[keyof typeof properties]

// each 30 minutes
export const revalidate = 1800 // 60 * 30 = 1800 seconds (30 minutes)

export const dynamicParams = true

type Body = {
  page_size?: number;
  start_cursor?: string;
  filter?: {
    property: Properties;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
  };
}

async function getDatabase({
  cursor,
  pageSize,
  filter,
}: {
  cursor?: string;
  pageSize?: number;
  filter?: {
    field: Properties;
    q?: string;
  };
}) {
  const body = { page_size: pageSize } as Body

  if (cursor && cursor !== "null") {
    body.start_cursor = cursor;
  }

  if (filter?.q && filter.field) {
    const fieldAsProperty = filter.field as Properties;
    body.filter = {
      property: fieldAsProperty,
      [properties[fieldAsProperty]]: {
        [propertiesQuery[fieldAsProperty]]: filter.q
      },
    };
  }
  console.log(body)
  const response = await fetch(
    `https://api.notion.com/v1/databases/${process.env.NOTION_DATABASE_ID}/query`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.NOTION_TOKEN}`,
        "Content-Type": "application/json",
        "Notion-Version": "2022-06-28",
      },
      body: JSON.stringify({
        ...body,
        sorts: [
          {
            property: "brand",
            direction: "ascending",
          },
        ],
      })
    }
  )

  const data = (await response.json()) as typeof NotionDatabaseResponse;

  return {
    data: data.results,
    pagination: {
      current: cursor,
      next: data.next_cursor,
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

export default async function Page({
  searchParams: searchParamsValue,
}: {
  searchParams: Promise<{ cursor?: string; q?: string }>;
}) {
  const searchParams = await searchParamsValue;
  const pageSize = 10;

  // Get the total number of products for pagination
  const { data, pagination } = await getDatabase({
    cursor: searchParams.cursor as string,
    pageSize,
    filter: {
      field: "brand",
      q: searchParams.q
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
          brand: searchParams.q as string,
        }}
      />
      <ProductsList products={products} exchangeRate={exchangeRate.venta} q={searchParams.q} />
      <LoadMore next={pagination.next} />
    </Container>
  )
}
