import { XMarkIcon } from "@heroicons/react/24/solid";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import { ConfirmApprovalDailog } from "./ConfirmApprovalDailog";
import { ConfirmRejectDailog } from "./ConfirmRejectDailog";

interface IWellnessProviderInfoProps {
  open: Boolean | any;
  handleOpen: () => void;
}
export default function WellnessProviderInfo(
  props: IWellnessProviderInfoProps
) {
  const { open, handleOpen } = props;
  const [openModel, setOpenModel] = React.useState(false);
  const [openRejectModel, setOpenRejectModel] = React.useState(false);

  const handleOpenModel = () => setOpenModel(!openModel);
  const handleOpenRejectModel = () => setOpenRejectModel(!openRejectModel);

  return (
    <>
      <Dialog
        open={open}
        size="sm"
        handler={handleOpen}
        className="tw-bg-transparent tw-max-h-[90vh] tw-p-6  tw-overflow-auto"
        dismiss={{ outsidePress: !openRejectModel && !openModel }}
      >
        <DialogHeader
          className="tw-flex tw-justify-end"
          style={{
            padding: 0,
          }}
        >
          <XMarkIcon
            className="tw-h-6 tw-w-6 tw-text-black tw-cursor-pointer"
            onClick={handleOpen}
          />
        </DialogHeader>
        <DialogBody
          className="tw-p-0"
          style={{
            paddingTop: 0,
          }}
        >
          <div className="tw-text-center">
            <div className="tw-flex tw-justify-center">
              <img
                src="https://s3-alpha-sig.figma.com/img/a074/55f7/3a01d6d01eb5a3aaef8f116a5e290746?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mpiu0ZYYiPmugGwNFiBuJKu1dqleGjQ0yIN6ITgz0266nBNXsaZ5aJcQAxk1Mtxe3QbRKf1K6ADlWOXBwRJiSb0h8xichVYWhkpr796BNnt4aoxns5smUykzbU2KVrld8QK3iBiqm1RCB3fd3nqqd8StPh9FsrxQ7u5DaYu~II0dzG2CuuuVUmxbo4H3cejzXoRIw~aiAgwVslbmUJc6k9C728rFRNXSjJTkJfKBs-OdwHhKuyZYihh7xiApaXHz3TLTHo7FDwh8vPq8HFi-oK~bAhwoXFdnJvc4Dfm3uTN2409MrJqjVwraClbvhH041WyDQleu4opw3ohr09dlLQ__"
                className=" tw-w-20 tw-rounded-full tw-object-contain"
              />
            </div>
            <Typography
              variant="h4"
              className="tw-text-center tw-mt-3 tw-text-primaryText"
            >
              Lydia Vaccaro
            </Typography>
            <span className="tw-text-sm tw-font-bold tw-text-primaryText">
              LynaDinos123@gmail..com
            </span>
          </div>
          <div className="tw-grid tw-grid-cols-12 tw-mt-5">
            <div className="tw-col-start-1 tw-col-end-4">
              <div>
                <span className="tw-font-medium tw-text-sm tw-leading-[21px]">
                  Provider Type
                </span>
              </div>
              <div>
                <span className="tw-text-base tw-font-bold tw-text-primaryText">
                  YOga Trainer
                </span>
              </div>
            </div>

            <div className="tw-col-start-5 tw-col-end-9">
              <div>
                <span className="tw-font-medium tw-text-sm tw-leading-[21px]">
                  Age
                </span>
              </div>
              <div>
                <span className="tw-text-base tw-font-bold tw-text-primaryText">
                  22 years
                </span>
              </div>
            </div>
            <div className="tw-col-start-10 tw-col-end-12">
              <div>
                <span className="tw-font-medium tw-text-sm tw-leading-[21px]">
                  Height
                </span>
              </div>
              <div>
                <span className="tw-text-base tw-font-bold tw-text-primaryText">
                  6 ft 2 inc
                </span>
              </div>
            </div>
          </div>

          <div className="tw-grid tw-grid-cols-12 tw-mt-5">
            <div className="tw-col-start-1 tw-col-end-4">
              <div>
                <span className="tw-font-medium tw-text-sm tw-leading-[21px]">
                  Weight
                </span>
              </div>
              <div>
                <span className="tw-text-base tw-font-bold tw-text-primaryText">
                  120 kg
                </span>
              </div>
            </div>

            <div className="tw-col-start-5 tw-col-end-9">
              <div>
                <span className="tw-font-medium tw-text-sm tw-leading-[21px]">
                  T Shirt Size
                </span>
              </div>
              <div>
                <span className="tw-text-base tw-font-bold tw-text-primaryText">
                  XL
                </span>
              </div>
            </div>
            <div className="tw-col-start-10 tw-col-end-12">
              <div>
                <span className="tw-font-medium tw-text-sm tw-leading-[21px]">
                  Gender
                </span>
              </div>
              <div>
                <span className="tw-text-base tw-font-bold tw-text-primaryText">
                  Female
                </span>
              </div>
            </div>
          </div>

          <div className="tw-grid tw-grid-cols-1 tw-mt-5">
            <div>
              <div>
                <span className="tw-font-medium tw-text-sm tw-leading-[21px] ">
                  Address
                </span>
              </div>
              <div>
                <span className="tw-text-base tw-font-bold tw-text-primaryText">
                  T-129 Sector 65 Gurgaon Haryana India
                </span>
              </div>
            </div>
          </div>

          <div className="tw-grid tw-grid-cols-1 tw-mt-5">
            <div>
              <div>
                <span className="tw-font-medium tw-text-sm tw-leading-[21px] ">
                  Qualifications
                </span>
              </div>
              <div>
                <span className="tw-text-base tw-font-bold tw-text-primaryText">
                  Lorem Ipsum is simply dummy text of the print
                </span>
              </div>
            </div>
          </div>

          <div className="tw-grid tw-grid-cols-1 tw-mt-5">
            <div>
              <div>
                <span className="tw-font-medium tw-text-sm tw-leading-[21px] ">
                  Coaching/Training Preference
                </span>
              </div>
              <div>
                <span className="tw-text-base tw-font-bold tw-text-primaryText">
                  Lorem Ipsum is simply dummy text of the print
                </span>
              </div>
            </div>
          </div>
          <div className="tw-grid tw-grid-cols-1 tw-mt-5">
            <div>
              <div>
                <span className="tw-font-medium tw-text-sm tw-leading-[21px] ">
                  Personal Information
                </span>
              </div>
              <div>
                <span className="tw-text-base tw-font-bold tw-text-primaryText">
                  Lorem Ipsum is simply dummy text of the print
                </span>
              </div>
            </div>
          </div>

          <div className="tw-grid tw-grid-cols-1 tw-mt-5">
            <div>
              <div>
                <span className="tw-font-medium tw-text-sm tw-leading-[21px] ">
                  Licence
                </span>
              </div>
              <div>
                <span className="tw-text-base tw-font-bold tw-text-primaryText">
                  Lorem Ipsum is simply dummy text of the print
                </span>
              </div>
            </div>
          </div>
        </DialogBody>
        <DialogFooter className="tw-flex tw-justify-between tw-gap-x-10 tw-mt-5">
          <Button color="red" fullWidth onClick={handleOpenRejectModel}>
            Reject
          </Button>
          <Button color="light-green" fullWidth onClick={handleOpenModel}>
            APPROVE
          </Button>
        </DialogFooter>
      </Dialog>
      {openModel && (
        <ConfirmApprovalDailog
          handleOpenModel={handleOpenModel}
          open={openModel}
        />
      )}
      {openRejectModel && (
        <ConfirmRejectDailog
          handleOpenModel={handleOpenRejectModel}
          open={openRejectModel}
        />
      )}
    </>
  );
}
