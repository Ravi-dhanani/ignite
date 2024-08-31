import { XMarkIcon } from "@heroicons/react/24/solid";
import {
  Dialog,
  DialogBody,
  DialogHeader,
  Typography,
} from "@material-tailwind/react";

interface IUserInfoProps {
  open: Boolean | any;
  handleOpen: () => void;
}
export default function UserInfo(props: IUserInfoProps) {
  const { open, handleOpen } = props;
  return (
    <div>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className={`tw-p-6 tw-max-h-[90vh] tw-overflow-auto`}
      >
        <DialogHeader className="tw-flex tw-justify-end">
          <XMarkIcon
            className="tw-h-6 tw-w-6 tw-text-black tw-cursor-pointer"
            onClick={handleOpen}
          />
        </DialogHeader>
        <DialogBody>
          <div className="tw-text-center">
            <div className="tw-relative tw-flex tw-justify-center">
              <div className="">
                <img
                  src="https://s3-alpha-sig.figma.com/img/a074/55f7/3a01d6d01eb5a3aaef8f116a5e290746?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mpiu0ZYYiPmugGwNFiBuJKu1dqleGjQ0yIN6ITgz0266nBNXsaZ5aJcQAxk1Mtxe3QbRKf1K6ADlWOXBwRJiSb0h8xichVYWhkpr796BNnt4aoxns5smUykzbU2KVrld8QK3iBiqm1RCB3fd3nqqd8StPh9FsrxQ7u5DaYu~II0dzG2CuuuVUmxbo4H3cejzXoRIw~aiAgwVslbmUJc6k9C728rFRNXSjJTkJfKBs-OdwHhKuyZYihh7xiApaXHz3TLTHo7FDwh8vPq8HFi-oK~bAhwoXFdnJvc4Dfm3uTN2409MrJqjVwraClbvhH041WyDQleu4opw3ohr09dlLQ__"
                  className="tw-h-20 tw-w-20 tw-rounded-full tw-object-contain"
                />
              </div>
              <span className="tw-text-xs tw-absolute tw-font-semibold -tw-bottom-4 tw-w-[87px] tw-bg-black tw-p-1 tw-text-white tw-rounded-xl">
                Challenger
              </span>
            </div>
            <Typography
              variant="h4"
              className="tw-text-center tw-mt-5 tw-text-primaryText"
            >
              Lydia Vaccaro
            </Typography>
            <span className="tw-text-sm tw-font-bold tw-text-primaryText">
              LynaDinos123@gmail..com
            </span>
          </div>
          <div className="tw-grid  tw-grid-cols-12 tw-mt-5 tw-overflow-auto">
            <div className="tw-col-start-1 tw-col-end-4">
              <div>
                <span className="tw-font-medium tw-text-sm tw-truncate tw-leading-[21px]">
                  Sessions Completed
                </span>
              </div>
              <div>
                <span className="tw-text-base tw-font-bold tw-text-primaryText">
                  3 Sessions
                </span>
              </div>
            </div>

            <div className="tw-col-start-5 tw-col-end-9">
              <div>
                <span className="tw-font-medium tw-text-sm tw-leading-[21px]">
                  Joined on
                </span>
              </div>
              <div>
                <span className="tw-text-base tw-font-bold tw-text-primaryText">
                  24 Jan 2024
                </span>
              </div>
            </div>

            <div className="tw-col-start-10 tw-col-end-12">
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
          </div>

          <div className="tw-grid tw-grid-cols-12 tw-mt-5">
            <div className="tw-col-start-1 tw-col-end-4">
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

            <div className="tw-col-start-5 tw-col-end-9">
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

            <div className="tw-col-start-10 tw-col-end-12">
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
          </div>

          <div className="tw-grid tw-grid-cols-12 tw-mt-5">
            <div className="tw-col-start-1 tw-col-end-4">
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

            <div className="tw-col-start-5 tw-col-end-12">
              <div>
                <span className="tw-font-medium tw-text-sm tw-leading-[21px]">
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
                <span className="tw-font-medium tw-text-sm tw-leading-[21px]">
                  Speciality
                </span>
              </div>
              <div>
                <span className="tw-text-base tw-font-bold tw-text-primaryText">
                  Lorem Ipsum is simply dummy text of the print
                </span>
              </div>
            </div>
            <div className="tw-mt-5">
              <div>
                <span className="tw-font-medium tw-text-sm tw-leading-[21px]">
                  Qualifications
                </span>
              </div>
              <div>
                <span className="tw-text-base tw-font-bold tw-text-primaryText">
                  Lorem Ipsum is simply dummy text of the print
                </span>
              </div>
            </div>
            <div className="tw-mt-5">
              <div>
                <span className="tw-font-medium tw-text-sm tw-leading-[21px]">
                  Coaching/Training Preference
                </span>
              </div>
              <div>
                <span className="tw-text-base tw-font-bold tw-text-primaryText">
                  Lorem Ipsum is simply dummy text of the print
                </span>
              </div>
            </div>
            <div className="tw-mt-5">
              <div>
                <span className="tw-font-medium tw-text-sm tw-leading-[21px]">
                  Personal Information
                </span>
              </div>
              <div>
                <span className="tw-text-base tw-font-bold tw-text-primaryText">
                  Lorem Ipsum is simply dummy text of the print
                </span>
              </div>
            </div>
            <div className="tw-mt-5">
              <div>
                <span className="tw-font-medium tw-text-sm tw-leading-[21px]">
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
      </Dialog>
    </div>
  );
}
