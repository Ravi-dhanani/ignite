"use client";
import { adminEditorsData } from "@/data/adminEditorData";
import { Button, Card, CardBody, Typography } from "@material-tailwind/react";
import { useState } from "react";
import AdminEditorsModal from "./AdminEditorsModal";
import { IAdminUser } from "@/types/orgDetail";

type Props = {
  adminUser: IAdminUser | any;
};

const TABLE_HEADER = ["Name", "Emails", "Joined on", "Added by", "Action"];

export default function AdminEditors({ adminUser }: Props) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="tw-bg-white tw-shadow-md tw-mb-3 tw-p-5">
        <div className="tw-flex tw-items-center tw-justify-between tw-mb-3">
          <Typography variant="h6" className="tw-font-bold">
            Admins
          </Typography>
          <Button
            variant="outlined"
            color="blue-gray"
            className="tw-text-gray-900"
            onClick={handleOpen}
          >
            invite admin
          </Button>
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
                {adminUser &&
                  adminUser?.map((admin: IAdminUser, index: number) => {
                    const isLast = index === adminEditorsData.length - 1;
                    const classes = isLast
                      ? "!tw-p-3"
                      : "!tw-p-3 tw-border-b tw-border-blue-gray-50";

                    return (
                      <tr key={index}>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="!tw-font-bold tw-text-sm tw-text-gray-900"
                          >
                            {admin?.name}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <div>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="!tw-font-medium tw-text-gray-600"
                            >
                              {admin?.email}
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
                              {admin?.createdOn}
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
                              {admin?.createdBy}
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
                  })}
              </tbody>
            </table>
          </CardBody>
        </Card>
      </div>
      <AdminEditorsModal
        open={open}
        handleOpen={handleOpen}
        closeModal={onClose}
      />
    </>
  );
}
