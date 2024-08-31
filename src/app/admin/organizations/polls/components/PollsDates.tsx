import DatePicker from "@/components/datePicker/DatePicker";
import { CalendarDaysIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function PollsDates() {
  const [startDate, setStartDate] = useState();

  return (
    <div>
      <div className="tw-pb-20 tw-flex tw-justify-center">
        <div className="tw-max-w-4xl tw-w-full tw-bg-white tw-opacity-85 tw-border tw-border-blue-grey-100 tw-rounded-lg tw-p-7">
          <div className="tw-grid tw-grid-cols-1 tw-gap-y-5 md:tw-grid-cols-2 md:tw-gap-x-9">
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
        </div>
      </div>
    </div>
  );
}
