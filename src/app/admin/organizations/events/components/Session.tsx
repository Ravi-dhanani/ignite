import { MagnifyingGlassIcon, PlusIcon } from "@heroicons/react/24/solid";
import { Button, Input, Typography } from "@material-tailwind/react";
import React from "react";
import CreateSession from "./CreateSession";
import { SessionList } from "./SessionList";
import { useMutation } from "@tanstack/react-query";

const TABLE_ROWS = [
  {
    SessionName: "Microsfot Zuba Session 1",
    StartDate: "24 Jan 2024",
    Duration: "1 hr 30 mins",
    WellnessProviders: "Trainer Requested ",
    Equipments: "Yoga Mat, Protin Powder, Dumbells",
    Location: "Microsoft Office Gurgaon",
  },
];
type Props = {
  eventId: string | any;
};
export default function Session({ eventId }: Props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  // const mutation = useMutation({
  //   mutationFn: async (id: string) => {
  //     return await
  //   },
  // });

  return (
    <div>
      <div className="tw-flex tw-justify-between md:tw-mx-8 tw-mx-2 tw-flex-wrap tw-gap-y-2 md:gap-y-0 tw-items-center tw-gap-x-4">
        <div className="tw-flex-1">
          <div className="tw-border tw-flex tw-mb-2 sm:tw-mb-0 tw-items-center tw-border-gray-200 tw-rounded-md tw-p-2">
            <MagnifyingGlassIcon className="tw-w-5 tw-h-5 tw-text-gray-400" />
            <input
              type="text"
              className="tw-outline-none tw-px-2 tw-w-full"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="tw-col-span-2">
          <div className="tw-flex tw-justify-self-end">
            <Button
              size="md"
              variant="filled"
              className="tw-flex tw-items-center"
              onClick={handleOpen}
            >
              <PlusIcon className="tw-h-5 tw-w-5 tw-text-white" />
              Create
            </Button>
          </div>
        </div>
      </div>
      {TABLE_ROWS ? (
        <SessionList />
      ) : (
        <div className="tw-w-auto tw-flex tw-justify-center tw-p-20">
          <div className="tw-flex-row">
            <div className="tw-flex tw-justify-center">
              <img src="/assets/events/No session.jpg" className="tw-w-32" />
            </div>
            <Typography variant="h6">No sessions Created</Typography>
          </div>
        </div>
      )}

      {open && (
        <div>
          <CreateSession
            open={open}
            handleOpen={handleOpen}
            eventId={eventId}
          />
        </div>
      )}
    </div>
  );
}
