"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatNumber } from "@/lib/formatNumber";
import { useEffect, useState } from "react"
interface Product {
    brand: string;
    storage: string;
    ram: string;
    price: number;
    model: string;
    totalPrice: number;
}

export default function ProductsList({ products, exchangeRate }: { products: Product[]; exchangeRate: number }) {
  const [productsList, setProductsList] = useState<Product[]>([]);

  useEffect(() => {
    const prevProducts = [...productsList];
    const newProducts = [...prevProducts, ...(products || [])];
    // globalThis.window.sessionStorage.setItem("products", JSON.stringify(newProducts));
    setProductsList(newProducts);
  }, [products]);

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
              {formatNumber(product.totalPrice * exchangeRate * 1.01, {
                option: {
                  style: "currency",
                  currencyDisplay: "narrowSymbol",
                  currency: "ARS",
                },
              })}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
