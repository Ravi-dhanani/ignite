"use client";
import { XCircleIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Icon } from "@iconify/react";

import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Input,
  Typography,
} from "@/components/MaterialTailwind";
import { useCallback, useState } from "react";
import { Accept, useDropzone } from "react-dropzone";

type Props = {
  open: boolean;
  closeModal: () => void;
};

interface FileWithPreview extends File {
  preview: string;
}

export default function CreateContact({ open, closeModal }: Props) {
  const [file, setFile] = useState<FileWithPreview | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const fileWithPreview = Object.assign(acceptedFiles[0], {
        preview: URL.createObjectURL(acceptedFiles[0]),
      });
      setFile(fileWithPreview);
    }
  }, []);

  const removeFile = () => {
    setFile(null);
  };

  const accept: Accept = {
    "image/*": [],
  };
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept,
    multiple: false,
  });

  return (
    <>
      <Dialog
        open={open}
        handler={closeModal}
        size="xs"
        className={`tw-p-6 tw-max-h-[90vh] tw-overflow-auto`}
      >
        <DialogHeader className="tw-mb-6">
          <div className="tw-flex tw-justify-between tw-items-center">
            <Typography className="!tw-font-bold !tw-text-2xl !tw-text-gray-900">
              Create Contact
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
              Type
            </label>
            <Input
              type="text"
              label="e.g Tech Support, Program support, Committee member"
            />
          </div>
          <div className="tw-mb-5">
            <label
              htmlFor="event-name"
              className="tw-block tw-text-sm tw-font-medium tw-text-blue-gray-900 tw-mb-2"
            >
              Name (Optional)
            </label>
            <Input type="text" label="Sumit Voohra" />
          </div>
          <div className="tw-mb-5">
            <label
              htmlFor="event-name"
              className="tw-block tw-text-sm tw-font-medium tw-text-blue-gray-900 tw-mb-2"
            >
              Email
            </label>
            <Input type="text" label="Email" />
          </div>
          <div>
            <Typography className="!tw-text-blue-gray-900 !tw-font-medium tw-text-sm tw-mb-2">
              Upload Image (Optional)
            </Typography>

            {file?.preview ? (
              <>
                <div className="tw-inline-block tw-relative tw-mt-8">
                  <Typography className="tw-absolute -tw-top-7 -tw-right-7">
                    <XCircleIcon
                      className="tw-h-6 tw-w-6 tw-text-black tw-cursor-pointer"
                      onClick={removeFile}
                    />
                  </Typography>
                  <img
                    src={file?.preview}
                    alt="Preview"
                    className="tw-w-40 tw-h-auto"
                  />
                </div>
              </>
            ) : (
              <div
                {...getRootProps()}
                className="tw-h-24 tw-w-full tw-flex tw-justify-center tw-items-center tw-outline-none tw-bg-blue-grey-100 tw-rounded-lg tw-border tw-border-blue-gray-100 tw-bg-gray-100"
              >
                <div className="tw-flex tw-flex-col tw-justify-center tw-items-center">
                  <input {...getInputProps()} />
                  <div>
                    <Icon
                      icon="solar:upload-outline"
                      className="tw-text-xl tw-text-black tw-mb-2"
                    />
                  </div>
                  {isDragActive ? (
                    <span className="tw-text-black tw-text-xs">
                      Drop the files here ...
                    </span>
                  ) : (
                    <span className="tw-text-black tw-text-xs">
                      Drand and Drop or{" "}
                      <span className="tw-underline">Browse</span>
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>
        </DialogBody>
        <DialogFooter className="tw-flex tw-justify-end">
          <Button variant="gradient" onClick={closeModal} className="tw-w-full">
            <span>Save</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
