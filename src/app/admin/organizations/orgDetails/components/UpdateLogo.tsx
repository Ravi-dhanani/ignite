import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Typography,
} from "@/components/MaterialTailwind";
import { orgDetailLogoUpdate } from "@/services/request/orgdetails.service";
import { ITenant } from "@/types/orgDetail";
import { showToast } from "@/utils/toast";
import { XCircleIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useMutation, UseQueryResult } from "@tanstack/react-query";
import { useCallback, useState } from "react";
import { Accept, useDropzone } from "react-dropzone";

type Props = {
  open: boolean;
  closeModal: () => void;
  tenantDetails: ITenant;
  data: UseQueryResult<void, Error>;
};

interface FileWithPreview extends File {
  preview: string;
}

export default function UpdateLogo({
  open,
  closeModal,
  tenantDetails,
  data,
}: Props) {
  const [file, setFile] = useState<FileWithPreview | null>();
  const [exitsLogo, setExitsLogo] = useState<string>(tenantDetails?.logo);

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

  const removeLogo = () => {
    setExitsLogo("");
  };

  const accept: Accept = {
    "image/*": [],
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept,
    multiple: false,
  });

  const mutation = useMutation({
    mutationFn: async (formData: any) => {
      try {
        const response: any = await orgDetailLogoUpdate(formData);
        if (response?.success) {
          closeModal();
          showToast("Logo updated successfully.", "success");
          data.refetch();
        }
      } catch (err) {
        showToast("Something went wrong. Please try again", "error");
      }
    },
  });

  const onsubmit = async () => {
    if (!file) return;
    mutation.mutate({
      EntityType: "Tenants",
      Tag: "Tenant-Logo",
      Files: file,
      EntityId: tenantDetails.tenantId,
    });
  };

  return (
    <>
      <Dialog
        open={open}
        className="tw-p-6 tw-max-h-[90vh] tw-overflow-auto"
        handler={closeModal}
        size="xs"
      >
        <DialogHeader className="tw-mb-6">
          <div className="tw-flex tw-justify-between tw-items-center">
            <Typography className="!tw-font-bold !tw-text-2xl !tw-text-gray-900">
              Update Logo
            </Typography>
            <XMarkIcon
              className="tw-h-6 tw-w-6 tw-text-gray-900 tw-cursor-pointer"
              onClick={closeModal}
            />
          </div>
        </DialogHeader>
        <DialogBody className="tw-mb-5">
          <Typography className="!tw-text-blue-gray-900 !tw-font-medium tw-text-sm tw-mb-2">
            Upload Logo
          </Typography>
          {exitsLogo && (
            <div className="tw-flex tw-justify-center">
              <div className="tw-inline-block tw-relative tw-mt-8">
                <Typography className="tw-absolute -tw-top-7 -tw-right-7">
                  <XCircleIcon
                    className="tw-h-6 tw-w-6 tw-text-black tw-cursor-pointer"
                    onClick={removeLogo}
                  />
                </Typography>
                <img
                  src={exitsLogo}
                  alt="Preview"
                  className="tw-w-40 tw-h-auto"
                />
              </div>
            </div>
          )}
          {file?.preview ? (
            <div className="tw-flex tw-justify-center">
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
            </div>
          ) : (
            !exitsLogo && (
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
                      Drand and Drop or
                      <span className="tw-underline">Browse</span>
                    </span>
                  )}
                </div>
              </div>
            )
          )}
        </DialogBody>
        <DialogFooter className="tw-flex tw-justify-end">
          <Button variant="gradient" onClick={onsubmit} className="tw-w-full">
            Edit
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
