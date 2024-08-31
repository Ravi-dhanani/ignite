import { XMarkIcon } from "@heroicons/react/24/solid";

import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Option,
  Select,
  Textarea,
  Typography,
} from "@/components/MaterialTailwind";

type Props = {
  open: boolean;
  closeModal: () => void;
};

export default function CreatePushNotification({ open, closeModal }: Props) {
  return (
    <div>
      <Dialog
        open={open}
        handler={closeModal}
        size="sm"
        className={`tw-p-6 tw-max-h-[90vh] tw-overflow-auto`}
      >
        <DialogHeader className="tw-mb-6">
          <div className="tw-flex tw-justify-between tw-items-center">
            <Typography className="!tw-font-bold !tw-text-2xl !tw-text-gray-900">
              Push Notification
            </Typography>
            <XMarkIcon
              className="tw-h-6 tw-w-6 tw-text-gray-900 tw-cursor-pointer"
              onClick={closeModal}
            />
          </div>
        </DialogHeader>
        <DialogBody className="tw-mb-5">
          <div className="tw-mb-5">
            <label
              htmlFor="event-name"
              className="tw-block tw-text-sm tw-font-medium tw-text-blue-gray-900 tw-mb-2"
            >
              Send To
            </label>
            <Select label="Team">
              <Option value="11">2121</Option>
              <Option value="11">2121</Option>
              <Option value="11">2121</Option>
              <Option value="11">2121</Option>
            </Select>
          </div>
          <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2  tw-gap-5 tw-mb-5">
            <div>
              <label
                htmlFor="event-name"
                className="tw-block tw-text-sm tw-font-medium tw-text-blue-gray-900 tw-mb-2"
              >
                Organization
              </label>
              <Select label="Microsoft">
                <Option value="11">2121</Option>
                <Option value="11">2121</Option>
                <Option value="11">2121</Option>
                <Option value="11">2121</Option>
              </Select>
            </div>
            <div>
              <label
                htmlFor="event-name"
                className="tw-block tw-text-sm tw-font-medium tw-text-blue-gray-900 tw-mb-2"
              >
                Team
              </label>
              <Select label="Security Team">
                <Option value="11">2121</Option>
                <Option value="11">2121</Option>
                <Option value="11">2121</Option>
                <Option value="11">2121</Option>
              </Select>
            </div>
          </div>
          <div>
            <label
              htmlFor="event-name"
              className="tw-block tw-text-sm tw-font-medium tw-text-blue-gray-900 tw-mb-2"
            >
              Description
            </label>
            <Textarea label="Enter Description" />
          </div>
        </DialogBody>
        <DialogFooter className="tw-flex tw-justify-end">
          <Button variant="gradient" onClick={closeModal} className="tw-w-full">
            <span>Save</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}
