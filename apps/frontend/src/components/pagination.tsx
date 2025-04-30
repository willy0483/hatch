import { calculatePageNumbers } from "@/lib/helpers";
import { cn } from "@/lib/utils";
import Link from "next/link";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

type Props = {
  totalPages: number;
  currentPage: number;
  pageNeighbors?: number;
  className?: string;
};

const Pagination = ({
  totalPages,
  currentPage,
  pageNeighbors = 2,
  className,
}: Props) => {
  // ... 3 4 5 6 7 ...

  const pageNumbers = calculatePageNumbers({
    pageNeighbors,
    currentPage,
    totalPages,
  });

  return (
    <div className={cn("flex items-center justify-center gap-2 ", className)}>
      {/* pervious page button */}
      {currentPage !== 1 && (
        <button
          className={cn("rounded-md bg-slate-200 py-2 px-2 hover:text-sky-600")}
        >
          <Link href={`?page=${currentPage - 1}`}>
            <ChevronLeftIcon className="w-4" />
          </Link>
        </button>
      )}

      {pageNumbers.map((page, index) => (
        <button
          key={index}
          className={cn("px-3 py-1 rounded-md transition ", {
            "bg-slate-200": currentPage !== page && page !== "...",
            "bg-blue-500 text-white": currentPage === page,
            "cursor-not-allowed": page === "...",
            "hover:text-sky-600": page !== "...",
          })}
        >
          {page === "..." ? (
            "..."
          ) : (
            <Link className="" href={`?page=${page}`}>
              {page}
            </Link>
          )}
        </button>
      ))}

      {pageNumbers.length === 0 && <p>no numbers</p>}

      {/* next page button */}
      {currentPage !== totalPages && (
        <button className="rounded-md bg-slate-200 py-2 px-2 hover:text-sky-600">
          <Link href={`?page=${currentPage + 1}`}>
            <ChevronRightIcon className="w-4" />
          </Link>
        </button>
      )}
    </div>
  );
};
export default Pagination;
