"use client";
import React from "react";
import { Card, CardBody, Typography } from "@/components/MaterialTailwind";
import { adminEditorsData } from "@/data/adminEditorData";
import { organizationsList } from "@/data";
import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";

type Props = {};

const TABLE_HEADER = [
  "Logo",
  "Organization Name",
  "Domain",
  "Events",
  "Challenges",
  "Polls",
  "Trainers",
  "Challengers",
  "Last updated",
];

const OrganizationsList = (props: Props) => {
  return (
    <>
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
                <th className="tw-border-b tw-border-blue-gray-100/50 !tw-p-4"></th>
              </tr>
            </thead>
            <tbody>
              {organizationsList.map((org, index) => {
                const isLast = index === adminEditorsData.length - 1;
                const classes = isLast
                  ? "!tw-p-3"
                  : "!tw-p-3 tw-border-b tw-border-blue-gray-50";

                return (
                  <tr key={index}>
                    <td className={classes}>
                      <img
                        src={org.logo}
                        alt="logo"
                        className="tw-h-[47px] tw-w-[76px] tw-object-contain"
                      />
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="!tw-font-bold tw-text-sm tw-text-gray-900"
                      >
                        {org.orgName}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <div>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="!tw-font-medium tw-text-gray-600"
                        >
                          {org.domain}
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
                          {org.events}
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
                          {org.chanllenges}
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
                          {org.trainners}
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
                          {org.challengers}
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
                          {org.challengers}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="!tw-font-medium !tw-text-gray-900 tw-text-sm"
                      >
                        {org.lastUpdated.name}
                      </Typography>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="!tw-font-medium tw-text-gray-600 text-sm"
                      >
                        {org.lastUpdated.time}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <div className="tw-flex tw-items-center">
                        <EllipsisVerticalIcon className="tw-text-black tw-h-5 tw-cursor-pointer" />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </CardBody>
      </Card>
    </>
  );
};

export default OrganizationsList;
