"use client";
import { adminEditorsData } from "@/data";
import {
  EllipsisVerticalIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import CreateExecutive from "./components/CreateExecutive";
import SponsorsImage from "./components/SponsorsImage";
const TABLE_HEADER = [
  "Executive Name",
  "Designation",
  "Company",
  "Added on",
  "",
];
export default function Sponsors() {
  const [openExecutiveModel, setOpenExecutiveModel] = useState(false);

  const handleOpen = () => {
    setOpenExecutiveModel(!openExecutiveModel);
  };

  return (
    <div className="tw-bg-white tw-p-5">
      <Typography variant="h4" className="tw-font-bold tw-mb-5">
        Sponsors
      </Typography>
      <Card className="tw-h-full tw-w-full tw-border tw-border-blue-gray-100 tw-shadow-sm">
        <CardHeader className="tw-shadow-none tw-bg-transparent">
          <div className="tw-flex tw-flex-col  md:tw-flex-row tw-justify-between md:tw-items-center">
            <div>
              <Typography variant="h6" color="blue-gray">
                Executive Sponsors
              </Typography>
              <Typography
                variant="h3"
                className="!tw-font-normal tw-text-sm !tw-text-gray-600 tw-mb-2 md:tw-mb-0"
              >
                See information about all Executive Sponsors
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
              <div>
                <Button
                  size="md"
                  className="tw-w-max tw-self-center sm:tw-self-stretch"
                  onClick={handleOpen}
                >
                  + Executive
                </Button>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardBody className="tw-overflow-auto !tw-p-0 tw-border-t tw-mt-5">
          <table className="tw-w-full tw-min-w-max tw-table-auto tw-text-left">
            <thead>
              <tr>
                {TABLE_HEADER.map((head) => (
                  <th
                    key={head}
                    className="tw-border-b tw-border-blue-gray-100/50 !tw-p-4"
                  >
                    <Typography
                      color="blue-gray"
                      className="!tw-font-bold tw-text-sm tw-text-gray-900"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {adminEditorsData.map(
                ({ name, email, accessLevel, doj }, index) => {
                  const isLast = index === adminEditorsData.length - 1;
                  const classes = isLast
                    ? "!tw-p-3"
                    : "!tw-p-3 tw-border-b tw-border-blue-gray-50";

                  return (
                    <tr key={index}>
                      <td className={classes}>
                        <div className="tw-flex tw-items-center tw-gap-x-2">
                          <img
                            src="https://demos.creative-tim.com/nextjs-material-tailwind-dashboard-pro/img/team-3.jpg"
                            alt=" "
                            className="tw-h-8 tw-w-8 tw-rounded-full"
                          />
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="!tw-font-bold tw-text-sm tw-text-gray-900"
                          >
                            {name}
                          </Typography>
                        </div>
                      </td>
                      <td className={classes}>
                        <div>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="!tw-font-medium tw-text-gray-600"
                          >
                            {email}
                          </Typography>
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="tw-w-max">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="!tw-font-medium tw-text-gray-600"
                          >
                            {accessLevel}
                          </Typography>
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="tw-flex tw-items-center tw-gap-2">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="!tw-font-medium tw-text-gray-600"
                          >
                            {doj}
                          </Typography>
                        </div>
                      </td>

                      <td className={classes}>
                        <EllipsisVerticalIcon className="tw-h-6 tw-w-6 tw-text-gray-500" />
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
      </Card>
      <div className="tw-mt-5 tw-space-y-2">
        <SponsorsImage
          title={"Wellness Sponsors"}
          subTitle="Upload size less than 5 MB , horizontal logo preferred"
        />
        <SponsorsImage
          title={"Technology Sponsors"}
          subTitle="Upload size less than 5 MB , horizontal logo preferred"
        />
      </div>
      <CreateExecutive closeModal={handleOpen} open={openExecutiveModel} />
    </div>
  );
}
