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

import { pollsData } from "@/data/pollsData";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useRouter } from "next/navigation";
import PollInfo from "./PollInfo";

const PollsList = ({}: Props) => {
  const [data] = useState(() => [...pollsData]);
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
      accessorFn: (row: any) => row.PollsName,
      id: "PollsName",
      cell: (info: any) => (
        <div>
          <span className="!tw-font-semibold tw-pl-1 tw-text-sm tw-text-gray-900">
            {info.getValue()}
          </span>
        </div>
      ),
      header: () => "Polls Name",
    },
    {
      accessorFn: (row: any) => row.TotalVotes,
      id: "TotalVotes",
      cell: (info: any) => info.getValue(),
      header: () => "Total Votes",
    },
    {
      accessorFn: (row: any) => row.StartDate,
      id: "StartDate",
      cell: (info: any) => info.getValue(),
      header: () => "Start Date",
    },
    {
      accessorFn: (row: any) => row.EndDate,
      id: "EndDate",
      cell: (info: any) => info.getValue(),
      header: () => "EndDate",
    },
    {
      accessorFn: (row: any) => row.Status,
      id: "Status",
      cell: (info: any) => info.getValue(),
      header: () => "Status",
    },

    {
      id: "actions",
      cell: (info: any) => (
        <Menu placement="bottom-end">
          <MenuHandler>
            <button className="tw-text-gray-600 tw-p-2 tw-rounded hover:tw-bg-gray-200">
              <EllipsisVerticalIcon className="tw-w-5 tw-h-5" />
            </button>
          </MenuHandler>
          <MenuList>
            <MenuItem>End Poll</MenuItem>
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
              Polls
            </Typography>
            <Typography
              variant="h3"
              className="!tw-font-normal tw-text-sm !tw-text-gray-600 tw-mb-2 md:tw-mb-0"
            >
              See information about all Polls
            </Typography>
          </div>
          <div className="tw-flex tw-flex-col tw-justify-center sm:tw-flex-row tw-items-stretch sm:tw-justify-end md:tw-justify-start tw-gap-x-5">
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
                onClick={() =>
                  router.push("/admin/organizations/polls/createPolls")
                }
              >
                + Poll
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
                      <tr key={row.id} onClick={handleOpen}>
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
      {open && <PollInfo handleOpen={handleOpen} open={open} />}
    </div>
  );
};

export default PollsList;
