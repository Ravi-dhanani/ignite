"use client";

import React from "react";

import routes from "@/routes";

import { Topbar, TopHeader } from "@/widgets/layout";

import Sidenav from "@/widgets/layout/sidenav";

import { useMaterialTailwindController } from "@/context";
import { usePathname } from "next/navigation";

export default function InnerContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const [controller, dispatch] = useMaterialTailwindController();
  const { sidenavType } = controller;
  const router = usePathname();
  const isSuperadmin = router.startsWith("/superadmin");

  return (
    <div className="tw-bg-blue-gray-50/50">
      <div>
        <Topbar />
        <div>
          {!isSuperadmin && (
            <Sidenav
              routes={routes}
              brandImg={
                sidenavType === "dark"
                  ? "/img/logo-ct.png"
                  : "/img/logo-ct-dark.png"
              }
            />
          )}

          <div
            className={`${
              isSuperadmin ? "tw-bg-white tw-p-5" : "xl:tw-ml-[288px]"
            } tw-mt-[77px] tw-h-[calc(100vh_-_77px)] tw-overflow-auto `}
          >
            {isSuperadmin ? (
              children
            ) : (
              <>
                <TopHeader />
                {children}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
