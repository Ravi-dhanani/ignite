import { XMarkIcon } from "@heroicons/react/24/solid";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Typography,
} from "@material-tailwind/react";
import { useRouter } from "next/navigation";
import React from "react";
import { EndPollsDailog } from "./EndPollsDailog";

interface IPollInfoProps {
  open: Boolean | any;
  handleOpen: () => void;
}

export default function PollInfo(props: IPollInfoProps) {
  const { open, handleOpen } = props;
  const router = useRouter();
  const [openModel, setOpenModel] = React.useState(false);

  const handleOpenModel = () => {
    setOpenModel(!openModel);
  };

  return (
    <div>
      <Dialog
        size="xs"
        open={open}
        dismiss={{
          outsidePress: !openModel,
        }}
        handler={handleOpen}
        className="tw-p-6 tw-max-h-[90vh] tw-overflow-auto"
      >
        <DialogHeader className="tw-shadow-none tw-bg-none tw-flex tw-justify-between">
          <Typography variant="h5" color="blue-gray">
            Which quest should we take?
          </Typography>
          <XMarkIcon
            className="tw-h-6 tw-w-6 tw-text-black tw-cursor-pointer"
            onClick={handleOpen}
          />
        </DialogHeader>
        <DialogBody className="flex flex-col gap-4 tw-mt-5">
          <div className="tw-grid tw-grid-cols-3">
            <div>
              <div>
                <span className="tw-font-medium tw-text-sm tw-leading-[21px]">
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
                  End Date
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
                  Total Votes
                </span>
              </div>
              <div>
                <span className="tw-text-base tw-font-bold tw-text-primaryText">
                  16355
                </span>
              </div>
            </div>
          </div>

          <div className="tw-mt-5">
            <span className="tw-font-medium tw-text-sm tw-leading-[21px]">
              ANSWERS
            </span>
          </div>
          <div className="tw-flex tw-justify-between">
            <div className="">
              <span className="tw-font-medium tw-text-base tw-text-black">
                Find Orochimaru secret base.
              </span>
            </div>
            <div className="tw-grid tw-grid-cols-2 tw-gap-x-8">
              <div>
                <span>2322</span>
              </div>
              <div>
                <span className="tw-font-bold tw-text-primaryText">20%</span>
              </div>
            </div>
          </div>
        </DialogBody>
        <DialogFooter className="tw-pt-0 tw-flex tw-justify-between tw-gap-x-10 tw-mt-5">
          <Button
            variant="outlined"
            className="tw-text-base tw-text-black"
            onClick={handleOpenModel}
            fullWidth
          >
            End Poll
          </Button>
          <Button
            variant="outlined"
            fullWidth
            onClick={() => router.push("/admin/organizations/polls/editPoll")}
          >
            Edit Poll
          </Button>
        </DialogFooter>
      </Dialog>
      {openModel && (
        <EndPollsDailog handleOpenModel={handleOpenModel} open={openModel} />
      )}
    </div>
  );
}
