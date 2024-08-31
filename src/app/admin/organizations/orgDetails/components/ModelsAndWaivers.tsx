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
import { showToast } from "@/utils/toast";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
type Props = {
  open: boolean;
  closeModal: () => void;
  modelsAndWaivers: IPolicyInfo;
};

const ModelsAndWaivers = ({ open, closeModal, modelsAndWaivers }: Props) => {
  const mutation = useMutation({
    mutationFn: async (formData: any) => {
      try {
        const res: any = await orgDetailOtherInformationUpdate(formData);
        if (res?.success) {
          showToast("Model & Waivers updated successfully.", "success");
          closeModal();
        }
        return res;
      } catch (e) {
        showToast("Something went wrong. Please try again", "error");
      }
    },
  });
  const [content, setContent] = useState<string>(
    modelsAndWaivers?.content || ""
  );

  const handleChange = (event: any) => {
    setContent(event);
  };

  const handleSubmit = async () => {
    const data = {
      id: modelsAndWaivers?.id,
      name: modelsAndWaivers?.name,
      content,
      policyType: modelsAndWaivers?.name,
    };
    mutation.mutate(data);
  };

  return (
    <Dialog
      open={open}
      handler={closeModal}
      className={`tw-p-6 tw-max-h-[90vh] tw-overflow-auto`}
      size="lg"
    >
      <DialogHeader className="tw-mb-6">
        <div className="tw-flex tw-justify-between tw-items-center">
          <Typography className="!tw-font-bold !tw-text-2xl !tw-text-gray-900">
            Models & Waivers
          </Typography>
          <XMarkIcon
            className="tw-h-6 tw-w-6 tw-text-gray-900 tw-cursor-pointer"
            onClick={closeModal}
          />
        </div>
      </DialogHeader>
      <DialogBody className="tw-mb-5">
        <TextEditor
          placeholder="Enter Models & Waivers"
          handleChange={handleChange}
          content={content}
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

export default ModelsAndWaivers;
