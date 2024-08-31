"use client";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Input,
  Textarea,
  Typography,
} from "@/components/MaterialTailwind";
import {
  addFaq,
  deleteFaqs,
  updateFaq,
} from "@/services/request/orgdetails.service";
import { IFaqs } from "@/types/orgDetail";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

type Props = {
  open: boolean;
  closeModal: () => void;
  faqsDetails: IFaqs[];
};

function generateRandomString(length: number = 8): string {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

const FaqsModal = ({ open, closeModal, faqsDetails }: Props) => {
  const [faqs, setFaqs] = useState<IFaqs[]>(faqsDetails || []);

  const handleAddFaq = () => {
    const newFaq = {
      id: generateRandomString(),
      question: "",
      answer: "",
      isNew: true,
    };
    setFaqs([...faqs, newFaq]);
  };

  const handleRemoveFaq = async (id: string) => {
    await deleteFaqs(id);
    setFaqs(faqs.filter((faq: IFaqs) => faq.id !== id));
  };

  const handleChange = async (
    id: string,
    field: "question" | "answer",
    value: string
  ) => {
    setFaqs(
      faqs.map((faq: IFaqs) =>
        faq.id === id ? { ...faq, [field]: value } : faq
      )
    );
  };

  const closeDialog = () => {
    closeModal();
  };

  const handleFaqs = async (faq: IFaqs) => {
    const data = {
      question: faq?.question,
      answer: faq?.answer,
    };

    const res: any = await addFaq(data);
    if (res.success) {
      setFaqs(
        faqs.map((item: IFaqs) =>
          item?.id === faq?.id
            ? { ...item, id: res?.data?.id, isNew: false }
            : item
        )
      );
    }
  };

  const handleUpdate = async (id: string) => {
    const updateFaqs = faqs.filter((faq: IFaqs) => faq?.id === id);

    delete updateFaqs[0]["isNew"];
    const data = {
      ...updateFaqs[0],
      isActive: true,
    };

    await updateFaq(data);
  };

  return (
    <>
      <Dialog
        open={open}
        handler={closeModal}
        size="md"
        className="tw-overflow-auto tw-max-h-[90vh]"
      >
        <DialogHeader className="tw-mb-6 tw-px-6 tw-pt-6">
          <div className="tw-flex tw-justify-between tw-items-center">
            <Typography className="!tw-font-bold !tw-text-2xl !tw-text-gray-900">
              FAQs
            </Typography>
            <XMarkIcon
              className="tw-h-6 tw-w-6 tw-text-gray-900 tw-cursor-pointer"
              onClick={closeDialog}
            />
          </div>
        </DialogHeader>
        <DialogBody className="tw-mb-3">
          <div>
            <div>
              {faqs &&
                faqs?.length > 0 &&
                faqs?.map((faq, index) => {
                  const isLast = index === faqs.length - 1;
                  return (
                    <div key={faq.id} className="tw-mb-4">
                      <div className="tw-p-6 tw-pb-2">
                        <div className="tw-mb-4">
                          <Input
                            type="text"
                            label="Enter Question"
                            value={faq.question}
                            onChange={(e) =>
                              handleChange(faq.id, "question", e.target.value)
                            }
                          />
                        </div>
                        <div>
                          <Textarea
                            label="Enter Answer"
                            className="!tw-min-h-[70px]"
                            rows={1}
                            value={faq.answer}
                            onChange={(e) =>
                              handleChange(faq.id, "answer", e.target.value)
                            }
                          />
                        </div>
                        <div className="tw-flex tw-items-center tw-justify-end tw-gap-3">
                          {!faq.isNew && (
                            <Typography
                              className="!tw-text-black tw-text-sm tw-font-medium tw-text-right tw-underline tw-cursor-pointer"
                              onClick={() => handleRemoveFaq(faq.id)}
                            >
                              Delete
                            </Typography>
                          )}
                          {faq?.isNew ? (
                            <Button
                              size="sm"
                              variant="outlined"
                              onClick={() => handleFaqs(faq)}
                            >
                              save
                            </Button>
                          ) : (
                            <Button
                              size="sm"
                              variant="outlined"
                              onClick={() => {
                                handleUpdate(faq.id);
                              }}
                            >
                              Update
                            </Button>
                          )}
                        </div>
                      </div>
                      {!isLast && (
                        <hr className="tw-mb-4 tw-bg-[#EDEDED] tw-h-1.5" />
                      )}
                    </div>
                  );
                })}
            </div>
          </div>
        </DialogBody>
        <DialogFooter className="tw-flex tw-justify-start tw-mt-3  tw-pb-6">
          <span
            className="tw-underline tw-text-black tw-text-sm tw-font-bold tw-cursor-pointer tw-inline-flex tw-items-center  tw-px-6"
            onClick={handleAddFaq}
          >
            + Add another question
          </span>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default FaqsModal;
