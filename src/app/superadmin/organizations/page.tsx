"use client";
import { Button, Typography } from "@/components/MaterialTailwind";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import OrganizationsList from "./components/OrganizationsList";
import { useState } from "react";
import CreateOrganization from "./components/CreateOrganization";

type Props = {};

const Organizations = (props: Props) => {
  const [open, setOpen] = useState(false);
  const handleCloseModal = () => {
    setOpen(false);
  };
  return (
    <>
      <div>
        <div className="tw-flex tw-flex-col md:tw-flex-row tw-justify-between md:tw-items-center tw-mb-4">
          <Typography
            variant="h3"
            className="tw-font-bold tw-text-3xl tw-text-gray-900 tw-mb-2 md:tw-mb-0"
          >
            Organizations
          </Typography>
          <div className="tw-flex tw-flex-col sm:tw-flex-row tw-items-stretch tw-justify-end md:tw-justify-start tw-gap-x-5">
            <div className="tw-border tw-flex tw-mb-2 sm:tw-mb-0 tw-items-center tw-border-gray-200 tw-rounded-md tw-p-3">
              <MagnifyingGlassIcon className="tw-w-5 tw-h-5 tw-text-gray-400" />
              <input
                type="text"
                className="tw-outline-none tw-px-2"
                placeholder="Search"
              />
            </div>
            <Button
              className="tw-w-max sm:tw-self-stretch"
              onClick={() => setOpen(!open)}
              size="sm"
            >
              Add Org
            </Button>
          </div>
        </div>
        <OrganizationsList />
      </div>
      {open && <CreateOrganization open={open} closeModal={handleCloseModal} />}
    </>
  );
};

export default Organizations;
