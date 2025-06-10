import React from "react";
import MetadataJSON from "@/data/metadata.json";

export default function AboutUs() {
  return (
    <section
      className="w-full py-12 md:py-16 lg:py-20 bg-neutral-950"
      id="about"
    >
      <div className="container">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-neutral-50">
              Sobre nosotros
            </h2>
            <p className="max-w-2xl text-neutral-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {MetadataJSON.description}
            </p>
          </div>
        </div>
        <div className="max-w-4xl relative w-full mx-auto pt-12 flex flex-wrap gap-16 justify-center items-center">
        <picture className="rounded overflow-hidden flex max-w-[220px] -rotate-12 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
            <img
              src="/seba.jpg"
              alt="Seba"
              className="w-full h-full object-cover aspect-square"
            />
          </picture>
          <picture className="rounded overflow-hidden flex max-w-[220px] rotate-12 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
            <img
              src="/franco.jpg"
              alt="Franco"
              className="w-full h-full object-cover aspect-square"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}
