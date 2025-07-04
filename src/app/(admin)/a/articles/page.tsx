import React from "react";
import { SearchParams } from "@/lib/data-table/types";
import { blogSearchParamCache } from "@/actions/blogs/blogs.types";
import { BlogsService } from "@/actions/blogs/blogs.service";
import { BlogsTable } from "@/components/admin/table/blogs/blogs-table";
import { DataTableSkelton } from "@/components/data-table/data-table-skeleton";
import { Shell } from "@/components/shell/shell";

interface IndexPageProps {
  searchParams: Promise<SearchParams>;
}

export default async function IndexPage(props: IndexPageProps) {
  const searchParams = await props.searchParams;
  const search = blogSearchParamCache.parse(searchParams);
  const promises = Promise.all([
    BlogsService.getAdminBlogs({
      ...search,
      sort: search.sort,
    }),
  ]);

  return (
    <Shell className="gap-2">
      <React.Suspense
        fallback={
          <DataTableSkelton
            columnCount={6}
            cellWidths={["10rem", "40rem", "12rem", "12rem", "8rem", "8rem"]}
            shrinkZero
          />
        }
      >
        <BlogsTable promises={promises} />
      </React.Suspense>
    </Shell>
  );
}
