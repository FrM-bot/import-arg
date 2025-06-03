import React from "react";
import MetadataJSON from "@/data/metadata.json";

export default function AboutUs() {
  return (
    <section
      className="w-full py-12 md:py-24 lg:py-32 bg-neutral-950"
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
      </div>
    </section>
  );
}
