import {
  ChevronLeftIcon,
  ChevronRightIcon,
  EllipsisVerticalIcon,
} from "@heroicons/react/24/solid";
import {
  Button,
  Card,
  CardBody,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from "@material-tailwind/react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import EditSession from "./EditSession";

const data = [
  {
    SessionName: "Microsfot Zuba Session 1",
    StartDate: "23/04/18",
    Duration: "1 hr 30 mins",
    WellnessProviders: "Trainer Requested",
    Equipments: "Yoga Mat, Protin Powder, Dumbells",
    Location: "Microsoft Office Gurgaon",
  },
  {
    SessionName: "Microsfot Zuba Session 1",
    StartDate: "23/04/18",
    Duration: "1 hr 30 mins",
    WellnessProviders: "Trainer Requested",
    Equipments: "Yoga Mat, Protin Powder, Dumbells",
    Location: "Microsoft Office Gurgaon",
  },
  {
    SessionName: "Microsfot Zuba Session 1",
    StartDate: "23/04/18",
    Duration: "1 hr 30 mins",
    WellnessProviders: "Trainer Requested",
    Equipments: "Yoga Mat, Protin Powder, Dumbells",
    Location: "Microsoft Office Gurgaon",
  },
  {
    SessionName: "Microsfot Zuba Session 1",
    StartDate: "23/04/18",
    Duration: "1 hr 30 mins",
    WellnessProviders: "Trainer Requested",
    Equipments: "Yoga Mat, Protin Powder, Dumbells",
    Location: "Microsoft Office Gurgaon",
  },
  {
    SessionName: "Microsfot Zuba Session 1",
    StartDate: "23/04/18",
    Duration: "1 hr 30 mins",
    WellnessProviders: "Trainer Requested",
    Equipments: "Yoga Mat, Protin Powder, Dumbells",
    Location: "Microsoft Office Gurgaon",
  },
  {
    SessionName: "Microsfot Zuba Session 1",
    StartDate: "23/04/18",
    Duration: "1 hr 30 mins",
    WellnessProviders: "Trainer Requested",
    Equipments: "Yoga Mat, Protin Powder, Dumbells",
    Location: "Microsoft Office Gurgaon",
  },
  {
    SessionName: "Microsfot Zuba Session 1",
    StartDate: "23/04/18",
    Duration: "1 hr 30 mins",
    WellnessProviders: "Trainer Requested",
    Equipments: "Yoga Mat, Protin Powder, Dumbells",
    Location: "Microsoft Office Gurgaon",
  },
  {
    SessionName: "Microsfot Zuba Session 1",
    StartDate: "23/04/18",
    Duration: "1 hr 30 mins",
    WellnessProviders: "Trainer Requested",
    Equipments: "Yoga Mat, Protin Powder, Dumbells",
    Location: "Microsoft Office Gurgaon",
  },
];

export function SessionList() {
  const [openModel, setOpenModel] = useState<Boolean>(false);

  const handleOpen = () => setOpenModel((cur) => !cur);
  const columns = [
    {
      accessorFn: (row: any) => row.SessionName,
      id: "SessionName",
      cell: (info: any) => (
        <span className="!tw-font-semibold tw-text-sm tw-text-nowrap tw-text-gray-900">
          {info.getValue()}
        </span>
      ),
      header: () => "Session Name",
    },
    {
      accessorFn: (row: any) => row.StartDate,
      id: "StartDate",
      cell: (info: any) => info.getValue(),
      header: () => "Start Date",
    },
    {
      accessorFn: (row: any) => (
        <Typography
          variant="small"
          className="tw-font-normal tw-text-base tw-text-nowrap tw-text-left  !tw-text-gray-600  tw-cursor-pointer"
        >
          {row.Duration}
        </Typography>
      ),
      id: "Duration",
      cell: (info: any) => info.getValue(),
      header: () => "Duration",
    },
    {
      accessorFn: (row: any) => row.WellnessProviders,
      id: "WellnessProviders",
      cell: (info: any) => info.getValue(),
      header: () => "Wellness Providers",
    },
    {
      accessorFn: (row: any) => row.Equipments,
      id: "Equipments",
      cell: (info: any) => info.getValue(),
      header: () => "Equipments",
    },
    {
      accessorFn: (row: any) => row.Location,
      id: "Location",
      cell: (info: any) => info.getValue(),
      header: () => "Location",
    },

    {
      id: "actions",
      cell: () => (
        <Menu placement="bottom-end">
          <MenuHandler>
            <button>
              <EllipsisVerticalIcon className="tw-w-5 tw-h-5 tw-text-gray-600 " />
            </button>
          </MenuHandler>
          <MenuList>
            <MenuItem onClick={handleOpen}>Edit</MenuItem>
            <MenuItem>Delete</MenuItem>
          </MenuList>
        </Menu>
      ),
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
    <div>
      <Card className="tw-h-full tw-w-full  tw-shadow-none tw-mt-5">
        <CardBody className="tw-overflow-auto !tw-p-0">
          <div className="tw-border-collapse  tw-border-t tw-w-full">
            <table className="tw-w-full">
              <thead>
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <th
                        key={header.id}
                        onClick={header.column.getToggleSortingHandler()}
                        className="tw-p-3 tw-pl-9 tw-text-nowrap tw-text-left tw-capitalize  !tw-text-blue-gray-500 tw-border-b tw-border-blue-gray-100"
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
                      <tr key={row.id}>
                        {row.getVisibleCells().map((cell) => (
                          <td
                            key={cell.id}
                            className="!tw-border-y tw-text-wrap tw-p-3 tw-pl-9 !tw-border-x-0"
                          >
                            <Typography
                              variant="small"
                              className="tw-font-normal tw-text-base tw-text-left  !tw-text-gray-600"
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
      {openModel && <EditSession open={openModel} handleOpen={handleOpen} />}
    </div>
  );
}
