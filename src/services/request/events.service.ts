import { IEvents, ISession } from "@/types/events";
import api from "../axiosInstance";

export async function addEvent(data: IEvents) {
  return await api.post("/event", data);
}

export async function getEvents() {
  return await api.get("/event");
}

export async function addEventImages(data: any) {
  return await api.post("/media/upload", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}

export async function getEvent(id: string) {
  return await api.get(`/event/${id}`);
}

export async function addSession(data: ISession | any) {
  return await api.post(`/session`, data);
}

export async function getMasterData() {
  return await api.get("/master");
}
