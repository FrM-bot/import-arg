"use client";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";
import { useRouter } from "next/navigation";

const brands: string[] = [
  "samsung",
  "sony",
  "cmf",
  "nintendo",
  "oneplus",
  "nubia",
  "apple",
  "asus",
  "xiaomi",
  "realme",
  "poco",
  "lenovo",
  "nothing",
  "google",
  "infinix",
  "valve",
  "honor",
  "oppo",
  "xbox"
];


export default function Filters({
  filter,
}: {
  filter?: { brand: string };
}) {
  // const q = new URLSearchParams(globalThis.window?.location.search || "").get("q")
  const router = useRouter();
  const url = new URL(
    globalThis.window?.location.href || "http://localhost:3000/price-list"
  );

  const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const { brand } = Object.fromEntries(formData) as {
      brand: string;
    }

    if (brand) {
      url.searchParams.set("q", brand.toLocaleLowerCase() as string);
    } else {
      url.searchParams.delete("q");
    }
    url.searchParams.delete("cursor")
    router.push(url.pathname + url.search)
    // window.location.reload()

  }

  // useEffect(() => {
  //   filter?.brand && window.location.reload()
  // }, [filter?.brand])
  

  return (
    <form onSubmit={handlerSubmit} className="flex gap-2 my-2">
      <Select name="brand" defaultValue={filter?.brand || ""}>
        <SelectTrigger>
          <SelectValue placeholder="Marca" />
        </SelectTrigger>
        <SelectContent>
          {brands.map((brand) => (
            <SelectItem key={brand} value={brand}>
              {brand}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button type="submit">Buscar</Button>
    </form>
  );
}
