"use client";
import type { Table } from "@tanstack/react-table";
import { ContactForm } from "@/actions/contact-form/contact-form.types";
import { DeleteContactFormDialog } from "@/components/admin/table/contact-requests/delete-contact-form-dialog";

interface ContactFormsTableToolbarActionsProps {
  table: Table<ContactForm>;
}

export function ContactFormsTableToolbarActions({
  table,
}: ContactFormsTableToolbarActionsProps) {
  return (
    <div className="flex items-center gap-2 mb-6">
      {table.getFilteredSelectedRowModel().rows.length > 0 ? (
        <DeleteContactFormDialog
          contactForms={table
            .getFilteredSelectedRowModel()
            .rows.map((row) => row.original)}
          onSuccess={() => table.toggleAllRowsSelected(false)}
        />
      ) : null}
    </div>
  );
}
