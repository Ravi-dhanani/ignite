import { Button, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { Accept, useDropzone } from "react-dropzone";

interface ISponsorsImageProps {
  title: string;
  subTitle: string;
}
interface FileWithPreview extends File {
  preview: string;
}
export default function SponsorsImage(props: ISponsorsImageProps) {
  const { title, subTitle } = props;
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
      <div className=" tw-flex tw-justify-center">
        <div className="tw-max-w-full tw-w-full tw-bg-white tw-opacity-85 tw-border tw-border-blue-grey-100 tw-rounded-lg tw-p-5">
          <Typography className="!tw-font-bold tw-text-lg tw-text-gray-900 ">
            {title}
          </Typography>
          <span className="tw-text-sm tw-text-gray-800">{subTitle}</span>
          <div className="tw-flex tw-space-x-3 tw-mt-3">
            <div>
              <input
                type="file"
                hidden
                id="imageUpload"
                multiple
                {...getInputProps()}
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
            <div className="tw-grid tw-grid-cols-2 md:tw-grid-cols-3 tw-gap-3">
              {files &&
                files.map((item: any, index: number) => (
                  <div className="tw-relative tw-h-24 tw-w-auto" key={index}>
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
                          onClick={() => removeFile(item)}
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
