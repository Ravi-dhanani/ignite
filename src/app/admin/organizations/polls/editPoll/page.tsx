"use client";
import Breadcrumb from "@/components/Breadcrumb";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { Button } from "@material-tailwind/react";
import { usePathname, useRouter } from "next/navigation";
import PollsDates from "../components/PollsDates";
import PollsDetail from "../components/PollsDetail";

export default function EditPolls() {
  const router = useRouter();
  const pathName = usePathname();

  return (
    <div className="tw-fixed tw-inset-0 tw-bg-[#F7F7F7] tw-z-50 ">
      <div className=" tw-h-16 tw-bg-white tw-shadow-md tw-flex tw-items-center tw-justify-between tw-py-2 tw-px-4">
        <h1 className="tw-text-xl tw-flex tw-items-center">
          <XMarkIcon
            className="tw-w-5 tw-h-5 tw-mr-2 tw-cursor-pointer"
            onClick={() => router.push("/admin/organizations/polls")}
          />
          Edit Poll
        </h1>
        <Button
          className="tw-text-blue-gray-900 tw-font-semibold tw-text-sm"
          onClick={() => router.push("/admin/organizations/polls")}
        >
          Save
        </Button>
      </div>
      <div className="tw-overflow-scroll tw-h-full tw-w-full">
        <div className="tw-capitalize tw-p-3 tw-bg-blue-gray-50/50">
          <Breadcrumb path={pathName} />
        </div>
        <div className="tw-p-5 tw-flex tw-justify-center">
          <div className="tw-max-w-4xl tw-w-full tw-bg-white tw-opacity-85 tw-border tw-border-blue-grey-100 tw-rounded-lg tw-p-5">
            <PollsDetail />
          </div>
        </div>
        <div className="tw-p-5">
          <PollsDates />
        </div>
      </div>
    </div>
  );
}
