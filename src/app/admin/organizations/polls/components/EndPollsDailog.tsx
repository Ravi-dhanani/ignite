import { XMarkIcon } from "@heroicons/react/24/solid";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Dialog,
  Typography,
} from "@material-tailwind/react";

interface IEndPollsDailogProps {
  open: Boolean | any;
  handleOpenModel: () => void;
}
export function EndPollsDailog(props: IEndPollsDailogProps) {
  const { handleOpenModel, open } = props;
  return (
    <Dialog
      size="xs"
      open={open}
      handler={handleOpenModel}
      className="tw-bg-transparent tw-shadow-none"
    >
      <Card className="tw-p-1 tw-mx-auto tw-w-full">
        <CardHeader className="tw-shadow-none tw-bg-none tw-flex tw-justify-end">
          <XMarkIcon
            className="tw-h-6 tw-w-6 tw-text-black tw-cursor-pointer"
            onClick={handleOpenModel}
          />
        </CardHeader>
        <CardBody
          style={{
            padding: "20px",
          }}
          className="tw-text-center"
        >
          <Typography variant="h4">
            Are you sure you want to end poll?
          </Typography>
          <Typography variant="small" className="tw-mt-1">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been
          </Typography>
        </CardBody>
        <CardFooter className="tw-pt-0 tw-flex tw-justify-between tw-gap-x-10">
          <Button variant="outlined" fullWidth onClick={handleOpenModel}>
            Cancel
          </Button>
          <Button fullWidth color="red">
            End Poll
          </Button>
        </CardFooter>
      </Card>
    </Dialog>
  );
}
