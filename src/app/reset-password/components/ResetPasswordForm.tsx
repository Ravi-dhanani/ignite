"use client";

import { resetPassword } from "@/services/request/login.service";
import { showToast } from "@/utils/toast";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Input, Spinner, Typography } from "@material-tailwind/react";
import { useMutation } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as yup from "yup";

type FormData = {
  password: string;
};

const schema = yup
  .object({
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/[0-9]/, "Password must contain at least one numeric character")
      .matches(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Password must contain at least one special character"
      ),
  })
  .required();

const ValidationFeedback = ({ valid, message }: any) => {
  return (
    <div className="tw-flex tw-items-center tw-my-2 tw-gap-2">
      {valid ? (
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.73357 1.27302C4.29643 1.22808 4.83076 1.0067 5.26047 0.640388C5.74581 0.227024 6.36249 0 7 0C7.63751 0 8.25419 0.227024 8.73953 0.640388C9.16924 1.0067 9.70357 1.22808 10.2664 1.27302C10.9021 1.32382 11.4988 1.59937 11.9497 2.05027C12.4006 2.50117 12.6762 3.09793 12.727 3.73357C12.7716 4.2962 12.993 4.83084 13.3596 5.26047C13.773 5.74581 14 6.36249 14 7C14 7.63751 13.773 8.25419 13.3596 8.73953C12.9933 9.16924 12.7719 9.70357 12.727 10.2664C12.6762 10.9021 12.4006 11.4988 11.9497 11.9497C11.4988 12.4006 10.9021 12.6762 10.2664 12.727C9.70357 12.7719 9.16924 12.9933 8.73953 13.3596C8.25419 13.773 7.63751 14 7 14C6.36249 14 5.74581 13.773 5.26047 13.3596C4.83076 12.9933 4.29643 12.7719 3.73357 12.727C3.09793 12.6762 2.50117 12.4006 2.05027 11.9497C1.59937 11.4988 1.32382 10.9021 1.27302 10.2664C1.22808 9.70357 1.0067 9.16924 0.640388 8.73953C0.227024 8.25419 0 7.63751 0 7C0 6.36249 0.227024 5.74581 0.640388 5.26047C1.0067 4.83076 1.22808 4.29643 1.27302 3.73357C1.32382 3.09793 1.59937 2.50117 2.05027 2.05027C2.50117 1.59937 3.09793 1.32382 3.73357 1.27302ZM10.2437 5.86861C10.4031 5.70358 10.4913 5.48255 10.4893 5.25312C10.4873 5.02369 10.3953 4.80423 10.233 4.64199C10.0708 4.47976 9.85132 4.38773 9.6219 4.38574C9.39247 4.38375 9.17144 4.47194 9.00641 4.63133L6.12498 7.51276L4.99359 6.38136C4.82856 6.22197 4.60753 6.13378 4.3781 6.13577C4.14868 6.13776 3.92921 6.22979 3.76698 6.39202C3.60474 6.55426 3.51272 6.77372 3.51072 7.00315C3.50873 7.23258 3.59693 7.45361 3.75632 7.61864L5.50635 9.36867C5.67044 9.53271 5.89296 9.62486 6.12498 9.62486C6.35701 9.62486 6.57953 9.53271 6.74362 9.36867L10.2437 5.86861Z"
            fill="green"
          />
        </svg>
      ) : (
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.73357 1.27302C4.29643 1.22808 4.83076 1.0067 5.26047 0.640388C5.74581 0.227024 6.36249 0 7 0C7.63751 0 8.25419 0.227024 8.73953 0.640388C9.16924 1.0067 9.70357 1.22808 10.2664 1.27302C10.9021 1.32382 11.4988 1.59937 11.9497 2.05027C12.4006 2.50117 12.6762 3.09793 12.727 3.73357C12.7716 4.2962 12.993 4.83084 13.3596 5.26047C13.773 5.74581 14 6.36249 14 7C14 7.63751 13.773 8.25419 13.3596 8.73953C12.9933 9.16924 12.7719 9.70357 12.727 10.2664C12.6762 10.9021 12.4006 11.4988 11.9497 11.9497C11.4988 12.4006 10.9021 12.6762 10.2664 12.727C9.70357 12.7719 9.16924 12.9933 8.73953 13.3596C8.25419 13.773 7.63751 14 7 14C6.36249 14 5.74581 13.773 5.26047 13.3596C4.83076 12.9933 4.29643 12.7719 3.73357 12.727C3.09793 12.6762 2.50117 12.4006 2.05027 11.9497C1.59937 11.4988 1.32382 10.9021 1.27302 10.2664C1.22808 9.70357 1.0067 9.16924 0.640388 8.73953C0.227024 8.25419 0 7.63751 0 7C0 6.36249 0.227024 5.74581 0.640388 5.26047C1.0067 4.83076 1.22808 4.29643 1.27302 3.73357C1.32382 3.09793 1.59937 2.50117 2.05027 2.05027C2.50117 1.59937 3.09793 1.32382 3.73357 1.27302ZM10.2437 5.86861C10.4031 5.70358 10.4913 5.48255 10.4893 5.25312C10.4873 5.02369 10.3953 4.80423 10.233 4.64199C10.0708 4.47976 9.85132 4.38773 9.6219 4.38574C9.39247 4.38375 9.17144 4.47194 9.00641 4.63133L6.12498 7.51276L4.99359 6.38136C4.82856 6.22197 4.60753 6.13378 4.3781 6.13577C4.14868 6.13776 3.92921 6.22979 3.76698 6.39202C3.60474 6.55426 3.51272 6.77372 3.51072 7.00315C3.50873 7.23258 3.59693 7.45361 3.75632 7.61864L5.50635 9.36867C5.67044 9.53271 5.89296 9.62486 6.12498 9.62486C6.35701 9.62486 6.57953 9.53271 6.74362 9.36867L10.2437 5.86861Z"
            fill="#D9D9D9"
          />
        </svg>
      )}
      <span
        className={
          valid ? "tw-text-sm tw-text-black" : "tw-text-sm tw-text-[#8F8FA5]"
        }
      >
        {message}
      </span>
    </div>
  );
};

