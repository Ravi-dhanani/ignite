"use client";
import { adminEditorsData } from "@/data";
import { Button, Card, CardBody, Typography } from "@material-tailwind/react";
import { useState } from "react";
import CreateContact from "./components/CreateContact";
import CustomerSupportQuery from "./components/CustomerSupportQuery";
const TABLE_HEADER = ["Name", "Emails", "Type", "Joined on", "Action"];
export default function Contacts() {
  const [openContactModel, setOpenContactModel] = useState(false);
  const handleOpen = () => {
    setOpenContactModel(!openContactModel);
  };
  return (
    <div>
      <div className="tw-bg-white tw-p-5">
        <div className="tw-bg-white">
          <div className="tw-flex tw-items-center tw-justify-between tw-mb-3">
            <Typography variant="h5" className="tw-font-bold">
              Contacts
            </Typography>
            <Button
              variant="filled"
              className="tw-text-gray-900"
              onClick={handleOpen}
            >
              + contact
            </Button>
          </div>
        </div>
        <Card className="tw-h-full tw-w-full tw-border tw-border-blue-gray-100 tw-shadow-sm">
          <CardBody className="tw-overflow-auto !tw-p-0">
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
                          <div className="tw-flex tw-items-center">
                            <Typography
                              variant="h6"
                              className="tw-underline !tw-font-medium tw-text-sm !tw-text-gray-900 tw-mr-2"
                            >
                              Edit
                            </Typography>
                            <Typography
                              variant="h6"
                              className="tw-underline !tw-opacity-100 !tw-text-gray-900 !tw-font-medium tw-text-sm"
                            >
                              Delete
                            </Typography>
                          </div>
                        </td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </CardBody>
        </Card>
        <div className="tw-mt-5">
          <CustomerSupportQuery />
        </div>
      </div>
      {openContactModel && (
        <CreateContact closeModal={handleOpen} open={openContactModel} />
      )}
    </div>
  );
}
