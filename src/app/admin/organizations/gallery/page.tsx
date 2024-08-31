"use client";
import { Button, Typography } from "@material-tailwind/react";
import { useRouter } from "next/navigation";
import GalleryList from "./components/GalleryList";

export default function Gallery() {
  const router = useRouter();
  return (
    <div className="tw-bg-white tw-h-full">
      <div className="tw-p-5 tw-flex-col">
        <div className="tw-flex tw-justify-between tw-items-center">
          <div>
            <Typography variant="h5">Gallery</Typography>
          </div>
          <div className="tw-flex tw-items-center tw-gap-x-1">
            <div>
              <Button
                variant="filled"
                size="md"
                onClick={() =>
                  router.push("/admin/organizations/gallery/createMedia")
                }
              >
                + Media
              </Button>
            </div>
          </div>
        </div>
        <div className="tw-pt-1">
          <div className="tw-flex  tw-gap-x-3 ">
            <div className="tw-flex tw-gap-x-1">
              <span className="tw-text-base tw-text-gray-600">
                Image Posts:
              </span>
              <span className=" tw-text-base tw-text-black tw-font-bold">
                12
              </span>
            </div>
            <span className="tw-bg-gray-700 tw-w-[3px] tw-h-4 tw-mt-1"></span>
            <div className=" ">
              <div className="tw-ml-0 md::tw-ml-3 tw-flex tw-gap-x-1 ">
                <span className="tw-text-base tw-text-gray-600">
                  Videos Posts :
                </span>
                <span className=" tw-text-base tw-text-black tw-font-bold">
                  114
                </span>
              </div>
            </div>
            <span className="tw-bg-gray-700 tw-w-[3px] tw-h-4 tw-mt-1"></span>

            <div>
              <div className="tw-ml-0 md:tw-ml-3 tw-flex tw-gap-x-1">
                <span className="tw-text-base tw-text-gray-600">
                  Caraousel:
                </span>
                <span className=" tw-text-base tw-text-black tw-font-bold">
                  114
                </span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <GalleryList />
        </div>
      </div>
    </div>
  );
}
