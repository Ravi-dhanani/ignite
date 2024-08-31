// @heroicons/react
import {
  Cog6ToothIcon,
  InboxIcon,
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";

const icon = {
  className: "tw-w-5 tw-h-5 tw-text-inherit",
};

const text = {
  color: "inherit",
  className: "tw-w-5 tw-grid place-items-center !tw-font-medium",
};

export const routes = [
  {
    icon: <UserCircleIcon {...icon} />,
    name: "orgDetails",
    path: "/admin/organizations/orgDetails",
  },
  {
    icon: <PresentationChartBarIcon {...icon} />,
    name: "Events",
    path: "/admin/organizations/events",
  },
  {
    icon: <ShoppingBagIcon {...icon} />,
    name: "App Users",
    path: "/admin/organizations/appuser",
  },
  {
    icon: <InboxIcon {...icon} />,
    name: "Challenges",
    path: "/admin/organizations/challenges",
  },
  {
    icon: <InboxIcon {...icon} />,
    name: "Polls",
    path: "/admin/organizations/polls",
  },
  {
    icon: <Cog6ToothIcon {...icon} />,
    name: "Teams",
    path: "/admin/organizations/teams",
  },
  {
    icon: <Cog6ToothIcon {...icon} />,
    name: "Wellness Providers",
    path: "/admin/organizations/wellnessProviders",
  },
  {
    icon: <InboxIcon {...icon} />,
    name: "Gallery",
    path: "/admin/organizations/gallery",
  },
  {
    icon: <Cog6ToothIcon {...icon} />,
    name: "Customer Support",
    path: "/admin/organizations/contacts",
  },
  {
    icon: <Cog6ToothIcon {...icon} />,
    name: "Sponsors",
    path: "/admin/organizations/sponsors",
  },
  {
    icon: <Cog6ToothIcon {...icon} />,
    name: "Push Notification",
    path: "/admin/organizations/pushNotifications",
  },

  {
    icon: <Cog6ToothIcon {...icon} />,
    name: "Settings",
    path: "/admin/organizations/settings",
  },
];
export default routes;
