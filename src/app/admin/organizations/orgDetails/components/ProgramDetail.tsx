import DatePicker from "@/components/datePicker/DatePicker";
import { orgDetailDatesUpdate } from "@/services/request/orgdetails.service";
import { ITenantDetail } from "@/types/orgDetail";
import { showToast } from "@/utils/toast";
import { getFormateDate } from "@/utils/utils";
import { CalendarDaysIcon } from "@heroicons/react/24/solid";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Button,
  Card,
  CardBody,
  Input,
  Typography,
} from "@material-tailwind/react";
import { UseQueryResult } from "@tanstack/react-query";

interface IProgramDetailProps {
  tenantDetail: ITenantDetail;
  refetchData: UseQueryResult<void, Error>;
}

import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup
  .object({
    programStartDate: yup.date().required("Program Start Date is required"),
    programEndDate: yup.date().required("Program End Date is required"),
    coachRegStartDate: yup
      .date()
      .required("Coach Registration Start Date is required"),
    coachRegEndDate: yup
      .date()
      .required("Coach Registration End Date is required"),
    chlngrRegStartDate: yup
      .date()
      .required("Challenger Registration Start Date is required"),
    chlngrRegEndDate: yup
      .date()
      .required("Challenger Registration End Date is required"),
    maxChallenger: yup
      .number()
      .positive()
      .min(0)
      .required("Max Challenger is required"),
  })
  .required();

