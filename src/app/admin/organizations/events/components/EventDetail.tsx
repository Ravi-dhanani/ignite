import DatePicker from "@/components/datePicker/DatePicker";
import { getMasterData } from "@/services/request/events.service";
import { CalendarDaysIcon } from "@heroicons/react/24/solid";
import { Input, Option, Select, Textarea } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import { Control, Controller, UseFormRegister } from "react-hook-form";
type Props = {
  register: UseFormRegister<any>;
  control: Control<any, any>;
  errors: any;
};
export default function EventDetail({ register, control, errors }: Props) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["master-data"],
    queryFn: async () => await getMasterData(),
  });

  const eventCategory = data?.data
    .filter((item: any) => item?.entityName === "EventCategory")
    .map((data: any) => JSON.parse(data?.entityValue));

  // const eventType = data?.data
  //   .filter((item: any) => item?.entityName === "EventType")
  //   .map((data: any) => console.log(JSON.parse(data?.entityValue)));

  return (
    <div>
      <div className="tw-mb-4">
        <label
          htmlFor="event-name"
          className="tw-block tw-text-sm tw-font-medium tw-text-blue-gray-900 tw-mb-2"
        >
          Event Name
        </label>
        {/* <input
          type="text"
          id="event-name"
          placeholder="Event Name"
          {...register("eventName")}
          className={`tw-block tw-outline-none tw-w-full tw-border ${
            errors.eventName ? "tw-border-red-500" : "tw-border-gray-200"
          } tw-rounded-md tw-py-2 tw-px-4 tw-text-gray-700 tw-transition-all`}
        /> */}
        <Input
          placeholder="Enter event name"
          className={`!tw-border focus:!tw-border-2 ${
            errors.eventName
              ? "tw-border-red-500 focus:!tw-border-red-500 focus:tw-ring-gray-900/10"
              : "!tw-border-gray-300 focus:!tw-border-gray-900 focus:tw-ring-gray-900/10"
          } tw-bg-white tw-text-gray-900 placeholder:tw-text-gray-500 placeholder:!tw-opacity-100 `}
          type="text"
          {...register("eventName")}
          error={errors.eventName ? true : false}
          labelProps={{
            className: "tw-hidden",
          }}
          containerProps={{ className: "min-w-[100px]" }}
        />
        {errors.eventName && (
          <span className="tw-text-sm tw-text-red-500">
            {errors?.eventName?.message}
          </span>
        )}
      </div>
      <div className="tw-mb-4 tw-grid tw-grid-cols-2 tw-gap-5">
        <div>
          <label
            htmlFor="event-name"
            className="tw-block tw-text-sm tw-font-medium tw-text-blue-gray-900 tw-mb-2"
          >
            Category Name
          </label>
          {/* <div className="flex w-72 flex-col gap-6">
            <Select size="md" label="Select Version">
              {eventCategory?.length > 0
                ? eventCategory?.map((item: any) =>
                    item?.EventCategory?.length > 0
                      ? item?.EventCategory.map(
                          (subItem: any, subIndex: number) => (
                            <Option key={subIndex} value={subItem.toString()}>
                              {subItem}
                            </Option>
                          )
                        )
                      : ""
                  )
                : ""}
            </Select>
          </div> */}
          <Controller
            name="category"
            control={control}
            render={({ field }) => (
              <Select
                id="event-name"
                label="Select Category"
                containerProps={{
                  className: "tw-min-w-max",
                }}
                onChange={(e) => {
                  console.log("Called ", field);
                  field.onChange(e);
                }}
                className="tw-border"
                error={errors.category}
                selected={field.value}
                value={field.value}
              >
                <Option value="" disabled>
                  Select Category
                </Option>
                {eventCategory?.length > 0
                  ? eventCategory?.map(
                      (item: any) =>
                        item?.EventCategory?.length > 0 &&
                        item?.EventCategory.map(
                          (subItem: any, subIndex: number) => (
                            <Option key={subIndex} value={subItem}>
                              {subItem}
                            </Option>
                          )
                        )
                    )
                  : ""}
              </Select>
            )}
          />
          {errors.category && (
            <span className="tw-text-sm tw-text-red-500">
              {errors?.category?.message}
            </span>
          )}
        </div>
        <div>
          <label
            htmlFor="event-name"
            className="tw-block tw-text-sm tw-font-medium tw-text-blue-gray-900 tw-mb-2"
          >
            Type
          </label>
          <Controller
            name="eventType"
            control={control}
            render={({ field }) => (
              <Select
                label="Select Type"
                containerProps={{
                  className: "tw-min-w-max deside",
                }}
                className="tw-border"
                onChange={(e: any) => {
                  field.onChange(e);
                }}
                error={errors.eventType ? true : false}
              >
                <Option value="offline">offline</Option>
                <Option value="online">online</Option>
              </Select>
            )}
          />
          {errors.eventType && (
            <span className="tw-text-sm tw-text-red-500">
              {errors?.eventType?.message}
            </span>
          )}
        </div>
      </div>
      <div className="tw-mb-4 tw-grid tw-grid-cols-2 tw-gap-5">
        <div>
          <div className="tw-mb-2">
            <label className="tw-text-sm  tw-text-black tw-font-medium">
              Enrollment Start Date
            </label>
          </div>
          <div className="tw-inline-block tw-w-full">
            <div>
              <Controller
                name="enrlmtStartDate"
                control={control}
                render={({ field }) => (
                  <DatePicker
                    icon={<CalendarDaysIcon className="tw-mt-1" />}
                    onChange={(date) => field.onChange(date)}
                    dateFormat="yyyy-MM-dd"
                    placeholder="yyyy-MM-dd"
                    value={new Date(field.value)}
                    className={` ${
                      errors.enrlmtStartDate && "tw-border-red-500"
                    }`}
                  />
                )}
              />
            </div>
            {errors.enrlmtStartDate && (
              <span className="tw-text-sm tw-text-red-500">
                Date is required.
              </span>
            )}
          </div>
        </div>
        <div>
          <div className="tw-mb-2">
            <label className="tw-text-sm  tw-text-black tw-font-medium">
              Enrollment End Date
            </label>
          </div>
          <div className="tw-inline-block tw-w-full">
            <div>
              <Controller
                name="enrlmtEndDate"
                control={control}
                render={({ field }) => (
                  <DatePicker
                    icon={<CalendarDaysIcon className="tw-mt-1" />}
                    onChange={(date) => field.onChange(date)}
                    dateFormat="yyyy-MM-dd"
                    placeholder="yyyy-MM-dd"
                    value={new Date(field.value)}
                    className={`${errors.enrlmtEndDate && "tw-border-red-500"}`}
                  />
                )}
              />
            </div>
            {errors.enrlmtEndDate && (
              <span className="tw-text-sm tw-text-red-500">
                Date is required.
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="tw-mb-4 tw-grid tw-grid-cols-2 tw-gap-5">
        <div>
          <div className="tw-mb-2">
            <label className="tw-text-sm  tw-text-black tw-font-medium">
              Start Date
            </label>
          </div>
          <div className="tw-inline-block tw-w-full">
            <div>
              <Controller
                name="startDate"
                control={control}
                render={({ field }) => (
                  <DatePicker
                    icon={<CalendarDaysIcon className="tw-mt-1" />}
                    onChange={(date) => field.onChange(date)}
                    dateFormat="yyyy-MM-dd"
                    placeholder="yyyy/mm/dd"
                    value={new Date(field.value)}
                    className={`${errors.startDate && "tw-border-red-500"}`}
                  />
                )}
              />
            </div>
            {errors.startDate && (
              <span className="tw-text-sm tw-text-red-500">
                Date is required.
              </span>
            )}
          </div>
        </div>
        <div>
          <div className="tw-mb-2">
            <label className="tw-text-sm  tw-text-black tw-font-medium">
              End Date
            </label>
          </div>
          <div className="tw-inline-block tw-w-full">
            <div>
              <Controller
                name="endDate"
                control={control}
                render={({ field }) => (
                  <DatePicker
                    icon={<CalendarDaysIcon className="tw-mt-1" />}
                    onChange={(date) => field.onChange(date)}
                    dateFormat="yyyy-MM-dd"
                    placeholder="yyyy/mm/dd"
                    value={new Date(field.value)}
                    className={`${errors.enrlmtEndDate && "tw-border-red-500"}`}
                  />
                )}
              />
            </div>
            {errors.enrlmtEndDate && (
              <span className="tw-text-sm tw-text-red-500">
                Date is required.
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="tw-mb-4 tw-grid tw-grid-cols-1 md:tw-grid-cols-2  tw-gap-5">
        <div>
          <label
            htmlFor="event-name"
            className="tw-block tw-text-sm tw-font-medium tw-text-blue-gray-900 tw-mb-2"
          >
            Limit Number of People
          </label>
          {/* <input
            type="number"
            id="limit"
            placeholder="Enter Number"
            {...register("maxEnrollment")}
            className={`tw-block tw-outline-none tw-w-full tw-border ${
              errors.maxEnrollment ? "tw-border-red-500" : "tw-border-gray-200"
            } tw-rounded-md tw-py-2 tw-px-4 tw-text-gray-700 tw-transition-all`}
          /> */}
          <Input
            placeholder="Enter Number"
            className={`!tw-border focus:!tw-border-2 ${
              errors.maxEnrollment
                ? "tw-border-red-500 focus:!tw-border-red-500 focus:tw-ring-gray-900/10"
                : "!tw-border-gray-300 focus:!tw-border-gray-900 focus:tw-ring-gray-900/10"
            } tw-bg-white tw-text-gray-900 placeholder:tw-text-gray-500 placeholder:!tw-opacity-100 `}
            type="number"
            {...register("maxEnrollment")}
            error={errors.maxEnrollment ? true : false}
            labelProps={{
              className: "tw-hidden",
            }}
            containerProps={{ className: "min-w-[100px]" }}
          />
          {errors.maxEnrollment && (
            <span className="tw-text-sm tw-text-red-500">
              {"Limit number of people is required"}
            </span>
          )}
        </div>
        <div>
          <label
            htmlFor="event-name"
            className="tw-block tw-text-sm tw-font-medium tw-text-blue-gray-900 tw-mb-2"
          >
            Equipments Required
          </label>
          {/* <input
            type="text"
            id="limit"
            placeholder="Enter Equipments Required"
            {...register("equipmentsRequired")}
            className={`tw-block tw-outline-none tw-w-full tw-border ${
              errors.equipmentsRequired
                ? "tw-border-red-500"
                : "tw-border-gray-200"
            } tw-rounded-md tw-py-2 tw-px-4 tw-text-gray-700 tw-transition-all`}
          /> */}
          <Input
            placeholder="Enter Equipments Required"
            className={`!tw-border focus:!tw-border-2 ${
              errors.equipmentsRequired
                ? "tw-border-red-500 focus:!tw-border-red-500 focus:tw-ring-gray-900/10"
                : "!tw-border-gray-300 focus:!tw-border-gray-900 focus:tw-ring-gray-900/10"
            } tw-bg-white tw-text-gray-900 placeholder:tw-text-gray-500 placeholder:!tw-opacity-100 `}
            type="text"
            {...register("equipmentsRequired")}
            error={errors.equipmentsRequired ? true : false}
            labelProps={{
              className: "tw-hidden",
            }}
            containerProps={{ className: "min-w-[100px]" }}
          />
          {errors.equipmentsRequired && (
            <span className="tw-text-sm tw-text-red-500">
              {errors.equipmentsRequired.message}
            </span>
          )}
        </div>
      </div>
      <div className="tw-mb-4 tw-grid tw-grid-cols-1 tw-gap-5">
        <label
          htmlFor="event-name"
          className="tw-block tw-text-sm tw-font-medium tw-text-blue-gray-900 tw-mb-2"
        >
          Event Description
          <div className="tw-mt-3 ">
            <Textarea
              label="Message"
              rows={9}
              {...register("description")}
              error={errors.description && true}
            />
            {errors.description && (
              <span className="tw-text-sm tw-text-red-500">
                {errors.description.message}
              </span>
            )}
          </div>
        </label>
      </div>
    </div>
  );
}
