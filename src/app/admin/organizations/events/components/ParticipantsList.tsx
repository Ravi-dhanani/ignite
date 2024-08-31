import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { Button, Card, CardBody, Typography } from "@material-tailwind/react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React from "react";
import ParticipantInfo from "./ParticipantInfo";

const data = [
  {
    Name: "Jakob Rhiel Madsen",
    Joinedon: "23/04/18",
    Email: "Lyna123@gmail..com",
    Sessions: "3 completed",
    City: "Gurgaon",
  },
  {
    Name: "Jakob Rhiel Madsen",
    Joinedon: "23/04/18",
    Email: "Lyna123@gmail..com",
    Sessions: "3 completed",
    City: "Gurgaon",
  },
  {
    Name: "Jakob Rhiel Madsen",
    Joinedon: "23/04/18",
    Email: "Lyna123@gmail..com",
    Sessions: "3 completed",
    City: "Gurgaon",
  },
  {
    Name: "Jakob Rhiel Madsen",
    Joinedon: "23/04/18",
    Email: "Lyna123@gmail..com",
    Sessions: "3 completed",
    City: "Gurgaon",
  },
  {
    Name: "Jakob Rhiel Madsen",
    Joinedon: "23/04/18",
    Email: "Lyna123@gmail..com",
    Sessions: "3 completed",
    City: "Gurgaon",
  },
  {
    Name: "Jakob Rhiel Madsen",
    Joinedon: "23/04/18",
    Email: "Lyna123@gmail..com",
    Sessions: "3 completed",
    City: "Gurgaon",
  },
];

export default function LstParticipants() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const columns = [
    {
      accessorFn: (row: any) => row.Name,
      id: "Name",
      cell: (info: any) => (
        <div className="tw-flex tw-items-center  tw-w-36 lg:tw-w-auto  tw-gap-x-2">
          <img
            src="https://s3-alpha-sig.figma.com/img/a074/55f7/3a01d6d01eb5a3aaef8f116a5e290746?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mpiu0ZYYiPmugGwNFiBuJKu1dqleGjQ0yIN6ITgz0266nBNXsaZ5aJcQAxk1Mtxe3QbRKf1K6ADlWOXBwRJiSb0h8xichVYWhkpr796BNnt4aoxns5smUykzbU2KVrld8QK3iBiqm1RCB3fd3nqqd8StPh9FsrxQ7u5DaYu~II0dzG2CuuuVUmxbo4H3cejzXoRIw~aiAgwVslbmUJc6k9C728rFRNXSjJTkJfKBs-OdwHhKuyZYihh7xiApaXHz3TLTHo7FDwh8vPq8HFi-oK~bAhwoXFdnJvc4Dfm3uTN2409MrJqjVwraClbvhH041WyDQleu4opw3ohr09dlLQ__"
            className="tw-h-10 tw-w-10 tw-rounded-full tw-object-contain"
          />
          <div className="tw-truncate ">
            <span className="!tw-font-semibold   tw-text-sm tw-text-gray-900">
              {info.getValue()}
            </span>
          </div>
        </div>
      ),
      header: () => "Name",
    },
    {
      accessorFn: (row: any) => row.Joinedon,
      id: "Joinedon",
      cell: (info: any) => info.getValue(),
      header: () => "Joined on",
    },
    {
      accessorFn: (row: any) => row.Email,
      id: "Email",
      cell: (info: any) => info.getValue(),
      header: () => "Email",
    },
    {
      accessorFn: (row: any) => row.Sessions,
      id: "Sessions",
      cell: (info: any) => info.getValue(),
      header: () => "Sessions",
    },
    {
      accessorFn: (row: any) => row.City,
      id: "City",
      cell: (info: any) => info.getValue(),
      header: () => "City",
    },
  ];
  const table = useReactTable({
    data,
    columns,
    getFilteredRowModel: getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });
  return (
    <div className="tw-p-0">
      <Card className="tw-h-full tw-w-full tw-shadow-none">
        <CardBody className="tw-overflow-auto !tw-p-0">
          <div className="tw-border-collapse tw-border-t tw-w-full">
            <table className="tw-w-full">
              <thead>
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id} className="">
                    {headerGroup.headers.map((header) => (
                      <th
                        key={header.id}
                        onClick={header.column.getToggleSortingHandler()}
                        className="tw-p-3  tw-pl-9 tw-text-nowrap tw-text-left tw-capitalize  !tw-text-blue-gray-500 tw-border-b tw-border-blue-gray-100"
                      >
                        <Typography
                          color="blue-gray"
                          className="!tw-font-bold tw-text-sm tw-text-gray-900"
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                        </Typography>
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody className="tw-border-0 ">
                {table.getRowModel().rows.length
                  ? table.getRowModel().rows.map((row, index) => (
                      <tr key={index} onClick={() => setOpen(true)}>
                        {row.getVisibleCells().map((cell) => (
                          <td
                            key={cell.id}
                            className="!tw-border-y tw-text-wrap tw-p-3 tw-pl-9 !tw-border-x-0"
                          >
                            <Typography
                              variant="small"
                              className="tw-font-normal tw-text-base tw-text-left  !tw-text-gray-600  tw-cursor-pointer"
                            >
                              {flexRender(
                                cell.column.columnDef.cell,
                                cell.getContext()
                              )}
                            </Typography>
                          </td>
                        ))}
                      </tr>
                    ))
                  : null}
              </tbody>
            </table>
          </div>
        </CardBody>
        <div className="tw-flex tw-items-center tw-justify-between tw-gap-6 tw-px-10 tw-py-6">
          <span className="tw-flex tw-items-center tw-gap-1">
            <span className="tw-font-bold !tw-text-gray-900">Page</span>
            <span className="tw-font-bold tw-text-gray-900">
              {table.getState().pagination.pageIndex + 1}
            </span>{" "}
            of {table.getPageCount()}
          </span>
          <div className="tw-flex tw-items-center tw-gap-2">
            <Button
              variant="outlined"
              size="sm"
              onClick={() => {
                table.previousPage();
              }}
              disabled={!table.getCanPreviousPage()}
              className="disabled:tw-opacity-30 tw-py-2 tw-px-2 tw-inline-flex tw-items-center tw-capitalize"
            >
              <ChevronLeftIcon className="tw-w-3 tw-h-3 tw-stroke-blue-gray-900 tw-stroke-2" />
              Prev
            </Button>
            <Button
              variant="outlined"
              size="sm"
              onClick={() => {
                table.nextPage();
              }}
              disabled={!table.getCanNextPage()}
              className="disabled:tw-opacity-30 tw-py-2 tw-px-2 tw-inline-flex tw-items-center tw-capitalize"
            >
              Next
              <ChevronRightIcon className="tw-w-3 tw-h-3 tw-stroke-blue-gray-900 tw-stroke-2" />
            </Button>
          </div>
        </div>
      </Card>
      {open && <ParticipantInfo handleOpen={handleOpen} open={open} />}
    </div>
  );
}
