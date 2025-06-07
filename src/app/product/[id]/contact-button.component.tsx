"use client";

import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { getWhatsAppUrl } from "@/lib/utils";

export default function ContactButton({
  productName,
}: {
  productName: string;
}) {
  const onContact = () => {
    window.open(
      getWhatsAppUrl({
        text: `Hola ImportARG, ¡estoy interesado en el ${productName}! ¿Podrían darme más detalles?`,
      }),
      "_blank",
      "noopener noreferrer"
    );
  };
  return (
    <ShimmerButton
      onClick={onContact}
      className="shadow-2xl rounded-none w-full"
      borderRadius="0px"
    >
      <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
        Comprar
      </span>
    </ShimmerButton>
  );
}
