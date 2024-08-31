import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { Input } from "@material-tailwind/react";
import ListApproved from "./ListApproved";

export default function Approved() {
  return (
    <div>
      <div className="tw-flex tw-justify-center tw-mx-3 md:tw-mx-8">
        <div className="tw-border tw-flex tw-mb-2 tw-w-full sm:tw-mb-0 tw-items-center tw-border-gray-200 tw-rounded-md tw-p-2">
          <MagnifyingGlassIcon className="tw-w-5 tw-h-5 tw-text-gray-400" />
          <input
            type="text"
            className="tw-outline-none tw-px-2 tw-w-full"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="tw-mt-3">
        <ListApproved />
      </div>
    </div>
  );
}
