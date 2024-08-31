import { Card, CardBody } from "@material-tailwind/react";

export default function PushNotificationList() {
  return (
    <>
      {[1, 1, 1, 1, 1].map((item: any, index: number) => (
        <Card key={index} className="tw-my-2">
          <CardBody
            style={{
              padding: "20px",
            }}
          >
            <div className="tw-flex">
              <label
                htmlFor="event-name"
                className="tw-block tw-text-sm tw-font-bold tw-text-primaryText tw-mb-2"
              >
                Share your suggestions and improvements with us to help enhance
                the features and overall experience
              </label>
            </div>
            <div className="tw-flex tw-gap-x-5">
              <div>
                <label
                  htmlFor="event-name"
                  className="tw-block tw-text-sm  tw-text-blue-gray-900 tw-mb-2"
                >
                  by Rohan Sakore
                </label>
              </div>
              <div>
                <label
                  htmlFor="event-name"
                  className="tw-block tw-text-sm  tw-text-blue-gray-900 tw-mb-2"
                >
                  24 Jan 2024 ;19:30 pm
                </label>
              </div>
            </div>
          </CardBody>
        </Card>
      ))}
    </>
  );
}
