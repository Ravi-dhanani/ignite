import { Card, CardBody, Option, Select } from "@material-tailwind/react";

export default function CustomerQueryCard() {
  return (
    <>
      {[1, 1, 1, 1, 1].map((item: any, index: number) => (
        <Card key={index} className="tw-my-2">
          <CardBody
            style={{
              padding: "20px",
            }}
          >
            <div className="sm:tw-flex  tw-space-y-2 sm:tw-justify-between tw-items-center sm:tw-gap-x-2">
              <div className="tw-truncate">
                <label
                  htmlFor="event-name"
                  className=" tw-text-sm tw-font-bold  tw-text-primaryText tw-mb-2"
                >
                  Share your suggestions and improvements with us to help
                  enhance the features and overall experience
                </label>
              </div>
              <div className="tw-w-40  md:tw-w-auto">
                <Select label="open">
                  <Option value="Open">Open</Option>
                  <Option value="Resolved">Resolved</Option>
                </Select>
              </div>
            </div>
            <div className="tw-flex tw-gap-x-5 tw-mt-2 sm:tw-mt-0">
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
