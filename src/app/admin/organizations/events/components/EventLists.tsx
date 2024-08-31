"use client";

import {
  Button,
  Card,
  CardBody,
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

import { getEvents } from "@/services/request/events.service";
import { useQuery } from "@tanstack/react-query";
import { Base64 } from "js-base64";

import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useRouter } from "next/navigation";

export default function EventList({}: Props) {
  const [data, setData] = useState<any>([]);

  const listOfEvents = useQuery({
    queryKey: ["getEvents"],
    queryFn: async () =>
      getEvents()
        .then((response) => {
          setData(response?.data);
        })
        .catch((error: any) => {
          console.error(error);
        }),
  });
  const [filtering, setFiltering] = useState("");
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 8,
  });
  const router = useRouter();

  const columns = [
    {
      accessorFn: (row: any) => row.eventName,
      id: "eventName",
      cell: (info: any) => (
        <span className="!tw-font-semibold tw-text-sm tw-text-gray-900">
          {info.getValue()}
        </span>
      ),
      header: () => "Event Name",
    },
    {
      accessorFn: (row: any) => row.eventType,
      id: "eventType",
      cell: (info: any) => info.getValue(),
      header: () => "Type",
    },
    {
      accessorFn: (row: any) => row.session,
      id: "session",
      cell: (info: any) => 0,
      header: () => "Sessions",
    },
    {
      accessorFn: (row: any) => row.trainers,
      id: "trainers",
      cell: (info: any) => 0,
      header: () => "Trainers",
    },
    {
      accessorFn: (row: any) => row.trainers,
      id: "participants",
      cell: (info: any) => 0,
      header: () => "Participants",
    },
    {
      accessorFn: (row: any) => row,
      id: "updatedBy",
      cell: (info: any) => {
        const lastUpdated = info.getValue();
        return lastUpdated ? (
          <span>
            <span className="tw-font-semibold tw-block tw-text-gray-900">
              {lastUpdated?.updatedBy}
            </span>
            <span className="tw-text-gray-500 tw-text-xs">
              {lastUpdated?.updatedDate}
            </span>
          </span>
        ) : (
          <span>Unknown</span>
        );
      },
      header: () => "Last Updated",
    },
    {
      id: "actions",
      cell: () => (
        <button className="tw-text-gray-600 tw-p-2 tw-rounded hover:tw-bg-gray-200">
          <EllipsisVerticalIcon className="tw-w-5 tw-h-5" />
        </button>
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

  const handleClick = (id: string, eventName: string) => {
    const removeSpaceEventName = eventName.split(" ").join("");
    const encodedId = Base64.encode(id);
    router.push(
      `/admin/organizations/events/${removeSpaceEventName}/${encodedId}`
    );
  };

  return (
    <div className="tw-bg-white tw-p-3">
      <div className="tw-border tw-border-gray-200 tw-rounded-xl">
        <div className="tw-flex tw-flex-col md:tw-flex-row tw-justify-between md:tw-items-center tw-border-b tw-p-5">
          <div>
            <Typography
              variant="h5"
              className="tw-font-bold tw-text-base tw-text-gray-900 tw-mb-2 md:tw-mb-0"
            >
              Events List
            </Typography>
            <Typography
              variant="h3"
              className="!tw-font-normal tw-text-sm !tw-text-gray-600 tw-mb-2 md:tw-mb-0"
            >
              See information about all Events
            </Typography>
          </div>
          <div className="tw-flex tw-flex-col sm:tw-flex-row tw-items-stretch tw-justify-end md:tw-justify-start tw-gap-x-5">
            <div className="tw-border tw-flex tw-mb-2 sm:tw-mb-0 tw-items-center tw-border-gray-200 tw-rounded-md tw-p-3">
              <MagnifyingGlassIcon className="tw-w-5 tw-h-5 tw-text-gray-400" />
              <input
                type="text"
                className="tw-outline-none tw-px-2"
                placeholder="Search"
              />
            </div>
            <Button
              className="tw-w-max tw-self-center sm:tw-self-stretch"
              onClick={() =>
                router.push("/admin/organizations/events/createEvent")
              }
            >
              Add Event
            </Button>
          </div>
        </div>
        <Card className="tw-h-full tw-w-full tw-shadow-sm">
          <CardBody className="tw-overflow-auto !tw-p-0">
            <table className="tw-w-full tw-min-w-max tw-table-auto tw-text-left">
              <thead>
                {table?.getHeaderGroups().map((headerGroup) => (
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
                {table.getRowModel().rows.map((row, index) => (
                  <tr key={row.id}>
                    {row.getVisibleCells().map((cell: any) => {
                      return (
                        <td
                          key={cell.id}
                          className="!tw-border-y !tw-border-x-0"
                        >
                          <Typography
                            variant="small"
                            className="tw-font-normal !tw-text-gray-600 tw-py-4 tw-px-4 tw-cursor-pointer"
                            onClick={async () => {
                              handleClick(
                                cell?.row?.original?.eventId,
                                cell?.row?.original?.eventName
                              );
                            }}
                          >
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}
                          </Typography>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </CardBody>
          <div className="tw-flex tw-items-center tw-justify-between tw-gap-6 tw-px-10 tw-py-6">
            <span className="tw-flex tw-items-center tw-gap-1">
              <span className="tw-font-bold !tw-text-gray-900">Page</span>
              <span className="tw-font-bold tw-text-gray-900">
                {table.getState().pagination.pageIndex + 1}
              </span>
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
    </div>
  );
}
