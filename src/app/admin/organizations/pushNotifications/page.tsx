"use client";
import { Button, Typography } from "@material-tailwind/react";
import { useState } from "react";
import CreatePushNotification from "./components/CreatePushNotification";
import PushNotificationList from "./components/PushNotificationList";

export default function pushNotifications() {
  const [openPullNotificationModel, setOpenPullNotificationModel] =
    useState(false);
  const handleOpen = () => {
    setOpenPullNotificationModel(!openPullNotificationModel);
  };
  return (
    <div>
      <div className="tw-bg-white tw-p-5">
        <div className="tw-bg-white">
          <div className="tw-flex tw-items-center tw-justify-between tw-mb-3">
            <Typography variant="h5" className="tw-font-bold">
              Push Notifications
            </Typography>
            <Button
              variant="filled"
              className="tw-text-gray-900"
              onClick={handleOpen}
            >
              + New
            </Button>
          </div>
        </div>

        <div className="tw-mt-5">
          <PushNotificationList />
        </div>
      </div>
      {openPullNotificationModel && (
        <CreatePushNotification
          closeModal={handleOpen}
          open={openPullNotificationModel}
        />
      )}
    </div>
  );
}
