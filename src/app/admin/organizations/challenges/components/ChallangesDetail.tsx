import DatePicker from "@/components/datePicker/DatePicker";
import { CalendarDaysIcon } from "@heroicons/react/24/solid";
import { Input, Option, Select, Textarea } from "@material-tailwind/react";
import { useState } from "react";

export default function ChallangesDetail() {
  const [startDate, setStartDate] = useState();

  return (
    <div>
      <div className="tw-mb-4">
        <label
          htmlFor="Challenge Name"
          className="tw-block tw-text-sm tw-font-medium tw-text-blue-gray-900 tw-mb-2"
        >
          Challenge Name
        </label>
        <input
          type="text"
          id="Challenge Name"
          placeholder="Challenge Name"
          className="tw-block tw-outline-none tw-w-full tw-border tw-border-gray-200 tw-rounded-md tw-py-2 tw-px-4 tw-text-gray-700 tw-transition-all"
        />
      </div>
      <div className="tw-mb-4 tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-5">
        <div>
          <label
            htmlFor="event-name"
            className="tw-block tw-text-sm tw-font-medium tw-text-blue-gray-900 tw-mb-2"
          >
            Category
          </label>
          <Select
            label="Select Category"
            containerProps={{
              className: "tw-min-w-max",
            }}
            className="tw-border tw-border-gray-200"
          >
            <Option>category 1</Option>
            <Option>category 2</Option>
          </Select>
        </div>
        <div>
          <label
            htmlFor="event-name"
            className="tw-block tw-text-sm tw-font-medium tw-text-blue-gray-900 tw-mb-2"
          >
            Value to complete per day
          </label>
          <Input label="4" />
        </div>
      </div>
      <div className="tw-grid">
        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-7">
          <div>
            <label
              htmlFor="event-name"
              className="tw-block tw-text-sm tw-font-medium tw-text-blue-gray-900 tw-mb-2"
            >
              Start Date
            </label>
            <DatePicker
              icon={<CalendarDaysIcon className="tw-mt-1" />}
              dateFormat="dd/mm/yyyy"
              onChange={(date: any) => setStartDate(date)}
              placeholder="dd/mm/yyyy"
              value={startDate}
              className="tw-w-96"
            />
          </div>
          <div>
            <label
              htmlFor="event-name"
              className="tw-block tw-text-sm tw-font-medium tw-text-blue-gray-900 tw-mb-2"
            >
              Participation Deadline
            </label>
            <DatePicker
              icon={<CalendarDaysIcon className="tw-mt-1" />}
              dateFormat="dd/mm/yyyy"
              onChange={(date: any) => setStartDate(date)}
              placeholder="dd/mm/yyyy"
              value={startDate}
              className="tw-w-96"
            />
          </div>
        </div>
      </div>
      <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-mt-4">
        <div>
          <label
            htmlFor="event-name"
            className="tw-block tw-text-sm tw-font-medium tw-text-blue-gray-900 tw-mb-2"
          >
            End Date
          </label>
          <DatePicker
            icon={<CalendarDaysIcon className="tw-mt-1" />}
            dateFormat="dd/mm/yyyy"
            onChange={(date: any) => setStartDate(date)}
            placeholder="dd/mm/yyyy"
            value={startDate}
            className="tw-w-96"
          />
        </div>
      </div>
      <div className="tw-mt-4">
        <label
          htmlFor="event-name"
          className="tw-block tw-text-sm tw-font-medium tw-text-blue-gray-900 tw-mb-2"
        >
          Challenge Description
        </label>
        <Textarea label="Challenge Description" rows={5} />
      </div>
    </div>
  );
}
