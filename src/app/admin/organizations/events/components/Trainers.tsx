import { MagnifyingGlassIcon, PlusIcon } from "@heroicons/react/24/solid";
import { Button } from "@material-tailwind/react";
import React from "react";
import CreateTrainer from "./CreateTrainer";
import LstTrainers from "./TrainersList";

export default function Trainers() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
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
      <div className="tw-mt-5">
        <LstTrainers />
      </div>
      {open && (
        <div>
          <CreateTrainer open={open} handleOpen={handleOpen} />
        </div>
      )}
    </div>
  );
}
