"use client";
import { XMarkIcon } from "@heroicons/react/24/solid";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
  Input,
  Option,
  Select,
} from "@/components/MaterialTailwind";
import React from "react";
import theme from "@/theme";

type Props = {
  open: boolean;
  handleOpen: () => void;
  closeModal: () => void;
};

const AdminEditorsModal = ({ open, handleOpen, closeModal }: Props) => {
  const { sizes } = theme.dialog.styles;
  return (
    <div>
      <Dialog open={open} handler={handleOpen} className={`tw-p-6`} size="sm">
        <DialogHeader className="tw-mb-6">
          <div className="tw-flex tw-justify-between tw-items-center">
            <Typography className="!tw-font-bold !tw-text-2xl !tw-text-gray-900">
              Invite Admin
            </Typography>
            <XMarkIcon
              className="tw-h-6 tw-w-6 tw-text-gray-900 tw-cursor-pointer"
              onClick={closeModal}
            />
          </div>
        </DialogHeader>
        <DialogBody className="tw-mb-5">
          <div className="tw-mb-5">
            <Input type="text" label="Email address" />
          </div>
          <Select
            label="select role"
            containerProps={{
              className: "tw-min-w-max",
            }}
          >
            <Option>admin</Option>
            <Option>editor</Option>
          </Select>
        </DialogBody>
        <DialogFooter className="tw-flex tw-justify-end">
          <Button variant="gradient" onClick={handleOpen} className="tw-w-full">
            <span>invite</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
};

export default AdminEditorsModal;
