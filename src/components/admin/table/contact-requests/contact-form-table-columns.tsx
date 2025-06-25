"use client";
import * as React from "react";
import type { ColumnDef } from "@tanstack/react-table";
import { Ellipsis, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DataTableRowAction } from "@/lib/data-table/types";
import { DataTableColumnHeader } from "@/components/data-table/data-table-column-headers";
import { ContactForm } from "@/actions/contact-form/contact-form.types";

interface GetContactFormColumnsProps {
  setRowAction: React.Dispatch<
    React.SetStateAction<DataTableRowAction<ContactForm> | null>
  >;
}

export function getContactFormsColumns({
  setRowAction,
}: GetContactFormColumnsProps): ColumnDef<ContactForm>[] {
  return [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
          className="translate-y-0"
        />
      ),
      size: 40,
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
          className="translate-y-0.5"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "id",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Form ID" />
      ),
      cell: ({ row }) => <div className="w-auto">{row.getValue("id")}</div>,
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "firstName",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="First Name" />
      ),
      cell: ({ row }) => (
        <div className="w-auto line-clamp-1">{row.getValue("firstName")}</div>
      ),
      enableHiding: false,
    },
    {
      accessorKey: "lastName",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Last Name" />
      ),
      cell: ({ row }) => <div className="w-10">{row.getValue("lastName")}</div>,
      enableHiding: false,
    },
    {
      accessorKey: "organization",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Organization" />
      ),
      cell: ({ row }) => (
        <div className="w-10">{row.getValue("organization")}</div>
      ),
      enableHiding: false,
    },
    {
      accessorKey: "email",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Email" />
      ),
      cell: ({ row }) => <div className="w-auto">{row.getValue("email")}</div>,
      enableHiding: false,
    },
    {
      accessorKey: "phone",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Phone Number" />
      ),
      cell: ({ row }) => <div className="w-10">{row.getValue("phone")}</div>,
      enableHiding: false,
    },
    {
      accessorKey: "inquiryType",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Inquiry Type" />
      ),
      cell: ({ row }) => (
        <div className="w-auto">{row.getValue("inquiryType")}</div>
      ),
      enableHiding: false,
    },
    {
      accessorKey: "message",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Message" />
      ),
      cell: ({ row }) => (
        <div className="w-auto">{row.getValue("message")}</div>
      ),
      enableHiding: false,
    },
    {
      accessorKey: "created_at",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Submitted At" />
      ),
      cell: ({ row }) => (
        <div className="w-auto">
          {new Date(row.getValue("created_at")).toLocaleString()}
        </div>
      ),
      enableHiding: false,
    },
    {
      id: "actions",
      cell: function Cell({ row }) {
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                aria-label="Open menu"
                variant="ghost"
                className="flex size-8 p-0 data-[state=open]:bg-muted"
              >
                <Ellipsis className="size-4" aria-hidden="true" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem
                onSelect={() => setRowAction({ row, type: "delete" })}
              >
                Delete
                <DropdownMenuShortcut>
                  <Trash2 />
                </DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
      size: 40,
    },
  ];
}
