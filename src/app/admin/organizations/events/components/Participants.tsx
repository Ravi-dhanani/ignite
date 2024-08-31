import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { Input } from "@material-tailwind/react";
import React from "react";
import LstParticipants from "./ParticipantsList";

export default function Participants() {
  return (
    <div>
      <div className="tw-flex  md:tw-mx-8 tw-mx-2 tw-flex-wrap tw-gap-y-2 md:gap-y-0 tw-items-center tw-gap-x-4">
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
      </div>
      <div className="tw-mt-5">
        <LstParticipants />
      </div>
    </div>
  );
}
