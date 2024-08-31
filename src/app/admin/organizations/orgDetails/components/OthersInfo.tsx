"use client";

import { Button, Typography } from "@material-tailwind/react";
import { useState } from "react";
import ModelsAndWaivers from "./ModelsAndWaivers";
import TermConditionUploads from "./TermsConditionUploads";
import FaqsModal from "./FaqsModal";
import PrivacyPolicyUploads from "./PrivacyPolicyUploads";
import { IFaqs, IPolicyInfo } from "@/types/orgDetail";

const otherInfo = [
  "Terms & Conditions",
  "Models & Walvers",
  "Privacy Policy",
  "FAQs",
];

type Props = {
  faqs: IFaqs[];
  policy: IPolicyInfo[];
};

export default function OtherInfo({ faqs, policy }: Props) {
  const [openFaqsModal, setOpenFaqsModal] = useState(false);
  const [openTermConditionsUploadModal, setOpenTermConditionsUploadModal] =
    useState(false);
  const [openPrivacyPolicyUploadModal, setOpenPrivacyPolicyUploadModal] =
    useState(false);
  const [openModelsAndWaiversUploadModal, setOpenModelsAndWaiversUploadModal] =
    useState(false);

  const handleOpenFaqsModal = () => {
    setOpenFaqsModal(!openFaqsModal);
  };
  const closeFaqsModal = () => {
    setOpenFaqsModal(false);
  };
  const handleOpenTermConditionsUploadModal = () => {
    setOpenTermConditionsUploadModal(!openTermConditionsUploadModal);
  };
  const closeTermConditionsUploadModal = () => {
    setOpenTermConditionsUploadModal(false);
  };

  const handleOpenPrivacyPolicyUploadModal = () => {
    setOpenPrivacyPolicyUploadModal(!openPrivacyPolicyUploadModal);
  };
  const closePrivacyPolicyUploadModal = () => {
    setOpenPrivacyPolicyUploadModal(false);
  };

  const handleOpenModelsAndWaiversUploadModal = () => {
    setOpenModelsAndWaiversUploadModal(!openModelsAndWaiversUploadModal);
  };
  const closeModelsAndWaiversUploadModal = () => {
    setOpenModelsAndWaiversUploadModal(false);
  };

  return (
    <>
      <div className="tw-p-5 tw-bg-white">
        <Typography variant="h6" className="tw-font-bold tw-mb-2">
          Other Information
        </Typography>
        <div>
          <div className="tw-px-4 tw-mb-3 tw-py-3 tw-flex  tw-justify-between tw-items-center tw-rounded-xl tw-border tw-border-text-gray-300">
            <Typography variant="h6" className="tw-font-bold tw-text-sm">
              Terms & Conditions
            </Typography>
            <div className="tw-flex tw-flex-col-reverse md:tw-flex-row tw-justify-between tw-items-end md:tw-items-center">
              <Typography className="tw-mr-0 md:tw-mr-4 tw-text-gray-600 tw-text-xs tw-font-medium tw-mt-2 md:tw-mt-0">
                Last updated 20 Jan 2024
              </Typography>
              <Button
                variant="outlined"
                color="blue-gray"
                className="tw-text-gray-900 tw-text-xs"
                onClick={handleOpenTermConditionsUploadModal}
              >
                Update
              </Button>
            </div>
          </div>
          <div className="tw-px-4 tw-mb-3 tw-py-3 tw-flex  tw-justify-between tw-items-center tw-rounded-xl tw-border tw-border-text-gray-300">
            <Typography variant="h6" className="tw-font-bold tw-text-sm">
              Models & Walvers
            </Typography>
            <div className="tw-flex tw-flex-col-reverse md:tw-flex-row tw-justify-between tw-items-end md:tw-items-center">
              <Typography className="tw-mr-0 md:tw-mr-4 tw-text-gray-600 tw-text-xs tw-font-medium tw-mt-2 md:tw-mt-0">
                Last updated 20 Jan 2024
              </Typography>
              <Button
                variant="outlined"
                color="blue-gray"
                className="tw-text-gray-900 tw-text-xs"
                onClick={handleOpenModelsAndWaiversUploadModal}
              >
                Update
              </Button>
            </div>
          </div>
          <div className="tw-px-4 tw-mb-3 tw-py-3 tw-flex  tw-justify-between tw-items-center tw-rounded-xl tw-border tw-border-text-gray-300">
            <Typography variant="h6" className="tw-font-bold tw-text-sm">
              Privacy Policy
            </Typography>
            <div className="tw-flex tw-flex-col-reverse md:tw-flex-row tw-justify-between tw-items-end md:tw-items-center">
              <Typography className="tw-mr-0 md:tw-mr-4 tw-text-gray-600 tw-text-xs tw-font-medium tw-mt-2 md:tw-mt-0">
                Last updated 20 Jan 2024
              </Typography>
              <Button
                variant="outlined"
                color="blue-gray"
                className="tw-text-gray-900 tw-text-xs"
                onClick={handleOpenPrivacyPolicyUploadModal}
              >
                Update
              </Button>
            </div>
          </div>
          <div className="tw-px-4 tw-mb-3 tw-py-3 tw-flex  tw-justify-between tw-items-center tw-rounded-xl tw-border tw-border-text-gray-300">
            <Typography variant="h6" className="tw-font-bold tw-text-sm">
              FAQs
            </Typography>
            <div className="tw-flex tw-flex-col-reverse md:tw-flex-row tw-justify-between tw-items-end md:tw-items-center">
              <Typography className="tw-mr-0 md:tw-mr-4 tw-text-gray-600 tw-text-xs tw-font-medium tw-mt-2 md:tw-mt-0">
                Last updated 20 Jan 2024
              </Typography>
              <Button
                variant="outlined"
                color="blue-gray"
                className="tw-text-gray-900 tw-text-xs"
                onClick={handleOpenFaqsModal}
              >
                Update
              </Button>
            </div>
          </div>
        </div>
      </div>
      <FaqsModal
        open={openFaqsModal}
        closeModal={closeFaqsModal}
        faqsDetails={faqs}
      />
      {policy &&
        policy
          .filter((item: IPolicyInfo) => item.name === "Terms & Conditions")
          .map((policy: IPolicyInfo, index: number) => (
            <TermConditionUploads
              key={index}
              open={openTermConditionsUploadModal}
              closeModal={closeTermConditionsUploadModal}
              termsAndConditions={policy}
            />
          ))}
      {policy &&
        policy
          .filter((item: IPolicyInfo) => item.name === "Privacy Policy")
          .map((policy: IPolicyInfo, index: number) => (
            <PrivacyPolicyUploads
              key={index}
              open={openPrivacyPolicyUploadModal}
              closeModal={closePrivacyPolicyUploadModal}
              privacyPolicy={policy}
            />
          ))}
      {policy &&
        policy
          .filter((item: IPolicyInfo) => item.name === "Models & Waivers")
          .map((policy: IPolicyInfo, index: number) => (
            <ModelsAndWaivers
              key={index}
              open={openModelsAndWaiversUploadModal}
              closeModal={closeModelsAndWaiversUploadModal}
              modelsAndWaivers={policy}
            />
          ))}
    </>
  );
}
