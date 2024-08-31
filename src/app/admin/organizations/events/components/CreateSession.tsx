import DatePicker from "@/components/datePicker/DatePicker";
import { CalendarDaysIcon, XMarkIcon } from "@heroicons/react/24/solid";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Input,
  Option,
  Select,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ISession } from "@/types/events";
import { addSession } from "@/services/request/events.service";
import { getFormateDate } from "@/utils/utils";
import { Base64 } from "js-base64";

interface ICreateSessionProps {
  handleOpen: () => void;
  open: Boolean | any;
  eventId: string;
}

const schema = yup
  .object({
    sessionName: yup.string().required("Session name is required"),
    sessionLocation: yup.string().required("Session location is required"),
    sessionDuration: yup.date().required("Session duration is required"),
    equipmentsRequired: yup.string().required("Equipments  is required"),
    startDate: yup.date().required("Start Date is required"),
    description: yup.string().required("Description is required"),
  })
  .required();
export default function CreateSession(props: ICreateSessionProps) {
  const { handleOpen, open, eventId } = props;
  const id: any = eventId ? Base64.decode(eventId as string) : null;

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ISession>({
    resolver: yupResolver(schema),
    defaultValues: { startDate: new Date(), sessionDuration: new Date() },
  });
  const onSubmit = async (data: ISession) => {
    const sessionData = {
      eventId: id,
      sessionName: data.sessionName,
      sessionLocation: data.sessionLocation,
      sessionType: "session",
      sessionTrainerUserId: id,
      sessionDuration: getFormateDate(data?.sessionDuration?.toString()),
      equipmentsRequired: data.equipmentsRequired,
      startDate: getFormateDate(data?.startDate?.toString()),
      description: data.description,
    };
    try {
      const response = await addSession(sessionData);
      console.log(response);
    } catch (err: any) {
      console.error(err);
    }
  };

  return (
    <>
      <Dialog
        size="md"
        open={open}
        handler={handleOpen}
        className={`tw-p-6 tw-max-h-[90vh] tw-overflow-auto`}
      >
        <DialogHeader className="tw-shadow-none tw-bg-none tw-flex tw-justify-between">
          <Typography variant="h4" color="blue-gray">
            Session
          </Typography>
          <XMarkIcon
            className="tw-h-6 tw-w-6 tw-text-black tw-cursor-pointer"
            onClick={handleOpen}
          />
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogBody className="flex flex-col gap-4">
            <div className="tw-grid tw-gap-y-5">
              <div>
                <Typography className="tw-mb-2" variant="h6">
                  Session Name
                </Typography>
                <Input
                  label="Session Name"
                  size="md"
                  {...register("sessionName")}
                  error={errors.sessionName && true}
                />
                {errors?.sessionName && (
                  <span className="tw-text-sm tw-text-red-500">
                    {errors?.sessionName?.message}
                  </span>
                )}
              </div>
              <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 tw-gap-7">
                <div>
                  <Typography className="tw-mb-2" variant="h6">
                    Start Date
                  </Typography>
                  <Controller
                    name="startDate"
                    control={control}
                    render={({ field }) => (
                      <DatePicker
                        icon={<CalendarDaysIcon className="tw-mt-1" />}
                        dateFormat="yyyy-MM-dd"
                        onChange={(date: any) => field.onChange(date)}
                        placeholder="yyyy-MM-dd"
                        value={new Date(field.value)}
                        className="tw-w-96 md:tw-w-72 sm:tw-w-auto"
                      />
                    )}
                  />
                  {errors?.startDate && (
                    <span className="tw-text-sm tw-text-red-500">
                      {errors?.startDate?.message}
                    </span>
                  )}
                </div>
                <div>
                  <Typography className="tw-mb-2" variant="h6">
                    Total Duration
                  </Typography>
                  <Controller
                    name="sessionDuration"
                    control={control}
                    render={({ field }) => (
                      <DatePicker
                        icon={<CalendarDaysIcon className="tw-mt-1" />}
                        dateFormat="yyyy-MM-dd"
                        onChange={(date: any) => field.onChange(date)}
                        placeholder="yyyy-MM-dd"
                        value={new Date(field.value)}
                        className="tw-w-96 md:tw-w-72 sm:tw-w-auto"
                      />
                    )}
                  />
                  {errors?.sessionDuration && (
                    <span className="tw-text-sm tw-text-red-500">
                      {errors?.sessionDuration?.message}
                    </span>
                  )}
                </div>
              </div>

              <div>
                <Typography variant="h6" className="tw-mb-2">
                  Request Wellness Provider
                </Typography>
                <Select label="Any Wellness Provider">
                  {[1, 2].map((item: any, index: number) => (
                    <Option>
                      <div
                        className="tw-flex tw-gap-x-8  tw-items-center"
                        key={index}
                      >
                        <div className="tw-flex tw-items-center tw-space-x-5">
                          <img
                            src={
                              "data:image/png;base64,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"
                            }
                            className="tw-h-6 tw-w-6 tw-rounded-full tw-object-cover"
                          />
                          <div>
                            <Typography className="tw-text-sm tw-font-bold tw-text-primaryText">
                              Brandon Geidt
                            </Typography>
                          </div>
                        </div>

                        <div>
                          <Typography
                            className="tw-text-sm tw-font-medium"
                            color="gray"
                          >
                            Male
                          </Typography>
                        </div>
                        <div>
                          <Typography
                            className="tw-text-sm tw-font-medium"
                            color="gray"
                          >
                            Yoga Trainer
                          </Typography>
                        </div>
                      </div>
                    </Option>
                  ))}
                </Select>
              </div>
              <div>
                <Typography className="tw-mb-2" variant="h6">
                  Location
                </Typography>
                <Input
                  label="Location"
                  size="md"
                  {...register("sessionLocation")}
                  error={errors?.sessionLocation && true}
                />
                {errors?.sessionLocation && (
                  <span className="tw-text-sm tw-text-red-500">
                    {errors?.sessionLocation?.message}
                  </span>
                )}
              </div>
              <div>
                <Typography className="tw-mb-2" variant="h6">
                  Equipments Required
                </Typography>
                <Input
                  label="Enter Equipments Required"
                  size="md"
                  {...register("equipmentsRequired")}
                  error={errors?.equipmentsRequired && true}
                />
                {errors?.equipmentsRequired && (
                  <span className="tw-text-sm tw-text-red-500">
                    {errors?.equipmentsRequired?.message}
                  </span>
                )}
              </div>
              <div>
                <Typography className="tw-mb-2" variant="h6">
                  Description
                </Typography>
                <Textarea
                  label="Enter Description"
                  size="md"
                  {...register("description")}
                  error={errors?.description && true}
                />
                {errors?.description && (
                  <span className="tw-text-sm tw-text-red-500">
                    {errors?.description?.message}
                  </span>
                )}
              </div>
            </div>
          </DialogBody>
          <DialogFooter
            style={{
              paddingTop: 0,
            }}
            className="tw-mt-5"
          >
            <Button variant="gradient" type="submit" fullWidth>
              Save
            </Button>
          </DialogFooter>
        </form>
      </Dialog>
    </>
  );
}
