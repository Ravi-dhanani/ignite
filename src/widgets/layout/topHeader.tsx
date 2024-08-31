import { usePathname } from "next/navigation";

// @material-tailwind/react
import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Navbar,
  Typography,
} from "@material-tailwind/react";

// @heroicons/react

import { ChevronDownIcon } from "@heroicons/react/24/solid";

// @context
import Breadcrumb from "@/components/Breadcrumb";
import { useMaterialTailwindController } from "@/context";

export function TopHeader() {
  const [controller, dispatch] = useMaterialTailwindController();
  const pathname = usePathname();

  const [layout, page] = pathname.split("/").filter((el) => el !== "");
  return (
    <Navbar
      color={"transparent"}
      className={`tw-rounded-xl !tw-p-3 !tw-transition-all !tw-max-w-full`}
      fullWidth
    >
      <div className="!tw-flex tw-flex-col sm:tw-flex-row sm:tw-items-center !tw-justify-between tw-gap-2 md:!tw-flex-row">
        <div className="tw-capitalize">
          <Breadcrumb path={pathname} />
        </div>
        <div className="tw-block md:tw-hidden">
          <Menu>
            <MenuHandler>
              <Button
                variant="outlined"
                color="blue-gray"
                className="tw-flex tw-items-center tw-gap-3 tw-capitalize !tw-text-sm tw-text-[#263238]"
              >
                <Typography className="tw-text-[#607D8B]">Org:</Typography>
                Ignite Your Health
                <ChevronDownIcon className="tw-h-3 tw-w-3 tw-stroke-3 tw-text-gray-900" />
              </Button>
            </MenuHandler>
            <MenuList>
              <MenuItem>Status: Paid</MenuItem>
              <MenuItem>Status: Refunded</MenuItem>
              <MenuItem>Status: Cancelled</MenuItem>
              <hr className="tw-w-32 tw-mt-2 tw-mb-1 tw-mx-auto" />
              <MenuItem className="tw-text-red-500">Remove Filter</MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
    </Navbar>
  );
}

export default TopHeader;
