import { XMarkIcon } from "@heroicons/react/24/solid";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Typography,
} from "@material-tailwind/react";

interface IEditSessionProps {
  open: Boolean | any;
  handleOpen: () => void;
}

export default function EditSession(props: IEditSessionProps) {
  const { open, handleOpen } = props;
  return (
    <div>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className={`tw-p-6 tw-max-h-[90vh] tw-overflow-auto`}
      >
        <DialogHeader className="tw-shadow-none tw-bg-none tw-flex tw-justify-between">
          <Typography variant="h4" color="blue-gray">
            Microsfot Zuba Session 1
          </Typography>
          <XMarkIcon
            className="tw-h-6 tw-w-6 tw-text-black tw-cursor-pointer"
            onClick={handleOpen}
          />
        </DialogHeader>
        <DialogBody className="tw-mt-3">
          <div className="tw-grid tw-grid-cols-2">
            <div>
              <div>
                <span className="tw-font-medium tw-text-sm tw-leading-[21px]">
                  Start Date
                </span>
              </div>
              <div>
                <span className="tw-text-base tw-text-primaryText tw-font-bold">
                  294 Jan 2024
                </span>
              </div>
            </div>
            <div>
              <div>
                <span className="tw-font-medium tw-text-sm tw-leading-[21px]">
                  Total DUration
                </span>
              </div>
              <div>
                <span className="tw-text-base tw-text-primaryText tw-font-bold">
                  1 hour 20 mins
                </span>
              </div>
            </div>
          </div>
          <div className="tw-grid tw-mt-5">
            <div>
              <div>
                <span className="tw-font-medium tw-text-sm tw-leading-[21px]">
                  Trainers
                </span>
              </div>
              <div>
                <span className="tw-text-base tw-text-primaryText tw-font-bold">
                  Rahul Jain and Meeksh Sinha
                </span>
              </div>
            </div>
          </div>
          <div className="tw-grid tw-mt-5">
            <div>
              <div>
                <span className="tw-font-medium tw-text-sm tw-leading-[21px]">
                  Location
                </span>
              </div>
              <div>
                <span className="tw-text-base tw-text-primaryText tw-font-bold">
                  Microsoft Office Gurgaon
                </span>
              </div>
            </div>
          </div>
          <div className="tw-grid tw-mt-5">
            <div>
              <div>
                <span className="tw-font-medium tw-text-sm tw-leading-[21px]">
                  Equipments
                </span>
              </div>
              <div>
                <span className="tw-text-base tw-text-primaryText tw-font-bold">
                  Yoga Mat, Protin Powder, Dumbells
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
                <span className="tw-text-base tw-text-primaryText tw-font-bold">
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
        <DialogFooter
          style={{
            paddingTop: 0,
          }}
          className="tw-mt-5"
        >
          <Button
            variant="outlined"
            className="tw-text-base tw-text-black"
            onClick={handleOpen}
            fullWidth
          >
            Edit Session
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}
