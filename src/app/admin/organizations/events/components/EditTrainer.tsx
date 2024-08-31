import { XMarkIcon } from "@heroicons/react/24/solid";
import {
  Button,
  Dialog,
  DialogBody,
  DialogHeader,
  Typography,
} from "@material-tailwind/react";

interface IEditTrainerProps {
  open: Boolean | any;
  handleOpen: () => void;
}
export default function EditTrainer(props: IEditTrainerProps) {
  const { open, handleOpen } = props;
  return (
    <div>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className={`tw-p-6 tw-max-h-[90vh] tw-overflow-auto`}
      >
        <DialogHeader className="tw-shadow-none tw-bg-none tw-flex tw-justify-end">
          <XMarkIcon
            className="tw-h-6 tw-w-6 tw-text-black tw-cursor-pointer"
            onClick={handleOpen}
          />
        </DialogHeader>
        <DialogBody>
          <div className="tw-text-center">
            <div className="tw-flex tw-justify-center">
              <img
                src="
                https://s3-alpha-sig.figma.com/img/a074/55f7/3a01d6d01eb5a3aaef8f116a5e290746?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mpiu0ZYYiPmugGwNFiBuJKu1dqleGjQ0yIN6ITgz0266nBNXsaZ5aJcQAxk1Mtxe3QbRKf1K6ADlWOXBwRJiSb0h8xichVYWhkpr796BNnt4aoxns5smUykzbU2KVrld8QK3iBiqm1RCB3fd3nqqd8StPh9FsrxQ7u5DaYu~II0dzG2CuuuVUmxbo4H3cejzXoRIw~aiAgwVslbmUJc6k9C728rFRNXSjJTkJfKBs-OdwHhKuyZYihh7xiApaXHz3TLTHo7FDwh8vPq8HFi-oK~bAhwoXFdnJvc4Dfm3uTN2409MrJqjVwraClbvhH041WyDQleu4opw3ohr09dlLQ__"
                className="tw-h-20 tw-w-20 tw-rounded-full tw-object-contain"
              />
            </div>
            <Typography
              variant="h4"
              className="tw-text-center tw-mt-3 tw-font-bold tw-text-primaryText"
            >
              Lydia Vaccaro
            </Typography>
            <Typography className="tw-font-semibold tw-text-sm tw-text-primaryText">
              Trainer
            </Typography>
            <Button variant="outlined" fullWidth className="tw-mt-4">
              Edit Trainer
            </Button>
          </div>

          <div className="tw-mt-5">
            <div>
              <span className="tw-font-medium tw-text-sm tw-leading-[21px]">
                Coaching/Training Preference
              </span>
            </div>
            <div>
              <span className="tw-text-base tw-font-bold tw-text-primaryText">
                Women and Men Workout under age 35
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
                Certified Trainer working with Microsoft, Certified Trainer
                working with Microsoft
              </span>
            </div>
          </div>

          <div className="tw-mt-5">
            <div>
              <span className="tw-font-medium tw-text-sm tw-leading-[21px]">
                Licences
              </span>
            </div>
            <div>
              <span className="tw-text-base tw-font-bold tw-text-primaryText">
                ABC Licence by XYZ authority
              </span>
            </div>
          </div>
          <div className="tw-mt-5">
            <div>
              <span className="tw-font-medium tw-text-sm tw-leading-[21px]">
                Description
              </span>
            </div>
            <div>
              <span className="tw-text-base tw-font-bold tw-text-primaryText">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen
              </span>
            </div>
          </div>
        </DialogBody>
      </Dialog>
    </div>
  );
}