export default function ResetPasswordForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const passwordValue = watch("password", "");

  const isMinLengthValid = passwordValue.length >= 8;
  const hasUppercase = /[A-Z]/.test(passwordValue);
  const hasLowercase = /[a-z]/.test(passwordValue);
  const hasNumeric = /[0-9]/.test(passwordValue);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(passwordValue);

  const mutation = useMutation({
    mutationFn: async (data: FormData) => {
      try {
        const email = localStorage.getItem("reset-pass-email");
        const verificationId = localStorage.getItem("verificationId");

        if (email && verificationId) {
          const res: any = await resetPassword({
            verificationId: verificationId,
            email: email,
            password: data?.password,
          });

          if (res?.data?.success) {
            showToast("Password changed successfully.", "success");

            const accessToken = res?.data?.data?.access_token;
            const refresh_token = res?.data?.data?.refresh_token;

            Cookies.set("accessToken", accessToken, {
              expires: 1 / 24,
            });

            Cookies.set("refresh_token", refresh_token);

            router.push("/admin/organizations/orgDetails");
            localStorage.removeItem("reset-pass-email");
            localStorage.removeItem("verificationId");
          }
        }
      } catch (err) {
        showToast("Something want wrong. Please try again", "error");
      }
    },
  });

  const onSubmit = async (data: FormData) => {
    mutation.mutate(data);
  };

  return (
    <div className="tw-mt-0 tw-mx-4 tw-w-[80%] md:tw-w-96">
      <div className="tw-flex tw-items-center tw-mt-3">
        <div>
          <ArrowLeftIcon
            className="tw-h-5 tw-w-5 tw-cursor-pointer tw-text-black  tw-font-black"
            onClick={() => router.push(`/send-otp`)}
          />
        </div>

        <div className="tw-ml-3">
          <Typography variant="h4">Reset Password</Typography>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="tw-mt-3 tw-w-full">
          <label
            htmlFor="event-name"
            className="tw-block tw-text-sm tw-font-medium tw-text-blue-gray-900 tw-mb-2"
          >
            Password
          </label>
          <Input
            placeholder="Enter new password"
            className={`!tw-border focus:!tw-border-2 ${
              errors.password
                ? "tw-border-red-500 focus:!tw-border-red-500 focus:tw-ring-gray-900/10"
                : "!tw-border-gray-300 focus:!tw-border-gray-900 focus:tw-ring-gray-900/10"
            } tw-bg-white tw-text-gray-900 tw-shadow-lg tw-shadow-gray-900/5 placeholder:tw-text-gray-500 placeholder:!tw-opacity-100 `}
            {...register("password")}
            error={errors.password ? true : false}
            labelProps={{
              className: "tw-hidden",
            }}
            containerProps={{ className: "min-w-[100px]" }}
          />
          {errors.password && (
            <span className="mt-2 flex items-center tw-text-sm tw-text-red-500 gap-1 font-normal">
              {errors?.password?.message}
            </span>
          )}
        </div>

        <div className="tw-mt-5">
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
            submit
          </Button>
        </div>
      </form>
      <div className="tw-mt-5">
        <ValidationFeedback
          valid={isMinLengthValid}
          message="At least 8 characters"
        />
        <ValidationFeedback
          valid={hasUppercase}
          message="At least 1 uppercase letter"
        />
        <ValidationFeedback
          valid={hasLowercase}
          message="At least 1 lowercase letter"
        />
        <ValidationFeedback
          valid={hasNumeric}
          message="At least 1 numeric character"
        />
        <ValidationFeedback
          valid={hasSpecialChar}
          message="At least 1 special character"
        />
      </div>
    </div>
  );
}
