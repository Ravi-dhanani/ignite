"use client";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Typography,
  Button,
} from "@/components/MaterialTailwind";
import Session from "../../components/Session";
import Participants from "../../components/Participants";
import Trainers from "../../components/Trainers";
import GeneralDetails from "../../components/GeneralDetails";
import { useParams } from "next/navigation";
import { Base64 } from "js-base64";
import { useEffect, useState } from "react";
import { getEvent } from "@/services/request/events.service";
import { useMutation } from "@tanstack/react-query";
import { IEvents } from "@/types/events";

export default function SingleEvent() {
  const { eventId } = useParams();
  const id: any = eventId ? Base64.decode(eventId as string) : null;
  const [event, setEvent] = useState<IEvents>();

  const data = [
    {
      label: "Session",
      value: "Session",
      component: <Session eventId={eventId} />,
    },
    {
      label: "Participants",
      value: "Participants",
      component: <Participants />,
    },

    {
      label: "Trainers",
      value: "Trainers",
      component: <Trainers />,
    },

    {
      label: "General Details",
      value: "General Details",
      component: <GeneralDetails />,
    },
  ];

  const mutation = useMutation({
    mutationFn: async (id: string) => {
      try {
        const response = await getEvent(id);
        setEvent(response?.data);
      } catch (err: any) {
        console.log(err);
      }
    },
  });

  const handleGetEvent = async () => {
    mutation.mutate(id);
  };

  useEffect(() => {
    handleGetEvent();
  }, []);

  return (
    <div className="tw-bg-white">
      {event && (
        <div className="tw-mx-2 tw-pt-7 tw-px-2 md:tw-px-7 ">
          <div className="tw-flex tw-justify-between tw-items-center tw-mb-2 md:tw-mb-1">
            <div>
              <Typography variant="h5">{event?.eventName}</Typography>
            </div>
            <div className="tw-flex tw-items-center tw-gap-x-1">
              <div>
                <Button variant="outlined">Edit Event</Button>
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
            <div className=" tw-flex tw-gap-x-3 ">
              <div className="tw-flex tw-gap-x-1">
                <span className="tw-text-base tw-text-gray-600">Category:</span>
                <span className=" tw-text-base tw-text-black tw-font-bold">
                  {event?.category}
                </span>
              </div>
              <span className="tw-bg-gray-700 tw-w-[3px] tw-h-4 tw-mt-1"></span>
              <div>
                <div className="tw-ml-3 tw-flex tw-gap-x-1 ">
                  <span className="tw-text-base tw-text-gray-600">Type:</span>
                  <span className=" tw-text-base tw-text-black tw-font-bold">
                    {event?.eventType}
                  </span>
                </div>
              </div>
              <span className="tw-bg-gray-700 tw-w-[3px] tw-h-4 tw-mt-1"></span>

              <div>
                <div className="tw-ml-3 tw-flex tw-gap-x-1">
                  <span className="tw-text-base tw-text-gray-600">
                    People Limt:
                  </span>
                  <span className=" tw-text-base tw-text-black tw-font-bold">
                    {event?.maxEnrollment}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="tw-pt-1">
            <div className="tw-flex tw-gap-x-3">
              <div className="tw-flex tw-gap-x-1">
                <span className="tw-text-base tw-text-gray-600">Session:</span>
                <span className=" tw-text-base tw-text-black tw-font-bold">
                  12
                </span>
              </div>
              <span className="tw-bg-gray-700 tw-w-[3px] tw-h-4 tw-mt-1"></span>
              <div className=" ">
                <div className="tw-ml-1 tw-flex tw-gap-x-1 ">
                  <span className="tw-text-base tw-text-gray-600">
                    Participants:
                  </span>
                  <span className=" tw-text-base tw-text-black tw-font-bold">
                    12
                  </span>
                </div>
              </div>
              <span className="tw-bg-gray-700 tw-w-[3px] tw-h-4 tw-mt-1"></span>

              <div>
                <div className="tw-ml-1 tw-flex tw-gap-x-1">
                  <span className="tw-text-base tw-text-gray-600">Coahes:</span>
                  <span className=" tw-text-base tw-text-black tw-font-bold">
                    12
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div>
        <div className="tw-mt-4">
          <Tabs value="Session">
            <TabsHeader className="tw-w-full tw-rounded-none tw-px-2 md:tw-px-8 tw-text-ellipsis tw-overflow-hidden tw-whitespace-nowrap">
              {data.map(({ label, value }) => (
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
              {data.map(({ value, component }) => (
                <TabPanel
                  key={value}
                  value={value}
                  style={{
                    paddingLeft: 0,
                    paddingRight: 0,
                  }}
                >
                  {component}
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
