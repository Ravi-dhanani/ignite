import { Option, Select, Textarea } from "@material-tailwind/react";
import React from "react";

export default function MediaDetail() {
  return (
    <div>
      <div className="tw-mb-4">
        <label
          htmlFor="event-name"
          className="tw-block tw-text-sm tw-font-medium tw-text-blue-gray-900 tw-mb-2"
        >
          Type
        </label>
        <Select
          label="Carasoule"
          containerProps={{
            className: "tw-min-w-max",
          }}
          className="tw-border tw-border-gray-200"
        >
          <Option>category 1</Option>
          <Option>category 2</Option>
        </Select>
      </div>

      <div className="tw-mb-4 tw-grid tw-grid-cols-1 tw-gap-5">
        <label
          htmlFor="event-name"
          className="tw-block tw-text-sm tw-font-medium tw-text-blue-gray-900 tw-mb-2"
        >
          Caption
          <div className="tw-mt-3 ">
            <Textarea label="Enter Description" rows={9} />
          </div>
        </label>
      </div>
    </div>
  );
}
