"use client";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatNumber } from "@/lib/formatNumber";
import { getWhatsAppUrl } from "@/lib/utils";
import { useEffect, useState } from "react"
interface Product {
    brand: string;
    storage: string;
    ram: string;
    price: number;
    model: string;
    totalPrice: number;
}

export default function ProductsList({ products, exchangeRate, q }: { products: Product[]; exchangeRate: number, q?: string }) {
  const [productsList, setProductsList] = useState<Product[]>([]);

  useEffect(() => {
    const newProducts = [...productsList, ...(products || [])];
    // globalThis.window.sessionStorage.setItem("products", JSON.stringify(newProducts));
    setProductsList(q ? newProducts.filter(product => product.brand.toLocaleLowerCase() === q.toLocaleLowerCase()) : newProducts)
  }, [products]);

  const onContact = (text: string) => {
      window.open(
        getWhatsAppUrl({
          text: text,
        }),
        "_blank",
        "noopener noreferrer"
      );
    }

  return (
    <Table className="border-y">
      <TableHeader className="bg-gray-100">
        <TableRow>
          <TableHead>Modelo</TableHead>
          <TableHead>Marca</TableHead>
          <TableHead>Almacenamiento</TableHead>
          <TableHead>RAM</TableHead>
          {/* <TableHead>Precio</TableHead> */}
          <TableHead>Precio en Pesos</TableHead>
          <TableHead />
        </TableRow>
      </TableHeader>
      <TableBody>
        {productsList.map((product, index) => (
          <TableRow key={index} className="even:bg-gray-50">
            <TableCell>{product.model}</TableCell>
            <TableCell>{product.brand}</TableCell>
            <TableCell>{product.storage}</TableCell>
            <TableCell>{product.ram}</TableCell>
            <TableCell>
              {formatNumber(product.totalPrice * exchangeRate, {
                option: {
                  style: "currency",
                  currencyDisplay: "narrowSymbol",
                  currency: "ARS",
                },
              })}
            </TableCell>
            <TableCell className="flex justify-center">
              <Button onClick={() => onContact(`Hola, ¡estoy interesado en el ${product.brand} ${product.model} ${product.storage} ${product.ram}! ¿Podrían decirme si cuentan con stock?`) }>
                Comprar
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
