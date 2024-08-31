import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Typography,
} from "@/components/MaterialTailwind";
import { TextEditor } from "@/components/textEditor/TextEditor";
import { orgDetailOtherInformationUpdate } from "@/services/request/orgdetails.service";
import { IPolicyInfo } from "@/types/orgDetail";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { showToast } from "@/utils/toast";

type Props = {
  open: boolean;
  closeModal: () => void;
  termsAndConditions: IPolicyInfo;
};

const TermConditionUploads = ({
  open,
  closeModal,
  termsAndConditions,
}: Props) => {
  const mutation = useMutation({
    mutationFn: async (formData: any) => {
      try {
        const res: any = await orgDetailOtherInformationUpdate(formData);
        if (res?.success) {
          showToast("Terms & Conditions updated successfully.", "success");
          closeModal();
        }
        return res;
      } catch (e) {
        showToast("Something went wrong. Please try again", "error");
      }
    },
  });
  const [content, setContent] = useState<string>(
    termsAndConditions?.content || ""
  );

  const handleChange = (event: any) => {
    setContent(event);
  };

  const handleSubmit = async () => {
    const data = {
      id: termsAndConditions?.id,
      name: termsAndConditions?.name,
      content,
      policyType: termsAndConditions?.name,
    };
    mutation.mutate(data);
  };

  return (
    <Dialog
      open={open}
      handler={closeModal}
      className={`tw-p-6 tw-max-h-[96vh] tw-overflow-auto`}
      size="lg"
    >
      <DialogHeader className="tw-mb-6">
        <div className="tw-flex tw-justify-between tw-items-center">
          <Typography className="!tw-font-bold !tw-text-2xl !tw-text-gray-900">
            Terms & Conditions
          </Typography>
          <XMarkIcon
            className="tw-h-6 tw-w-6 tw-text-gray-900 tw-cursor-pointer"
            onClick={closeModal}
          />
        </div>
      </DialogHeader>
      <DialogBody className="tw-mb-5">
        <TextEditor
          placeholder="Enter Terms & Conditions"
          content={content}
          handleChange={handleChange}
        />
      </DialogBody>
      <DialogFooter className="tw-flex tw-justify-end">
        <Button variant="gradient" onClick={handleSubmit} className="tw-w-full">
          <span>save</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

export default TermConditionUploads;
