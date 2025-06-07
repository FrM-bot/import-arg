"use client";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";

export function PaginationComponent({
  cursor,
}: {
  cursor: string;
}) {

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationLink href={`/price-list?page=${cursor}`} className="mr-2">
            Previous
          </PaginationLink>
        </PaginationItem>
        <PaginationItem key={cursor}>
          {/* <PaginationLink
              href={`/price-list?page=${page}`}
              className={page === page ? 'bg-primary text-primary-foreground' : ''}
            > */}
          {cursor}
          {/* </PaginationLink> */}
        </PaginationItem>

        <PaginationItem>
          <PaginationLink href={`/price-list?page=${cursor}`} className="ml-2">
            Next
          </PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
