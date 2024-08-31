import { Breadcrumbs, Typography } from "@material-tailwind/react";
import React from "react";
interface IBreadcrumbProps {
  path: string;
}
export default function Breadcrumb(props: IBreadcrumbProps) {
  const { path } = props;
  const segment = path.split("/").slice(2);

  if (segment.includes("events") && segment.at(-1) !== "events") {
    segment.pop();
  }

  return (
    <div>
      <Breadcrumbs className={`tw-bg-transparent !tw-p-0 tw-transition-all `}>
        {segment.map((item: any, index: number) => (
          <Typography
            key={index}
            variant="small"
            color="black"
            className={`!tw-font-semibold ${
              index === segment.length - 1
                ? "tw-opacity-100 tw-text-black"
                : "tw-opacity-50"
            }  tw-transition-all hover:!tw-text-blue-gray-700 hover:tw-opacity-100`}
          >
            {item}
          </Typography>
        ))}
      </Breadcrumbs>
    </div>
  );
}
