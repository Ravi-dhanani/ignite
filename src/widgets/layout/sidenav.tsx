/* eslint-disable @next/next/no-img-element */
import React from "react";

// react-router-dom
import Link from "next/link";
import { usePathname } from "next/navigation";

// @material-tailwind/react
import {
  Card,
  IconButton,
  List,
  ListItem,
  ListItemPrefix
} from "@material-tailwind/react";

// routes
import routes from "@/routes";

// @heroicons/react
import { XMarkIcon } from "@heroicons/react/24/outline";

// @hooks
import { useOnClickOutside } from "usehooks-ts";

import { setOpenSidenav, useMaterialTailwindController } from "@/context";

const COLORS = {
  dark: "tw-bg-gray-900 hover:tw-bg-gray-700 focus:tw-bg-gray-900 active:tw-bg-gray-700 hover:tw-bg-opacity-100 focus:tw-bg-opacity-100 active:tw-bg-opacity-100",
  blue: "tw-bg-blue-500 hover:tw-bg-blue-700 focus:tw-bg-blue-700 active:tw-bg-blue-700 hover:tw-bg-opacity-100 focus:tw-bg-opacity-100 active:tw-bg-opacity-100",
  "blue-gray":
    "tw-bg-blue-gray-900 hover:tw-bg-blue-gray-900 focus:tw-bg-blue-gray-900 active:tw-bg-blue-gray-900 hover:tw-bg-opacity-80 focus:tw-bg-opacity-80 active:tw-bg-opacity-80",
  green:
    "tw-bg-green-500 hover:tw-bg-green-700 focus:tw-bg-green-700 active:tw-bg-green-700 hover:tw-bg-opacity-100 focus:tw-bg-opacity-100 active:tw-bg-opacity-100",
  orange:
    "tw-bg-orange-500 hover:tw-bg-orange-700 focus:tw-bg-orange-700 active:tw-bg-orange-700 hover:tw-bg-opacity-100 focus:tw-bg-opacity-100 active:tw-bg-opacity-100",
  red: "tw-bg-red-500 hover:tw-bg-red-700 focus:tw-bg-red-700 active:tw-bg-red-700 hover:tw-bg-opacity-100 focus:tw-bg-opacity-100 active:tw-bg-opacity-100",
  pink: "tw-bg-pink-500 hover:tw-bg-pink-700 focus:tw-bg-pink-700 active:tw-bg-pink-700 hover:tw-bg-opacity-100 focus:tw-bg-opacity-100 active:tw-bg-opacity-100",
} as any;

type PropTypes = {
  brandImg?: string;
  brandName?: string;
  routes?: {}[];
};

export default function Sidenav({
  brandImg = "/img/logo-ct.png",
  brandName = "Wellness admin portal",
}: PropTypes) {
  const pathname = usePathname();
  const [controller, dispatch] = useMaterialTailwindController();
  const { sidenavType, sidenavColor, openSidenav }: any = controller;

  const [openCollapse, setOpenCollapse] = React.useState(null);
  const [openSubCollapse, setOpenSubCollapse] = React.useState(null);

  const handleOpenCollapse = (value: any) => {
    setOpenCollapse((cur) => (cur === value ? null : value));
  };

  const handleOpenSubCollapse = (value: any) => {
    setOpenSubCollapse((cur) => (cur === value ? null : value));
  };

  const sidenavRef = React.useRef(null);

  const handleClickOutside = () => {
    setOpenSidenav(dispatch, false);
  };

  useOnClickOutside(sidenavRef, handleClickOutside);

  const collapseItemClasses =
    sidenavType === "dark"
      ? "tw-text-white hover:tw-bg-opacity-25 focus:tw-bg-opacity-100 active:tw-bg-opacity-10 hover:tw-text-white focus:tw-text-white active:tw-text-white"
      : "";
  const activeRouteClasses = `${collapseItemClasses} ${COLORS[sidenavColor]} tw-text-white active:tw-text-white hover:tw-text-white focus:tw-text-white`;

  return (
    <Card
      ref={sidenavRef}
      color={
        sidenavType === "dark"
          ? "gray"
          : sidenavType === "transparent"
          ? "transparent"
          : "white"
      }
      shadow={sidenavType !== "transparent"}
      variant="gradient"
      className={`!tw-fixed tw-mt-0 !tw-rounded-none xl:tw-mt-[72px] tw-inset-y-0 tw-z-40 xl:!tw-z-20 tw-w-full tw-max-w-[18rem] tw-px-4 tw-py-8 tw-shadow-blue-gray-900/5 ${
        openSidenav ? "tw-left-0" : "-tw-left-72"
      } ${sidenavType === "transparent" ? "shadow-none" : "shadow-xl"} ${
        sidenavType === "dark" ? "!tw-text-white" : "tw-text-gray-900"
      } tw-transition-all !tw-shadow-md tw-duration-300 tw-ease-in-out xl:tw-left-0 tw-overflow-y-auto`}
    >
      <IconButton
        ripple={false}
        size="sm"
        variant="text"
        className="!tw-absolute tw-top-1 tw-right-1 tw-block xl:tw-hidden"
        onClick={() => setOpenSidenav(dispatch, false)}
      >
        <XMarkIcon className="tw-w-5 tw-h-5" />
      </IconButton>
      <List className="tw-text-inherit">
        {routes.map(({ name, icon, path }, key) => (
          <List className="!tw-p-0 tw-text-inherit" key={key}>
            <Link href={`${path}`} key={key}>
              <ListItem
                className={`tw-capitalize ${
                  pathname.includes(path) ? activeRouteClasses : collapseItemClasses
                }`}
              >
                <ListItemPrefix>{icon}</ListItemPrefix>
                {name}
              </ListItem>
            </Link>
          </List>
        ))}
      </List>
    </Card>
  );
}
