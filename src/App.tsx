import {
  MRT_ColumnDef,
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table"
import { useMemo, useState } from "react"
import { MockItem, notGroupedMockData } from "./mock"

export default function App() {
  const [grouping, setGrouping] = useState<string[]>(["state"])

  const columns = useMemo<MRT_ColumnDef<MockItem>[]>(
    () => [
      {
        accessorKey: "first_name",
        header: "First Name",
      },
      {
        accessorKey: "last_name",
        header: "Last Name",
      },
      {
        accessorKey: "email",
        header: "Email",
      },
      {
        accessorKey: "state",
        header: "State",
      },
    ],
    [],
  )

  const data = useMemo(() => notGroupedMockData, [grouping])

  const table = useMaterialReactTable({
    columns,
    data,

    // Grouping options.
    enableGrouping: true,
    manualGrouping: false,
    groupedColumnMode: "reorder",
    onGroupingChange: setGrouping,
    state: {
      grouping,
    },

    // Pagination options.
    initialState: {
      pagination: {
        pageSize: 50,
        pageIndex: 0,
      },
    },

    // Full screen options.
    muiTablePaperProps: {
      style: {
        height: "100dvh",
        display: "flex",
        flexDirection: "column",
      },
    },
    muiTableContainerProps: {
      style: { flex: 1 },
    },
  })

  return <MaterialReactTable table={table} />
}
