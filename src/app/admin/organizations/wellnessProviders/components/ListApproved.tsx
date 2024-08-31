"use client";

import {
  Button,
  Card,
  CardBody,
  Typography,
} from "@/components/MaterialTailwind";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

type Props = {};

import { requestData } from "@/data/requestData";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import ApproveInfo from "./ApproveInfo";

const ListApproved = ({}: Props) => {
  const [data] = useState(() => [...requestData]);

  const [filtering, setFiltering] = useState("");

  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 8,
  });

  const [openInfo, setOpenInfo] = useState(false);
  const handeleOpenInfo = () => setOpenInfo(() => !openInfo);
  const columns = [
    {
      accessorFn: (row: any) => row.name,
      id: "name",
      cell: (info: any) => (
        <div>
          <div className="tw-flex tw-items-center tw-gap-x-2">
            <div>
              <img
                src="https://s3-alpha-sig.figma.com/img/a074/55f7/3a01d6d01eb5a3aaef8f116a5e290746?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mpiu0ZYYiPmugGwNFiBuJKu1dqleGjQ0yIN6ITgz0266nBNXsaZ5aJcQAxk1Mtxe3QbRKf1K6ADlWOXBwRJiSb0h8xichVYWhkpr796BNnt4aoxns5smUykzbU2KVrld8QK3iBiqm1RCB3fd3nqqd8StPh9FsrxQ7u5DaYu~II0dzG2CuuuVUmxbo4H3cejzXoRIw~aiAgwVslbmUJc6k9C728rFRNXSjJTkJfKBs-OdwHhKuyZYihh7xiApaXHz3TLTHo7FDwh8vPq8HFi-oK~bAhwoXFdnJvc4Dfm3uTN2409MrJqjVwraClbvhH041WyDQleu4opw3ohr09dlLQ__"
                className="tw-h-10 tw-w-10 tw-rounded-full tw-object-contain"
              />
            </div>
            <div>
              <span className="!tw-font-semibold tw-pl-1 tw-text-sm tw-text-gray-900">
                {info.getValue()}
              </span>
            </div>
          </div>
        </div>
      ),
      header: () => "Name",
    },
    {
      accessorFn: (row: any) => row.Type,
      id: "Type",
      cell: (info: any) => info.getValue(),
      header: () => "Type",
    },

    {
      accessorFn: (row: any) => row.Speciality,
      id: "Speciality",
      cell: (info: any) => info.getValue(),
      header: () => "Speciality",
    },
    {
      accessorFn: (row: any) => row.Email,
      id: "Email",
      cell: (info: any) => info.getValue(),
      header: () => "Email",
    },
    {
      accessorFn: (row: any) => row.RequestedOn,
      id: "RequestedOn",
      cell: (info: any) => info.getValue(),
      header: () => "Requested On",
    },

    {
      id: "actions",
      cell: (info: any) => (
        <Button
          variant="outlined"
          style={{
            margin: 0,
          }}
          onClick={handeleOpenInfo}
        >
          View Detail
        </Button>
      ),
    },
  ];

  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter: filtering,
      pagination,
    },
    // @ts-ignore
    onGlobalFilterChange: setFiltering,
    getFilteredRowModel: getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
    onPaginationChange: setPagination,
    getPaginationRowModel: getPaginationRowModel(),
  });
  return (
    <div className="tw-bg-white tw-py-3 tw-px-3 md:tw-px-8">
      <div className="tw-border tw-border-gray-200 tw-rounded-xl">
        <Card className="tw-h-full tw-w-full tw-shadow-sm">
          <CardBody className="tw-overflow-auto !tw-p-0">
            <table className="tw-w-full tw-min-w-max tw-table-auto tw-text-left">
              <thead>
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <th
                        key={header.id}
                        onClick={header.column.getToggleSortingHandler()}
                        className="tw-p-4 tw-capitalize !tw-text-blue-gray-500 tw-border-b tw-border-blue-gray-100"
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
              <tbody className="tw-border-0">
                {table.getRowModel().rows.length
                  ? table.getRowModel().rows.map((row, index) => (
                      <tr key={row.id}>
                        {row.getVisibleCells().map((cell) => (
                          <td
                            key={cell.id}
                            className="!tw-border-y !tw-border-x-0"
                          >
                            <Typography
                              variant="small"
                              className="tw-font-normal !tw-text-gray-600 tw-py-4 tw-px-4 tw-cursor-pointer"
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
        {openInfo && (
          <ApproveInfo handleOpen={handeleOpenInfo} open={openInfo} />
        )}
      </div>
    </div>
  );
};

export default ListApproved;
