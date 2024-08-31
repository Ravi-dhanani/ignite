"use client";

import { forgerPassword, verifyOTP } from "@/services/request/login.service";
import { showToast } from "@/utils/toast";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Input, Spinner, Typography } from "@material-tailwind/react";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as yup from "yup";

type FormData = {
  otp: number;
};

const schema = yup
  .object({
    otp: yup
      .number()
      .typeError("Please enter OTP")
      .required("Please enter OTP"),
  })
  .required();

export default function SendOTPForm() {
  const router = useRouter();
  const email = localStorage.getItem("reset-pass-email");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const mutation = useMutation({
    mutationFn: async (data: FormData) => {
      try {
        if (email) {
          const res: any = await verifyOTP({
            email: email,
            otp: data?.otp?.toString(),
          });
          if (res?.data?.success === true) {
            showToast("OTP verify successfully.", "success");
            localStorage.setItem(
              "verificationId",
              res?.data?.data?.verificationId
            );

            router.push("/reset-password");
          }
        }
      } catch (err) {
        showToast("Something want wrong. Please try again", "error");
      }
    },
  });

  const onSubmit = async (data: FormData | any) => {
    mutation.mutate(data);
  };

  const handleResendOTP = async () => {
    try {
      const res: any = await forgerPassword({
        email: email ? email : "",
      });
      if (res?.data?.success === true) {
        showToast("OTP send successfully", "success");
      }
    } catch (err) {}
  };
  return (
    <div className="tw-mt-0 tw-mx-4 tw-w-[80%] md:tw-w-96">
      <div className="tw-flex tw-items-center tw-mt-3">
        <div>
          <ArrowLeftIcon
            className="tw-h-5 tw-w-5 tw-cursor-pointer tw-text-black  tw-font-black"
            onClick={() => router.push("/forget-password")}
          />
        </div>

        <div className="tw-ml-3">
          <Typography variant="h4">Enter OTP</Typography>
        </div>
      </div>
      <div className="tw-mt-2">
        <span className="tw-text-sm tw-text-gray-500">
          A OTP is sent to your email address
        </span>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="tw-mt-3 tw-w-full">
          <label
            htmlFor="event-name"
            className="tw-block tw-text-sm tw-font-medium tw-text-blue-gray-900 tw-mb-2"
          >
            OTP
          </label>
          <Input
            placeholder="Enter OTP"
            type="number"
            className={`!tw-border focus:!tw-border-2 ${
              errors.otp
                ? "tw-border-red-500 focus:!tw-border-red-500 focus:tw-ring-gray-900/10"
                : "!tw-border-gray-300 focus:!tw-border-gray-900 focus:tw-ring-gray-900/10"
            } tw-bg-white tw-text-gray-900 tw-shadow-lg tw-shadow-gray-900/5 placeholder:tw-text-gray-500 placeholder:!tw-opacity-100 `}
            {...register("otp")}
            error={errors.otp ? true : false}
            labelProps={{
              className: "tw-hidden",
            }}
            containerProps={{ className: "min-w-[100px]" }}
          />
          {errors.otp && (
            <span className="mt-2 flex items-center tw-text-sm tw-text-red-500 gap-1 font-normal">
              {errors?.otp?.message}
            </span>
          )}
        </div>
        <div
          className={`${
            errors.otp ? "tw-mt-0" : "tw-mt-3"
          } tw-flex tw-justify-end`}
        >
          <span
            onClick={handleResendOTP}
            className="tw-text-sm tw-font-medium tw-uppercase tw-cursor-pointer hover:tw-underline"
          >
            Resend
          </span>
        </div>
        <div className="tw-mt-3">
          <Button
            type="submit"
            fullWidth
            disabled={mutation.isPending}
            className="tw-flex tw-flex-row tw-justify-center tw-items-center tw-gap-4"
          >
            {mutation.isPending && (
              <div className="tw-text-gray-300 tw-animate-spin tw-w-4 tw-h-4">
                <Spinner className="tw-h-4 tw-w-4" />
              </div>
            )}
            verify otp
          </Button>
        </div>
      </form>
    </div>
  );
}
