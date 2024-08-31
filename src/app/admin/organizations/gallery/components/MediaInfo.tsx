import { XMarkIcon } from "@heroicons/react/24/solid";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Typography,
} from "@material-tailwind/react";
interface IMediaInfoProps {
  open: Boolean | any;
  handleOpen: () => void;
}
export default function MediaInfo(props: IMediaInfoProps) {
  const { open, handleOpen } = props;
  return (
    <>
      <Dialog
        size="sm"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none tw-max-h-[95vh] tw-overflow-y-auto tw-p-6"
      >
        <DialogHeader
          style={{
            padding: 0,
            boxShadow: "none",
          }}
          className="tw-flex tw-justify-end"
        >
          <XMarkIcon
            className="tw-h-6 tw-w-6 tw-text-black tw-cursor-pointer"
            onClick={handleOpen}
          />
        </DialogHeader>
        <DialogBody className="tw-mt-1 ">
          <div className="tw-flex tw-items-center tw-gap-x-3">
            <img
              src="https://media.istockphoto.com/id/1303206558/photo/headshot-portrait-of-smiling-businessman-talk-on-video-call.jpg?s=1024x1024&w=is&k=20&c=b7OI0XGNUkThz1VhBeAxPtLfG3ZJr64w5p53zjgYrKo="
              alt=""
              className="tw-h-7 tw-w-7 tw-border tw-border-orange-600 tw-rounded-full tw-object-cover"
            />
            <span className="tw-text-base tw-font-bold tw-text-primaryText">
              Sambit Mallick
            </span>
          </div>
          <div className="tw-grid tw-grid-cols-1 tw-gap-y-3 md:tw-grid-cols-2 md:tw-mt-5 md:tw-gap-x-5">
            <div className="">
              <img
                src="https://images.unsplash.com/photo-1520334363269-c1b342d17261?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGd5bSUyMGdpcmxzfGVufDB8fDB8fHww"
                alt=""
                className="tw-h-[300px] tw-w-full tw-object-cover tw-rounded-2xl"
              />
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1685633224745-ebb90e6ae2fd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3ltJTIwYm95fGVufDB8fDB8fHww"
                alt=""
                className="tw-h-[300px] tw-w-full tw-object-cover tw-rounded-2xl"
              />
            </div>
          </div>
          <div className="tw-mt-5">
            <Typography>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Typography>
          </div>
        </DialogBody>
        <DialogFooter
          style={{
            paddingTop: 0,
          }}
        >
          <div className="tw-flex tw-justify-start tw-mt-5">
            <Button variant="outlined" className="tw-w-36" onClick={handleOpen}>
              EDIT Media
            </Button>
          </div>
        </DialogFooter>
      </Dialog>
    </>
  );
}
