"use client";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

export function LoadMore({ next }: { next?: string }) {
  const loadingRef = useRef<HTMLSpanElement>(null);
  const router = useRouter();

  useEffect(() => {
    // Create an Intersection Observer instance
    const observer = new IntersectionObserver(
      (entries) => {
        // Check if the loading element is intersecting with the viewport
        if (entries[0].isIntersecting) {
          console.log("Loading element is visible in viewport!");
          // Here you could also trigger loading more data
          if (next) {
            const url = new URL(window.location.href);
            url.searchParams.set("cursor", next);
            router.push(url.pathname + url.search, {
              scroll: false,
            });
          }
        }
      },
      {
        // Options for the observer
        root: null, // Use the viewport as the root
        rootMargin: "0px", // No margin
        threshold: 0.3, // Trigger when at least 10% of the element is visible
      }
    );

    // Start observing the loading element
    if (loadingRef.current) {
      observer.observe(loadingRef.current);
    }

    // Clear cursor parameter when the page is reloaded
    const handleBeforeUnload = () => {
      // This will run when the page is about to be reloaded
      const url = new URL(window.location.href);
      if (url.searchParams.has("cursor")) {
        url.searchParams.delete("cursor");
        // We can't navigate here since the page is unloading,
        // but we can update browser history
        window.history.replaceState({}, "", url.pathname + url.search);
      }
    };

    // Add event listener for page reload
    window.addEventListener("beforeunload", handleBeforeUnload);

    // Cleanup function to disconnect the observer and remove event listeners when component unmounts
    return () => {
      observer.disconnect();
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [next]); // Re-run effect when 'next' changes

  return (
    <div className="flex justify-center mt-4 gap-2">
      {next ? (
        <span ref={loadingRef}>
          <Loader className="animate-spin" />
        </span>
      ) : (
        <span>no hay mas productos</span>
      )}
    </div>
  );
}
