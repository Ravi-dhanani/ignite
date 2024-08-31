"use client";
import {
  Button,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
  Typography,
} from "@/components/MaterialTailwind";
import React from "react";
import Approved from "./components/Approved";
import Request from "./components/Request";

const data = [
  {
    label: "Requests",
    value: "Requests",
    desc: <Request />,
  },
  {
    label: "Approved",
    value: "Approved",
    desc: <Approved />,
  },

  {
    label: "Rejected",
    value: "Rejected",
    desc: <></>,
  },
];

export default function WellnessProviders() {
  return (
    <React.Fragment>
      <div className="tw-bg-white">
        <div className="tw-mx-2 tw-pt-7 tw-pl-7 tw-pr-7">
          <div className="tw-flex tw-justify-between">
            <div>
              <Typography variant="h5">Wellness Providers</Typography>
            </div>
            <div className="tw-flex tw-items-center tw-gap-x-1">
              <div>
                <Button variant="outlined">Edit</Button>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="tw-size-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="tw-pt-1">
            <div className="tw-flex tw-gap-x-3 ">
              <div className="tw-flex tw-gap-x-1">
                <span className="tw-text-base tw-text-gray-600">Requests:</span>
                <span className=" tw-text-base tw-text-black tw-font-bold">
                  12
                </span>
              </div>
              <span className="tw-bg-gray-700 tw-w-[3px] tw-h-4 tw-mt-1"></span>
              <div className=" ">
                <div className="tw-ml-3 tw-flex tw-gap-x-1 ">
                  <span className="tw-text-base tw-text-gray-600">
                    Onboarded:
                  </span>
                  <span className=" tw-text-base tw-text-black tw-font-bold">
                    114
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="tw-mt-5">
            <Tabs value="Requests">
              <TabsHeader className="tw-w-full tw-rounded-none tw-px-8 md:tw-pl-8">
                {data?.map(({ label, value }) => (
                  <Tab
                    key={value}
                    value={value}
                    style={{
                      width: 150,
                    }}
                  >
                    {label}
                  </Tab>
                ))}
              </TabsHeader>
              <TabsBody>
                {data?.map(({ value, desc }) => (
                  <TabPanel
                    key={value}
                    value={value}
                    style={{
                      paddingLeft: 0,
                      paddingRight: 0,
                    }}
                  >
                    {desc}
                  </TabPanel>
                ))}
              </TabsBody>
            </Tabs>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
