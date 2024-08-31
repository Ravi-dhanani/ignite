import api from "../axiosInstance";

export async function userProfile() {
  return await api.get("/admin/user-profile");
}
