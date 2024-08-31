import { XMarkIcon } from "@heroicons/react/24/solid";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Typography,
} from "@material-tailwind/react";

interface IChallengesInfoProps {
  open: Boolean | any;
  handleOpen: () => void;
}

export default function ChallengesInfo(props: IChallengesInfoProps) {
  const { open, handleOpen } = props;
  return (
    <div>
      <Dialog size="sm" open={open} handler={handleOpen} className="tw-p-6">
        <DialogHeader className="tw-flex tw-justify-between">
          <Typography variant="h5" color="blue-gray">
            1000 Steps a day Challenge
          </Typography>
          <XMarkIcon
            className="tw-h-6 tw-w-6 tw-text-black tw-cursor-pointer"
            onClick={handleOpen}
          />
        </DialogHeader>
        <DialogBody className="tw-mt-5">
          <div className="tw-grid tw-grid-cols-2">
            <div>
              <div>
                <span className="tw-font-medium tw-text-sm tw-leading-[21px] ">
                  Category
                </span>
              </div>
              <div>
                <span className="tw-text-base tw-font-bold tw-text-primaryText">
                  Glasses of Water
                </span>
              </div>
            </div>
            <div>
              <div>
                <span className="tw-font-medium tw-text-sm tw-leading-[21px]">
                  Value to complete per day
                </span>
              </div>
              <div>
                <span className="tw-text-base tw-font-bold tw-text-primaryText">
                  4
                </span>
              </div>
            </div>
          </div>

          <div className="tw-grid tw-grid-cols-2 tw-mt-5">
            <div>
              <div>
                <span className="tw-font-medium tw-text-sm tw-leading-[21px] ">
                  Start Date
                </span>
              </div>
              <div>
                <span className="tw-text-base tw-font-bold tw-text-primaryText">
                  24 Jan 2024
                </span>
              </div>
            </div>
            <div>
              <div>
                <span className="tw-font-medium tw-text-sm tw-leading-[21px]">
                  Participation Deadline
                </span>
              </div>
              <div>
                <span className="tw-text-base tw-font-bold tw-text-primaryText">
                  24 Jan 2024
                </span>
              </div>
            </div>
          </div>

          <div className="tw-grid tw-grid-cols-2 tw-mt-5">
            <div>
              <div>
                <span className="tw-font-medium tw-text-sm tw-leading-[21px] ">
                  ENd Date
                </span>
              </div>
              <div>
                <span className="tw-text-base tw-font-bold tw-text-primaryText">
                  24 Jan 2024
                </span>
              </div>
            </div>
            <div>
              <div>
                <span className="tw-font-medium tw-text-sm tw-leading-[21px]">
                  Number of challengers
                </span>
              </div>
              <div>
                <span className="tw-text-base tw-font-bold tw-text-primaryText">
                  1344
                </span>
              </div>
            </div>
          </div>

          <div className="tw-grid tw-mt-5">
            <div>
              <div>
                <span className="tw-font-medium tw-text-sm tw-leading-[21px]">
                  Description
                </span>
              </div>
              <div>
                <span className="tw-text-base tw-font-bold tw-text-primaryText">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </span>
              </div>
            </div>
          </div>
        </DialogBody>
        <DialogFooter className="tw-pt-0 tw-outline-none tw-mt-5">
          <Button
            variant="outlined"
            className="tw-text-base tw-text-black"
            onClick={handleOpen}
            fullWidth
          >
            EDIT CHALLANGE
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}
