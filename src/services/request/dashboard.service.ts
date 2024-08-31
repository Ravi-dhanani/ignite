import api from "@/services/axiosInstance";

export interface CreatePost {
  title: string;
  body: string;
}

export async function getPosts() {
  return await api.get("/posts");
}

export async function createPost(data: CreatePost) {
  return await api.post("/users", data);
}
