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

type OrganizationItem = {
  id: number;
  firstName: string;
  lastName: string;
};

let intitialOrgnization = [{ id: 1, firstName: "", lastName: "" }];

const CreateOrganization = ({ open, closeModal }: Props) => {
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

  const [addOrganization, setAddOrganization] =
    useState<OrganizationItem[]>(intitialOrgnization);

  const handleAddFaq = () => {
    const newOrganization = { id: Date.now(), firstName: "", lastName: "" };
    setAddOrganization([...addOrganization, newOrganization]);
  };
  const handleChange = (
    id: number,
    field: "question" | "answer",
    value: string
  ) => {
    setAddOrganization(
      addOrganization.map((org) =>
        org.id === id ? { ...org, [field]: value } : org
      )
    );
  };
  return (
    <div>
      <Dialog
        open={open}
        className="tw-p-6 tw-max-h-[90vh] tw-overflow-auto"
        handler={closeModal}
        size="sm"
      >
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
            <Input type="text" label="Organization Name" />
          </div>
          <div className="tw-mb-5">
            <Input type="text" label="Domain" />
          </div>
          <div>
            <Typography className="!tw-text-blue-gray-900 !tw-font-medium tw-text-sm tw-mb-2">
              Upload Logo
              <Typography className="tw-text-xs tw-inline">
                &#40;Horizontal aligned logo preferred&#41;
              </Typography>
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
          <div>
            <Typography variant="h6" className="tw-mt-2 tw-text-primaryText">
              Organization Admin
            </Typography>
            {addOrganization.map((org, index) => {
              const isLast = index === addOrganization.length - 1;
              return (
                <>
                  <div className="tw-grid tw-gap-y-3 md:tw-grid-cols-2 md:tw-gap-x-5 tw-mt-4">
                    <div>
                      <Input type="text" label="First Name" />
                    </div>
                    <div>
                      <Input type="text" label="Last Name" />
                    </div>
                  </div>
                  <div className="tw-grid tw-gap-y-3 md:tw-grid-cols-2  md:tw-gap-x-5 tw-mt-4">
                    <div>
                      <Input type="email" label="Email" />
                    </div>
                    <div>
                      <Input type="Password" label="Password" />
                    </div>
                  </div>
                </>
              );
            })}
            <div className="tw-mt-2 tw-cursor-pointer">
              <span
                className="tw-text-primaryText tw-text-sm  tw-font-bold"
                onClick={handleAddFaq}
              >
                + Add another admin
              </span>
            </div>
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
};

export default CreateOrganization;
