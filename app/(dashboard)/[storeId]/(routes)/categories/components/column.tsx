"use client"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ColumnDef, RowExpanding } from "@tanstack/react-table"
import { CellAction } from "./cell-action"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type CategoryColumn = {
  id: string
  name: string
  bannerLabel : string
  createdAt: string
 
}

export const columns: ColumnDef<CategoryColumn>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "banner",
    header: "Banner",
    cell :({row})   => row.original.bannerLabel
  },
  {
    id: "actions",
    cell: ({row})=> <CellAction data={row.original} />
  }
]
