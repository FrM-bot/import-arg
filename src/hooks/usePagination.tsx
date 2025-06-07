'use client'
export function usePagination({ maxPage }: { maxPage: number }) {
//   const searchParams = useSearchParams();

  const url = new URL(window.location.href);

  const page = Number(url.searchParams.get("page") || "1");

  const setPage = (page: number) => {
    url.searchParams.set("page", page.toString());
  };

  const handlePrevious = () => {
    setPage(Math.max(1, page - 1));
  };

  const handleNext = () => {
    setPage(Math.min(maxPage, page + 1));
  };

  return {
    page,
    setPage,
    handlePrevious,
    handleNext,
  };
}
