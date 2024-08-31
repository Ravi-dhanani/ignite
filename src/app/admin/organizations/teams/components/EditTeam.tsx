import { memberData } from "@/data/MemberData";
import { EyeIcon, XMarkIcon } from "@heroicons/react/24/solid";
import {
  Button,
  Card,
  CardBody,
  Dialog,
  DialogBody,
  DialogHeader,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";

interface IPollInfoProps {
  open: Boolean | any;
  handleOpen: () => void;
}

export default function EditTeam(props: IPollInfoProps) {
  const { open, handleOpen } = props;
  const [data, setDate] = useState([...memberData]);

  return (
    <div>
      <Dialog
        size="md"
        open={open}
        handler={handleOpen}
        className="tw-bg-transparent tw-shadow-none tw-max-h-[90vh] tw-overflow-y-auto tw-p-6"
      >
        <DialogHeader className="tw-shadow-none tw-bg-none tw-flex tw-justify-between">
          <Typography variant="h5" color="blue-gray">
            Security Team
          </Typography>
          <div className="tw-flex tw-items-center tw-gap-x-8">
            <Button variant="outlined" size="md">
              Edit
            </Button>
            <XMarkIcon
              className="tw-h-6 tw-w-6 tw-text-black tw-cursor-pointer"
              onClick={handleOpen}
            />
          </div>
        </DialogHeader>
        <DialogBody className="flex flex-col gap-4 tw-mt-5">
          {data &&
            data.map((item: any, index: number) => (
              <Card
                style={{
                  width: "100%",
                }}
                key={index}
                className="tw-my-1 "
              >
                <CardBody
                  style={{
                    padding: "17px",
                  }}
                >
                  <div className="tw-grid tw-justify-between tw-items-center">
                    <div className="tw-flex tw-col-start-1 tw-col-end-9 tw-gap-x-10 tw-items-center ">
                      <div className="tw-col-span-1 tw-col-end-6">
                        <div className="tw-flex tw-items-center tw-gap-x-5">
                          <div className="tw-text-base tw-font-bold">
                            {index + 1}
                          </div>
                          <div>
                            <img
                              src={item.memberImge}
                              className="tw-h-9 tw-w-9 tw-rounded-xl tw-object-cover"
                            />
                          </div>
                          <div>
                            <Typography className="tw-text-sm tw-font-bold tw-text-primaryText">
                              Brandon Geidt
                            </Typography>
                          </div>
                        </div>
                      </div>
                      <div className="tw-flex tw-col-start-7 tw-col-end-9">
                        <div className="tw-flex tw-justify-between  tw-gap-x-10">
                          <div>
                            <Typography
                              className="tw-text-sm tw-font-medium"
                              color="gray"
                            >
                              Male
                            </Typography>
                          </div>
                          <div>
                            <Typography
                              className="tw-text-sm tw-font-medium"
                              color="gray"
                            >
                              Age : 22 years
                            </Typography>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tw-col-start-9 tw-col-end-12 tw-text-end ">
                      <div className="tw-flex tw-justify-end tw-gap-x-5 tw-items-center">
                        <EyeIcon className="tw-h-6 tw-w-6 tw-text-orange-600 tw-cursor-pointer" />
                        <span className="tw-text-base tw-font-[550] tw-text-primaryText">
                          11293
                        </span>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
        </DialogBody>
      </Dialog>
    </div>
  );
}
