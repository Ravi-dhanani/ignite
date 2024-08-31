import { EllipsisHorizontalIcon } from "@heroicons/react/24/solid";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { useState } from "react";
import MediaInfo from "./MediaInfo";

export default function GalleryList() {
  const [openMediaInfo, setOpenMediaInfo] = useState(false);
  const handleOpen = () =>
    setOpenMediaInfo((openMediaInfo: boolean) => !openMediaInfo);
  return (
    <div className="tw-grid sm:tw-grid-cols-2 tw-gap-y-4 md:tw-grid-cols-2 md:tw-gap-y-4 lg:tw-grid-cols-3 tw-gap-x-5 tw-mt-7">
      {[1, 1, 1].map((item) => (
        <Card
          className=" tw-w-full"
          style={{
            padding: 0,
          }}
        >
          <img
            src="https://media.istockphoto.com/id/956403104/photo/focused-young-indian-man-meditating-in-lotus-pose.jpg?s=1024x1024&w=is&k=20&c=Y7OGHkS7WKexOohPSY4jwIuUlP9UqHSs5hPPzu5AA3g="
            alt="profile-picture"
            className="tw-h-52 tw-rounded-t-lg"
          />
          <CardBody
            style={{
              padding: "10px",
            }}
          >
            <div className="tw-grid tw-grid-cols-12">
              <div className="tw-col-start-1 tw-col-end-12">
                <Typography className="tw-flex-nowrap">
                  Share your suggestions and improvements with us to help
                  enhance the features and overall experience
                </Typography>
              </div>
              <div className="tw-col-start-12">
                <EllipsisHorizontalIcon
                  className="tw-h-6 tw-w-6  tw-cursor-pointer"
                  onClick={() => setOpenMediaInfo(true)}
                />
              </div>
            </div>
          </CardBody>
        </Card>
      ))}
      {openMediaInfo && (
        <MediaInfo handleOpen={handleOpen} open={openMediaInfo} />
      )}
    </div>
  );
}
