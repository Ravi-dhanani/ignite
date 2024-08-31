import { IFaqs, IPolicyInfo, ITenantDetail } from "@/types/orgDetail";
import api from "../axiosInstance";
import { IEvents } from "@/types/events";

export async function orgDetail() {
  return await api.get("/tenant/dashboard");
}

export async function orgDetailLogoUpdate(data: any) {
  return await api.post("/media/upload", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}

export async function orgDetailOtherInformationUpdate(data: IPolicyInfo) {
  return await api.put("/policy", data);
}

export async function deleteFaqs(id: string) {
  return await api.delete(`/faq/${id}`);
}
export async function addFaq(data: any) {
  return await api.post(`/faq`, data);
}
export async function updateFaq(data: IFaqs) {
  return await api.put(`/faq`, data);
}

export async function orgDetailDatesUpdate(data: ITenantDetail) {
  return await api.post("/tenant-detail", data);
}