export default function ProgramDetail(props: IProgramDetailProps) {
  const { tenantDetail, refetchData } = props;

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ITenantDetail>({
    resolver: yupResolver(schema),
    defaultValues: tenantDetail,
  });

  const onSubmit = async (data: any) => {
    try {
      const programDetailData = {
        programStartDate: getFormateDate(data?.programStartDate),
        programEndDate: getFormateDate(data?.programEndDate),
        coachRegStartDate: getFormateDate(data?.coachRegStartDate),
        coachRegEndDate: getFormateDate(data?.coachRegEndDate),
        chlngrRegStartDate: getFormateDate(data?.chlngrRegStartDate),
        chlngrRegEndDate: getFormateDate(data?.chlngrRegEndDate),
        maxChallenger: data?.maxChallenger,
      };
      const response: any = await orgDetailDatesUpdate(programDetailData);
      console.log(response.success);
      if (response?.success) {
        showToast("Program details updated successfully.", "success");
        refetchData.refetch();
      }
    } catch (err: any) {
      showToast("Something went wrong. Please try again", "error");
    }
  };
  return (
    <div>
      <div className="tw-bg-white tw-shadow-md tw-mb-3 tw-p-5">
        <div className="tw-flex tw-items-center tw-justify-between tw-mb-3">
          <Typography variant="h6" className="tw-font-bold">
            Program Details
          </Typography>
        </div>
        <Card className="tw-h-full tw-w-full tw-shadow-none">
          <CardBody className=" !tw-p-0">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="tw-grid tw-grid-cols-1 tw-gap-y-3 md:tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-x-7">
                <div>
                  <div className="tw-mb-2">
                    <label className="tw-text-sm  tw-text-black tw-font-medium">
                      Program Start Date
                    </label>
                  </div>
                  <div className="tw-inline-block tw-w-full">
                    <Controller
                      name="programStartDate"
                      control={control}
                      render={({ field }) => (
                        <DatePicker
                          icon={<CalendarDaysIcon className="tw-mt-1" />}
                          onChange={(date) => field.onChange(date)}
                          dateFormat="yyyy-MM-dd"
                          placeholder="yyyy/mm/dd"
                          value={new Date(field.value)}
                          className={` ${
                            errors.programStartDate && "tw-border-red-500"
                          }`}
                        />
                      )}
                    />
                    {errors.programStartDate && (
                      <span className="tw-text-sm tw-text-red-500">
                        Date is required.
                      </span>
                    )}
                  </div>
                </div>
                <div>
                  <div className="tw-mb-2">
                    <label className="tw-text-sm  tw-text-black tw-font-medium">
                      Program End Date
                    </label>
                  </div>
                  <div className="tw-inline-block tw-w-full">
                    <Controller
                      name="programEndDate"
                      control={control}
                      render={({ field }) => (
                        <DatePicker
                          icon={<CalendarDaysIcon className="tw-mt-1" />}
                          onChange={(date) => field.onChange(date)}
                          dateFormat="yyyy-MM-dd"
                          placeholder="yyyy/mm/dd"
                          value={new Date(field.value)}
                          className={`${
                            errors.programEndDate && "tw-border-red-500"
                          }`}
                        />
                      )}
                    />
                    {errors.programEndDate && (
                      <span className="tw-text-sm tw-text-red-500">
                        Date is required.
                      </span>
                    )}
                  </div>
                </div>
                <div>
                  <div className="tw-mb-2">
                    <label className="tw-text-sm  tw-text-black tw-font-medium">
                      Coach Registration Start Date
                    </label>
                  </div>
                  <div className="tw-inline-block tw-w-full">
                    <Controller
                      name="coachRegStartDate"
                      control={control}
                      render={({ field }) => (
                        <DatePicker
                          icon={<CalendarDaysIcon className="tw-mt-1" />}
                          onChange={(date) => field.onChange(date)}
                          dateFormat="yyyy-MM-dd"
                          placeholder="yyyy/mm/dd"
                          value={new Date(field.value)}
                          className={`${
                            errors.coachRegStartDate && "tw-border-red-500"
                          }`}
                        />
                      )}
                    />
                    {errors.coachRegStartDate && (
                      <span className="tw-text-sm tw-text-red-500">
                        Date is required.
                      </span>
                    )}
                  </div>
                </div>
                <div>
                  <div className="tw-mb-2">
                    <label className="tw-text-sm  tw-text-black tw-font-medium">
                      Coach Registration End Date
                    </label>
                  </div>
                  <div className="tw-inline-block tw-w-full">
                    <Controller
                      name="coachRegEndDate"
                      control={control}
                      render={({ field }) => (
                        <DatePicker
                          icon={<CalendarDaysIcon className="tw-mt-1" />}
                          onChange={(date) => field.onChange(date)}
                          dateFormat="yyyy-MM-dd"
                          placeholder="yyyy/mm/dd"
                          value={new Date(field.value)}
                          className={`${
                            errors.coachRegEndDate && "tw-border-red-500"
                          }`}
                        />
                      )}
                    />
                    {errors.coachRegEndDate && (
                      <span className="tw-text-sm tw-text-red-500">
                        Date is required.
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="tw-grid tw-grid-cols-1 tw-gap-y-3 md:tw-grid-cols-2  lg:tw-grid-cols-4 tw-gap-x-7 tw-mt-5">
                <div>
                  <div className="tw-mb-2">
                    <label className="tw-text-sm tw-text-nowrap  tw-text-black tw-font-medium">
                      Challenger Registration Start Date
                    </label>
                  </div>
                  <div className="tw-inline-block tw-w-full">
                    <Controller
                      name="chlngrRegStartDate"
                      control={control}
                      render={({ field }) => (
                        <DatePicker
                          icon={<CalendarDaysIcon className="tw-mt-1" />}
                          onChange={(date) => field.onChange(date)}
                          dateFormat="yyyy-MM-dd"
                          placeholder="yyyy/mm/dd"
                          value={new Date(field.value)}
                          className={`${
                            errors.chlngrRegStartDate && "tw-border-red-500"
                          }`}
                        />
                      )}
                    />
                    {errors.chlngrRegStartDate && (
                      <span className="tw-text-sm tw-text-red-500">
                        Date is required.
                      </span>
                    )}
                  </div>
                </div>
                <div>
                  <div className="tw-mb-2">
                    <label className="tw-text-sm  tw-text-black tw-font-medium">
                      Challenger Registration End Date
                    </label>
                  </div>
                  <div className="tw-inline-block tw-w-full">
                    <Controller
                      name="chlngrRegEndDate"
                      control={control}
                      render={({ field }) => (
                        <DatePicker
                          icon={<CalendarDaysIcon className="tw-mt-1" />}
                          onChange={(date) => field.onChange(date)}
                          dateFormat="yyyy-MM-dd"
                          placeholder="yyyy/mm/dd"
                          value={new Date(field.value)}
                          className={`m:tw-w-auto ${
                            errors.chlngrRegEndDate && "tw-border-red-500"
                          }`}
                        />
                      )}
                    />
                    {errors.chlngrRegEndDate && (
                      <span className="tw-text-sm tw-text-red-500">
                        Date is required.
                      </span>
                    )}
                  </div>
                </div>
                <div>
                  <div className="tw-mb-2">
                    <label className="tw-text-sm tw-text-nowrap  tw-text-black tw-font-medium">
                      Maximum Number of challengers that can be assigned to a
                      coach
                    </label>
                  </div>
                  <Input
                    label="Coach"
                    defaultValue={tenantDetail?.maxChallenger}
                    {...register("maxChallenger")}
                    error={errors.maxChallenger && true}
                  />
                  {errors.maxChallenger && (
                    <span className="tw-text-sm tw-text-red-500">
                      Max challenger is required.
                    </span>
                  )}
                </div>
                <div className="tw-flex tw-justify-end tw-mt-1 md:tw-mt-8">
                  <Button type="submit" className="tw-w-auto">
                    save
                  </Button>
                </div>
              </div>
            </form>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
