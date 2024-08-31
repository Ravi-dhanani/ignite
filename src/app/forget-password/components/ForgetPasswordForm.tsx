"use client";

import { forgerPassword } from "@/services/request/login.service";
import { showToast } from "@/utils/toast";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Input, Spinner, Typography } from "@material-tailwind/react";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as yup from "yup";

export interface IForgetPasswords {
  email: string;
}

const schema = yup
  .object({
    email: yup
      .string()
      .required("Email is required")
      .email("Please enter a valid email address"),
  })
  .required();

export default function ForgetPasswordForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForgetPasswords>({
    resolver: yupResolver(schema),
  });

  const mutation = useMutation({
    mutationFn: async (data: IForgetPasswords) => {
      try {
        const res: any = await forgerPassword(data);

        if (res?.data?.success) {
          showToast("OTP sent successfully.", "success");
          localStorage.setItem("reset-pass-email", data.email);
          router.push("/send-otp");
        }
      } catch (err) {
        showToast("Something want wrong. Please try again", "error");
      }
    },
  });

  const onSubmit = async (data: IForgetPasswords) => {
    mutation.mutate(data);
  };

  return (
    <div className="tw-mt-0 tw-mx-4 tw-w-[80%] md:tw-w-96">
      <div className="tw-flex tw-items-center tw-mt-3">
        <div>
          <ArrowLeftIcon
            className="tw-h-5 tw-w-5 tw-cursor-pointer tw-text-black  tw-font-black"
            onClick={() => router.push("/login")}
          />
        </div>

        <div className="tw-ml-3">
          <Typography variant="h4">Forgot Password</Typography>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="tw-mt-3 tw-w-full ">
          <label
            htmlFor="event-name"
            className="tw-block tw-text-sm tw-font-medium tw-text-blue-gray-900 tw-mb-2"
          >
            Your email
          </label>
          <Input
            placeholder="Enter email address"
            className={`!tw-border focus:!tw-border-2 ${
              errors.email
                ? "tw-border-red-500 focus:!tw-border-red-500 focus:tw-ring-gray-900/10"
                : "!tw-border-gray-300 focus:!tw-border-gray-900 focus:tw-ring-gray-900/10"
            } tw-bg-white tw-text-gray-900 tw-shadow-lg tw-shadow-gray-900/5 placeholder:tw-text-gray-500 placeholder:!tw-opacity-100 `}
            {...register("email")}
            error={errors.email ? true : false}
            labelProps={{
              className: "tw-hidden",
            }}
            containerProps={{ className: "min-w-[100px]" }}
          />
          {errors.email && (
            <span className="mt-2 flex items-center tw-text-sm tw-text-red-500 gap-1 font-normal">
              {errors?.email?.message}
            </span>
          )}
        </div>
        <div className="tw-mt-6">
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
            Send otp
          </Button>
        </div>
      </form>
    </div>
  );
}
