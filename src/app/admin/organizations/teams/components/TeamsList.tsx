"use client";

import {
  Button,
  Card,
  CardBody,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from "@/components/MaterialTailwind";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  EllipsisVerticalIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";

type Props = {};

import { TeamsData } from "@/data/TeamsData";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useRouter } from "next/navigation";
import EditTeam from "./EditTeam";

export default function TeamsList({}: Props) {
  const [data] = useState(() => [...TeamsData]);
  const [filtering, setFiltering] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 8,
  });
  const router = useRouter();
  const columns = [
    {
      accessorFn: (row: any) => row.TeamName,
      id: "TeamName",
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
              <span className="!tw-font-semibold  tw-text-sm tw-text-gray-900">
                {info.getValue()}
              </span>
            </div>
          </div>
        </div>
      ),
      header: () => "Team Name",
    },
    {
      accessorFn: (row: any) => row.TeamMembers,
      id: "TeamMembers",
      cell: (info: any) => info.getValue(),
      header: () => "Team Members",
    },
    {
      accessorFn: (row: any) => row.Createdon,
      id: "Createdon",
      cell: (info: any) => info.getValue(),
      header: () => "Created on",
    },

    {
      id: "actions",
      cell: () => (
        <Menu placement="bottom-end">
          <MenuHandler>
            <button className="tw-text-gray-600 tw-p-2 tw-rounded hover:tw-bg-gray-200">
              <EllipsisVerticalIcon className="tw-w-5 tw-h-5" />
            </button>
          </MenuHandler>
          <MenuList>
            <MenuItem onClick={handleOpen}>Edit Team</MenuItem>
          </MenuList>
        </Menu>
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
    <div className="tw-bg-white tw-p-3">
      <div className="tw-border tw-border-gray-200 tw-rounded-xl">
        <div className="tw-flex tw-flex-col md:tw-flex-row tw-justify-between md:tw-items-center tw-border-b tw-p-5">
          <div>
            <Typography
              variant="h5"
              className="tw-font-bold tw-text-base tw-text-gray-900 tw-mb-2 md:tw-mb-0"
            >
              Teams
            </Typography>
            <Typography
              variant="h3"
              className="!tw-font-normal tw-text-sm !tw-text-gray-600 tw-mb-2 md:tw-mb-0"
            >
              See information about all Teams
            </Typography>
          </div>
          <div className="tw-flex tw-flex-col sm:tw-flex-row tw-items-stretch tw-justify-end md:tw-justify-start tw-gap-x-5">
            <div className="tw-border  tw-flex tw-mb-2 sm:tw-mb-0 tw-items-center tw-border-gray-200 tw-rounded-md tw-p-2">
              <MagnifyingGlassIcon className="tw-w-5 tw-h-5 tw-text-gray-400" />
              <input
                type="text"
                className="tw-outline-none tw-px-2"
                placeholder="Search"
              />
            </div>
            <div className="tw-flex tw-justify-center">
              <Button
                size="md"
                className="tw-w-max tw-self-center sm:tw-self-stretch"
                onClick={() =>
                  router.push("/admin/organizations/teams/createTeam")
                }
              >
                + Team
              </Button>
            </div>
          </div>
        </div>
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
      </div>
      {open && <EditTeam handleOpen={handleOpen} open={open} />}
    </div>
  );
}
