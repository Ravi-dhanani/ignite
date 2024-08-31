import { XMarkIcon } from "@heroicons/react/24/solid";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Input,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { Accept, useDropzone } from "react-dropzone";

interface ICreateTrainerProps {
  handleOpen: () => void;
  open: Boolean | any;
}

type TrainerItem = {
  id: number;
  License: string;
  LicenseBody: string;
};

interface FileWithPreview extends File {
  preview: string;
}

let intitialTrainer = [{ id: 1, License: "", LicenseBody: "" }];
export default function CreateTrainer(props: ICreateTrainerProps) {
  const { handleOpen, open } = props;
  const [trainer, setTrainer] = useState<TrainerItem[]>(intitialTrainer);

  const handleAddTrainer = () => {
    const newFaq = { id: Date.now(), License: "", LicenseBody: "" };
    setTrainer([...trainer, newFaq]);
  };

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
    <>
      <Dialog
        size="sm"
        open={open}
        handler={handleOpen}
        className={`tw-p-6 tw-max-h-[90vh] tw-overflow-auto`}
      >
        <DialogHeader className="tw-shadow-none tw-bg-none tw-flex tw-justify-between">
          <Typography variant="h4" color="blue-gray">
            Create Trainer
          </Typography>
          <XMarkIcon
            className="tw-h-6 tw-w-6 tw-text-black tw-cursor-pointer"
            onClick={handleOpen}
          />
        </DialogHeader>
        <DialogBody className="flex flex-col gap-4">
          <div className="tw-grid tw-gap-y-5">
            <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-y-4 md:tw-gap-x-7">
              <div>
                <Typography className="tw-mb-2" variant="h6">
                  Name
                </Typography>
                <Input label="Name" className="" />
              </div>
              <div>
                <Typography className="tw-mb-2" variant="h6">
                  Qualifications
                </Typography>
                <Input label="Qualifications" className="" />
              </div>
            </div>
            <div>
              <div>
                <Typography className="tw-mb-2" variant="h6">
                  Coaching/Training Preference
                </Typography>
                <Input
                  label="Coaching/Training Preference"
                  size="lg"
                  className=""
                />
              </div>
            </div>
            <div>
              <div>
                <Typography className="tw-mb-2" variant="h6">
                  Trainer Description
                </Typography>
                <Textarea label="Trainer Description" rows={4} />
              </div>
            </div>
            <div>
              {trainer.map((item, index) => {
                return (
                  <div
                    key={item.id}
                    className="tw-grid tw-grid-cols-1 tw-gap-y-4 md:tw-grid-cols-2 tw-items-center md:tw-gap-x-7 tw-mb-3"
                  >
                    <div>
                      <Typography className="tw-mb-2" variant="h6">
                        License
                      </Typography>
                      <Input size="lg" label="License" />
                    </div>
                    <div>
                      <Typography className="tw-mb-2" variant="h6">
                        License Body
                      </Typography>
                      <Input label="License Body" />
                    </div>
                  </div>
                );
              })}
            </div>
            <div>
              <span
                className="tw-underline tw-text-xs tw-font-bold tw-text-black"
                onClick={handleAddTrainer}
              >
                + ADD ANOTHER LICENSE
              </span>
            </div>
            <div className="tw-flex tw-gap-x-5">
              <input
                type="file"
                hidden
                multiple
                {...getInputProps()}
                id="imageUpload"
              />
              <label htmlFor="imageUpload">
                <div className="tw-p-4 tw-bg-[#f6f6f6] tw-rounded-lg tw-flex tw-justify-center tw-items-center tw-cursor-pointer tw-border-dashed tw-border-[2px] tw-border-[#c1c1c1] tw-h-24 tw-w-24">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke={"#9a9a9a"}
                    className="tw-size-9"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </div>
              </label>
              <div className="tw-grid tw-grid-cols-3 tw-gap-x-4 tw-gap-y-[1.5rem]">
                {files &&
                  files.map((item: any, index: number) => (
                    <div className="tw-relative tw-h-24 tw-w-36" key={index}>
                      <img
                        src={item.preview}
                        className=" tw-h-full tw-w-full tw-object-fill tw-rounded-md"
                      />
                      <div className="tw-absolute -tw-top-1 -tw-right-2 tw-p-0">
                        <Button
                          style={{
                            padding: 0,
                          }}
                          onClick={() => removeFile(item)}
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
                            className="tw-size-3"
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
        </DialogBody>
        <DialogFooter className="tw-mt-5">
          <Button variant="filled" onClick={handleOpen} fullWidth>
            save
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
