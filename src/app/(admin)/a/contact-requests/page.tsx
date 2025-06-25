import React from "react";
import { SearchParams } from "@/lib/data-table/types";
import { DataTableSkelton } from "@/components/data-table/data-table-skeleton";
import { Shell } from "@/components/shell/shell";
import { contactFormSearchParamCache } from "@/actions/contact-form/contact-form.types";
import { ContactFormService } from "@/actions/contact-form/contact-form.service";
import { ContactFormsTable } from "@/components/admin/table/contact-requests/conatct-form-table";

interface IndexPageProps {
  searchParams: Promise<SearchParams>;
}

export default async function IndexPage(props: IndexPageProps) {
  const searchParams = await props.searchParams;
  const search = contactFormSearchParamCache.parse(searchParams);
  const promises = Promise.all([
    ContactFormService.getContactForms({
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
        <ContactFormsTable promises={promises} />
      </React.Suspense>
    </Shell>
  );
}
