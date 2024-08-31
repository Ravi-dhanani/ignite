import { IForgetPasswords } from "@/app/forget-password/components/ForgetPasswordForm";
import axios from "axios";
import api from "../axiosInstance";

export async function Login(data: any) {
  return await api.post("/user/login/access-token", data);
}

export async function forgerPassword(data: IForgetPasswords) {
  return await axios.post(
    "https://iyh-api.eastus2.cloudapp.azure.com/user/forgot-password/request",
    data
  );
}

export async function verifyOTP(data: any) {
  return await axios.post(
    "https://iyh-api.eastus2.cloudapp.azure.com/user/forgot-password/verify",
    data
  );
}

export async function resetPassword(data: any) {
  return await axios.post(
    "https://iyh-api.eastus2.cloudapp.azure.com/user/forgot-password/reset",
    data
  );
}
