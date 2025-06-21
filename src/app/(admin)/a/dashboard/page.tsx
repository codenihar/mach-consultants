import { SiteHeader } from "@/components/site-header";
import { SearchParams } from "@/lib/data-table/types";
import { blogSearchParamCache } from "@/actions/blogs/blogs.types";
import { BlogsService } from "@/actions/blogs/blogs.service";
import { BlogsTable } from "@/components/admin/table/blogs/blogs-table";
import React from "react";
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
    <>
      <SiteHeader />
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4">
            <div className="p-2 sm:p-4">
              <Shell className="gap-2">
                <React.Suspense
                  fallback={
                    <DataTableSkelton
                      columnCount={6}
                      cellWidths={[
                        "10rem",
                        "40rem",
                        "12rem",
                        "12rem",
                        "8rem",
                        "8rem",
                      ]}
                      shrinkZero
                    />
                  }
                >
                  <BlogsTable promises={promises} />
                </React.Suspense>
              </Shell>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
