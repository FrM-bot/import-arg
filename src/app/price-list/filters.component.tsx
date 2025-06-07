"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

const fields = [
  { value: "brand", label: "Marca" },
  { value: "model", label: "Modelo" },
];

export default function Filters({
  filter,
}: {
  filter?: { field: string; term: string };
}) {
  const url = new URL(
    globalThis.window?.location.href || "http://localhost:3000"
  );

  const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const { field, term } = Object.fromEntries(formData) as {
      field: string;
      term: string;
    };
    // setSearched({ field, term })
    if (term) {
      url.searchParams.set("field", field as string);
      url.searchParams.set("term", term.toLocaleLowerCase() as string);
    } else {
      url.searchParams.delete("field");
      url.searchParams.delete("term");
      url.searchParams.delete("cursor");
    }
    window.location.href = url.toString();
  };
  return (
    <form onSubmit={handlerSubmit} className="flex gap-2 my-2">
      <Input
        type="text"
        placeholder={filter?.field === "brand" ? "Marca" : "Modelo"}
        name="term"
        defaultValue={filter?.term || ""}
      />

      <Select name="field">
        <SelectTrigger>
          <SelectValue
            placeholder={filter?.field === "brand" ? "Marca" : "Modelo"}
          />
        </SelectTrigger>
        <SelectContent>
          {fields.map((field) => (
            <SelectItem key={field.value} value={field.value}>
              {field.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button type="submit">Buscar</Button>
    </form>
  );
}
