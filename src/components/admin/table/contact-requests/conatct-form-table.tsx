"use client";
import React from "react";
import { DataTableRowAction } from "@/lib/data-table/types";
import { DataTable } from "@/components/data-table/data-table";
import { useDataTable } from "@/lib/hooks/use-data-table";
import { DataTableToolbar } from "@/components/data-table/data-table-toolbar";
import { ContactFormService } from "@/actions/contact-form/contact-form.service";
import { getContactFormsColumns } from "@/components/admin/table/contact-requests/contact-form-table-columns";
import { ContactForm } from "@/actions/contact-form/contact-form.types";
import { ContactFormsTableToolbarActions } from "@/components/admin/table/contact-requests/contact-form-table-toobar-actions";
import { DeleteContactFormDialog } from "@/components/admin/table/contact-requests/delete-contact-form-dialog";

interface ContactFormsTableProps {
  promises: Promise<
    [Awaited<ReturnType<typeof ContactFormService.getContactForms>>]
  >;
}

export function ContactFormsTable({ promises }: ContactFormsTableProps) {
  const [{ data, pageCount }] = React.use(promises);

  const [rowAction, setRowAction] =
    React.useState<DataTableRowAction<ContactForm> | null>(null);

  const columns = React.useMemo(
    () => getContactFormsColumns({ setRowAction }),
    []
  );

  const { table } = useDataTable<ContactForm>({
    data: data || [],
    columns,
    pageCount,
    initialState: {
      columnPinning: { right: ["actions"] },
    },
    getRowId: (originalRow) => originalRow.id,
    shallow: false,
    clearOnDefault: true,
  });

  return (
    <DataTable table={table}>
      <DataTableToolbar table={table}>
        <ContactFormsTableToolbarActions table={table} />
      </DataTableToolbar>

      <DeleteContactFormDialog
        open={rowAction?.type === "delete"}
        onOpenChange={() => setRowAction(null)}
        contactForms={rowAction?.row.original ? [rowAction?.row.original] : []}
        showTrigger={false}
        onSuccess={() => rowAction?.row.toggleSelected(false)}
      />
    </DataTable>
  );
}
