import { XMarkIcon } from "@heroicons/react/24/solid";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Textarea,
  Typography,
} from "@material-tailwind/react";

interface IConfirmApprovalDailogProps {
  open: Boolean | any;
  handleOpenModel: () => void;
}
export function ConfirmApprovalDailog(props: IConfirmApprovalDailogProps) {
  const { handleOpenModel, open } = props;

  return (
    <Dialog
      size="xs"
      open={open}
      handler={handleOpenModel}
      className="tw-bg-transparent tw-shadow-none tw-p-6"
    >
      <DialogHeader className="tw-flex tw-justify-between">
        <Typography variant="h4" color="blue-gray">
          Add comment (Optional)
        </Typography>
        <XMarkIcon
          className="tw-h-6 tw-w-6 tw-text-black tw-cursor-pointer"
          onClick={handleOpenModel}
        />
      </DialogHeader>
      <DialogBody className="tw-text-center tw-mt-5">
        <Textarea rows={5} />
      </DialogBody>
      <DialogFooter className="tw-pt-0 tw-flex tw-justify-between tw-gap-x-10 tw-mt-5">
        <Button color="green" fullWidth onClick={handleOpenModel}>
          Confirm APPROVAL
        </Button>
      </DialogFooter>
    </Dialog>
  );
}
