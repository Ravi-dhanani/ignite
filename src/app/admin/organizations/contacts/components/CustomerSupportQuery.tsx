import { Input, Typography } from "@material-tailwind/react";
import React from "react";
import CustomerQueryCard from "./CustomerQueryCard";

export default function CustomerSupportQuery() {
  return (
    <div>
      <Typography variant="h5">Customer Support Querries</Typography>
      <div className="tw-mb-5 tw-mt-2">
        <label
          htmlFor="event-name"
          className="tw-block tw-text-sm tw-font-medium tw-text-blue-gray-900 tw-mb-2"
        >
          Customer Support Queries will go to Type
        </label>
        <Input type="text" label="admin@gnite.com" />
      </div>
      <CustomerQueryCard />
    </div>
  );
}
