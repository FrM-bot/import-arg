"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export function LoadMore({ next }: { next?: string }) {
  const [url, setUrl] = useState<URL>();
  useEffect(() => {
    const urlValue = new URL(globalThis.window?.location.href || "");
    next && urlValue.searchParams.set("cursor", next || "");
    // globalThis.window.scrollTo({
    //   top: 0,
    //   behavior: "smooth",
    // })
    setUrl(urlValue);
  }, [next])
  
  return (
    <div className="flex justify-center mt-4">
      {next ? (
        <Link href={url?.href || ""} scroll={false}>Cargar más</Link>
      ) : (
        <p>No hay más productos</p>
      )}
    </div>
  );
}
