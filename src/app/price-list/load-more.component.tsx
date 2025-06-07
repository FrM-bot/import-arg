"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export function LoadMore({ next }: { next?: string }) {
  const [url, setUrl] = useState<URL>();
  useEffect(() => {
    const urlValue = new URL(globalThis.window?.location.href || "");
    next && urlValue.searchParams.set("cursor", next || "");
    setUrl(urlValue);
  }, [next])
  
  return (
    <div className="flex justify-center mt-4">
      {next ? (
        <Link href={url?.href || ""}>Cargar más</Link>
      ) : (
        <p>No hay más productos</p>
      )}
    </div>
  );
}
