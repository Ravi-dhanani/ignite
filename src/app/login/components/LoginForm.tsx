"use client";

import { userProfile } from "@/services/request/user-profile.service";
import { showToast } from "@/utils/toast";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Input, Spinner, Typography } from "@material-tailwind/react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Cookies from "js-cookie";
import { redirect, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

type FormData = {
  username: string;
  password: string;
};

const schema = yup
  .object({
    username: yup.string().required("Username is required field"),
    password: yup.string().required("Password is required field"),
  })
  .required();

export default function LoginForm() {
  const router = useRouter();

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
        const response = await axios.post(
          "https://iyh-api.eastus2.cloudapp.azure.com/user/login/access-token",
          data
        );

        const accessToken = response?.data?.data?.access_token;
        const refresh_token = response?.data?.data?.refresh_token;

        Cookies.set("accessToken", accessToken, {
          expires: 1 / 24,
        });

        Cookies.set("refresh_token", refresh_token);

        if (response?.data?.success) {
          showToast("Sign in successfull!", "success");

          const res = await userProfile();
          if (res.data?.userDetails?.Role === "Admin") {
            router.push("/admin/organizations/orgDetails");
          }
        }

        return response;
      } catch (error) {
        showToast("Something went wrong. Please try again", "error");
      }
    },
  });

  const onSubmit = async (data: FormData) => {
    mutation.mutate(data);
  };

  useEffect(() => {
    const isLogin = Cookies.get("accessToken");
    if (isLogin) {
      redirect("/admin/organizations/orgDetails");
    }
  }, []);

  return (
    <div className="tw-mt-0 tw-mx-4 tw-w-[80%] md:tw-w-96">
      <Typography variant="h4">Sign In</Typography>
      <span className="tw-text-sm tw-text-gray-500">
        Enter your email and password to Sign In.
      </span>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="tw-my-3 tw-w-full">
          <label
            htmlFor="event-name"
            className="tw-block tw-text-sm tw-font-medium tw-text-blue-gray-900 tw-mb-2"
          >
            Your email
          </label>
          <Input
            placeholder="Enter email address"
            className={`!tw-border focus:!tw-border-2 ${
              errors.username
                ? "tw-border-red-500 focus:!tw-border-red-500 focus:tw-ring-gray-900/10"
                : "!tw-border-gray-300 focus:!tw-border-gray-900 focus:tw-ring-gray-900/10"
            } tw-bg-white tw-text-gray-900 tw-shadow-lg tw-shadow-gray-900/5 placeholder:tw-text-gray-500 placeholder:!tw-opacity-100 `}
            type="email"
            {...register("username")}
            error={errors.username ? true : false}
            labelProps={{
              className: "tw-hidden",
            }}
            containerProps={{ className: "min-w-[100px]" }}
          />
          {errors.username && (
            <span className="mt-2 flex items-center tw-text-sm tw-text-red-500 gap-1 font-normal">
              {errors?.username?.message}
            </span>
          )}
        </div>

        <div className="tw-mt-5 tw-w-full">
          <label
            htmlFor="event-name"
            className="tw-block tw-text-sm tw-font-medium tw-text-blue-gray-900 tw-mb-2"
          >
            Password
          </label>
          <Input
            placeholder="Enter Password"
            className={`!tw-border focus:!tw-border-2 ${
              errors.password
                ? "tw-border-red-500 focus:!tw-border-red-500 focus:tw-ring-gray-900/10"
                : "!tw-border-gray-300 focus:!tw-border-gray-900 focus:tw-ring-gray-900/10"
            } tw-bg-white tw-text-gray-900 tw-shadow-lg tw-shadow-gray-900/5 placeholder:tw-text-gray-500 placeholder:!tw-opacity-100 `}
            type="password"
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
        <div className="tw-my-5 tw-flex tw-justify-end">
          <span
            className="tw-text-sm tw-font-medium tw-cursor-pointer hover:tw-underline"
            onClick={() => router.push("/forget-password")}
          >
            Forgot Password
          </span>
        </div>
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
          Sign In
        </Button>
      </form>
    </div>
  );
}
