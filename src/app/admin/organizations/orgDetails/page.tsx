"use client";
import { Button, Typography } from "@/components/MaterialTailwind";
import { orgDetail } from "@/services/request/orgdetails.service";
import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";
import { Fragment, useState } from "react";
import AdminEditors from "./components/AdminEditors";
import OtherInfo from "./components/OthersInfo";
import ProgramDetail from "./components/ProgramDetail";
import UpdateLogo from "./components/UpdateLogo";
import { ISummary } from "@/types/orgDetail";
import { useQuery } from "@tanstack/react-query";

export default function OrgDetails() {
  const [openUpdateLogoModel, setOpenUpdateLogoModel] = useState(false);
  const [orgDetails, setOrgDetails] = useState<any>(null);
  const [summary, setSummary] = useState<any>(null);
  const [adminUser, setAdminUser] = useState<any>(null);
  const [faqs, setFaqs] = useState<any>(null);
  const [policy, setPolicy] = useState<any>(null);

  const data = useQuery({
    queryKey: ["orgDetailsData"],
    queryFn: async () =>
      orgDetail()
        .then((response) => {
          const orgDetails = response?.data;
          localStorage.setItem("tenantId", response?.data?.tenantId);
          setOrgDetails(orgDetails?.orgDetails);
          setSummary(orgDetails?.orgDetails?.Summary);
          setAdminUser(orgDetails?.orgDetails?.AdminUser);
          setFaqs(orgDetails?.orgDetails?.FAQs);
          setPolicy(orgDetails?.orgDetails?.Policy);
        })
        .catch((error) => {
          console.error(error);
        }),
  });

  const onClose = () => {
    setOpenUpdateLogoModel(false);
    data.refetch();
  };

  return (
    <div>
      <div className="tw-bg-[#D9D9D92E]">
        <div className=" tw-p-5 tw-mb-3 tw-shadow-md tw-bg-white">
          {orgDetails && (
            <>
              <div className="tw-flex tw-items-center tw-justify-between tw-mb-2">
                <div className="tw-flex tw-flex-col-reverse md:tw-flex-row md:tw-gap-2 md:tw-items-center">
                  <Typography
                    variant="h4"
                    className="tw-text-xl md:tw-text-2xl"
                  >
                    {orgDetails?.Tenant?.name}
                  </Typography>
                  <img
                    src={orgDetails?.Tenant?.logo}
                    alt="logo"
                    className="tw-w-12 tw-h-auto"
                  />
                </div>
                <div>
                  <Button
                    variant="outlined"
                    color="blue-gray"
                    className="tw-text-gray-900 tw-mr-3"
                    onClick={() => setOpenUpdateLogoModel(true)}
                  >
                    edit
                  </Button>
                  <EllipsisVerticalIcon
                    color="#90A4AE"
                    className="tw-w-6 tw-h-6 tw-inline-block"
                  />
                </div>
              </div>
              <div className="tw-mb-2">
                <Typography className="tw-text-gray-600 tw-text-sm tw-font-bold">
                  Domain : &nbsp;
                  <span className="tw-text-gray-900 tw-font-bold">
                    {orgDetails?.Tenant?.domain}
                  </span>
                </Typography>
              </div>
            </>
          )}

          <div className="tw-flex tw-items-center">
            {summary &&
              summary.map((item: ISummary, index: number) => (
                <Fragment key={index}>
                  <Typography className="tw-text-gray-600 tw-text-sm tw-border-r tw-border-gray-900 tw-pr-2">
                    Events : &nbsp;
                    <span className="tw-text-gray-900 tw-font-bold">
                      {item?.events}
                    </span>
                  </Typography>

                  <Typography className="tw-text-gray-600 tw-text-sm tw-border-r tw-border-gray-900 tw-px-2">
                    Challenges : &nbsp;
                    <span className="tw-text-gray-900 tw-font-bold">
                      {item?.challenges}
                    </span>
                  </Typography>
                  <Typography className="tw-text-gray-600 tw-text-sm tw-border-r tw-border-gray-900 tw-px-2">
                    Polls : &nbsp;
                    <span className="tw-text-gray-900 tw-font-bold">
                      {item?.polls}
                    </span>
                  </Typography>
                  <Typography className="tw-text-gray-600 tw-text-sm tw-border-r tw-border-gray-900 tw-px-2">
                    Challengers : &nbsp;
                    <span className="tw-text-gray-900 tw-font-bold">
                      {item?.challengers}
                    </span>
                  </Typography>
                  {orgDetails?.Tenant?.isDefault ? (
                    <Typography className="tw-text-gray-600 tw-text-sm tw-pl-2">
                      Wellness Providers: &nbsp;
                      <span className="tw-text-gray-900 tw-font-bold">
                        {item?.wellnessProvider}
                      </span>
                    </Typography>
                  ) : (
                    <Typography className="tw-text-gray-600 tw-text-sm tw-pl-2">
                      Coaches: &nbsp;
                      <span className="tw-text-gray-900 tw-font-bold">
                        {item?.coaches}
                      </span>
                    </Typography>
                  )}
                </Fragment>
              ))}
          </div>
        </div>
        {adminUser && <AdminEditors adminUser={adminUser} />}
        {orgDetails && (
          <ProgramDetail
            tenantDetail={orgDetails?.TenantDetail}
            refetchData={data}
          />
        )}
        {openUpdateLogoModel && (
          <UpdateLogo
            open={openUpdateLogoModel}
            closeModal={onClose}
            tenantDetails={orgDetails?.Tenant}
            data={data}
          />
        )}

        {(faqs || policy) && <OtherInfo faqs={faqs} policy={policy} />}
      </div>
    </div>
  );
}
