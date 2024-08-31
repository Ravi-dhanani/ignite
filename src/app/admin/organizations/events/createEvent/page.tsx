"use client";
import Breadcrumb from "@/components/Breadcrumb";
import { Button, Typography } from "@/components/MaterialTailwind";
import { addEvent, addEventImages } from "@/services/request/events.service";
import { IEvents } from "@/types/events";
import { getFormateDate } from "@/utils/utils";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { yupResolver } from "@hookform/resolvers/yup";
import { usePathname, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import EventDetail from "../components/EventDetail";
import EventImages from "../components/EventImages";

const schema = yup
  .object({
    eventName: yup.string().required("Event Name is required"),
    enrlmtStartDate: yup
      .date()
      .required("Event Enrollment Start Date is required"),
    enrlmtEndDate: yup.date().required("Event Enrollment End Date is required"),
    startDate: yup.date().required("Start Date is required"),
    endDate: yup.date().required("End Date is required"),
    isActive: yup.boolean(),
    description: yup.string().required("Description is required"),
    category: yup.string().required("Category is required"),
    eventType: yup.string().required("Event Type is required"),
    maxEnrollment: yup
      .number()
      .positive()
      .required("Limit number of people is required"),
    equipmentsRequired: yup.string().required("Equipments are required"),
  })
  .required();

export default function CreateEvent() {
  const router = useRouter();
  const pathName = usePathname();

  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm<IEvents | any>({
    defaultValues: {
      enrlmtStartDate: new Date(),
      enrlmtEndDate: new Date(),
      startDate: new Date(),
      endDate: new Date(),
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: IEvents | any) => {
    console.log(data);

    try {
      const eventsData = {
        eventName: data?.eventName,
        enrlmtStartDate: getFormateDate(data?.enrlmtStartDate),
        enrlmtEndDate: getFormateDate(data?.enrlmtEndDate),
        startDate: getFormateDate(data?.startDate),
        endDate: getFormateDate(data?.endDate),
        description: data?.description,
        category: data?.category,
        eventType: data?.eventType,
        maxEnrollment: data?.maxEnrollment,
        equipmentsRequired: data?.equipmentsRequired,
      };
      const response: any = await addEvent(eventsData);
      if (data?.Files) {
        let eventsImage = new FormData();

        const EntityId: any = localStorage.getItem("tenantId");

        eventsImage.append("EntityType", "Events");
        eventsImage.append("EntityId", EntityId);
        eventsImage.append("Tag", "Event-Images");
        data.Files.map((item: any) => eventsImage.append("Files", item));

        const eventImageResponse: any = await addEventImages(eventsImage);
      }

      if (response?.success) {
        router.push("/admin/organizations/events");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="tw-fixed tw-inset-0 tw-bg-[#F7F7F7] tw-z-50 ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="  tw-h-16 tw-bg-white tw-shadow-md tw-flex tw-items-center tw-justify-between tw-py-2 tw-px-4">
            <h1 className="tw-text-xl tw-flex tw-items-center">
              <XMarkIcon
                className="tw-w-5 tw-h-5 tw-mr-2 tw-cursor-pointer"
                onClick={() => router.push("/admin/organizations/events")}
              />
              Create Event
            </h1>
            <Button
              type="submit"
              className="tw-text-blue-gray-900 tw-font-semibold tw-text-sm"
            >
              Save
            </Button>
          </div>
          <div className="tw-overflow-scroll tw-h-screen tw-w-full">
            <div className="tw-capitalize tw-p-3 tw-bg-blue-gray-50/50">
              <Breadcrumb path={pathName} />
            </div>
            <div className="tw-p-5 tw-flex tw-justify-center  ">
              <div className="tw-max-w-4xl tw-w-full tw-bg-white tw-opacity-85 tw-border tw-border-blue-grey-100 tw-rounded-lg tw-p-5">
                <Typography className="!tw-font-bold tw-text-lg tw-text-gray-900 tw-mb-3">
                  Event Details
                </Typography>

                <EventDetail
                  register={register}
                  control={control}
                  errors={errors}
                />
              </div>
            </div>
            <div className="tw-p-5">
              <EventImages setValue={setValue} errors={errors} />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
