import { Button, Typography } from "@material-tailwind/react";
import React, { useState } from "react";
import { Accept, useDropzone } from "react-dropzone";

interface FileWithPreview extends File {
  preview: string;
}
export default function MediaImages() {
  const [files, setFiles] = useState<FileWithPreview[]>([]);

  const onDrop = (acceptedFiles: File[]) => {
    const newFiles = acceptedFiles.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
      })
    );

    setFiles((prevFiles) => {
      const filteredNewFiles = newFiles.filter(
        (newFile) =>
          !prevFiles.some(
            (existingFile) =>
              existingFile.name === newFile.name &&
              existingFile.size === newFile.size &&
              existingFile.type === newFile.type
          )
      );
      return [...prevFiles, ...filteredNewFiles];
    });
  };

  const removeFile = (fileToRemove: FileWithPreview) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file !== fileToRemove));
    URL.revokeObjectURL(fileToRemove.preview);
  };

  const accept: Accept = {
    "image/*": [],
  };

  const { getInputProps } = useDropzone({
    onDrop,
    accept,
    multiple: true,
  });

  return (
    <div>
      <div className="tw-pb-20 tw-flex tw-justify-center">
        <div className="tw-max-w-4xl tw-w-full tw-bg-white tw-opacity-85 tw-border tw-border-blue-grey-100 tw-rounded-lg tw-p-5">
          <Typography className="!tw-font-bold tw-text-lg tw-text-gray-900 tw-mb-3">
            Images (1080 x 1080 recommended)
          </Typography>
          <div className="tw-flex tw-space-x-3">
            <div>
              <input
                type="file"
                hidden
                {...getInputProps()}
                multiple
                id="imageUpload"
              />
              <label htmlFor="imageUpload">
                <div className="tw-p-4 tw-bg-[#f6f6f6] tw-rounded-lg tw-flex tw-justify-center tw-items-center tw-cursor-pointer tw-border-dashed tw-border-[2px] tw-border-[#c1c1c1] tw-h-24 tw-w-24">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke={"#9a9a9a"}
                    className="tw-size-9"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </div>
              </label>
            </div>
            <div className="tw-grid tw-grid-cols-4 tw-gap-x-4">
              {files &&
                files.map((item: any, index: number) => (
                  <div className="tw-relative tw-h-24 tw-w-36" key={index}>
                    <img
                      className=" tw-h-full tw-w-full tw-object-fill tw-rounded-md"
                      src={item.preview}
                    />
                    <div className="tw-absolute -tw-top-1 -tw-right-2 tw-p-0">
                      <Button
                        style={{
                          padding: 0,
                        }}
                        size="sm"
                        variant="filled"
                        onClick={() => removeFile(item)}
                        color="black"
                        className="tw-bg-black tw-h-4 tw-w-4 tw-rounded-full tw-flex tw-justify-center tw-items-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2.5}
                          stroke="currentColor"
                          className="tw-size-3 "
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18 18 6M6 6l12 12"
                          />
                        </svg>
                      </Button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
