import { http } from "services/api";
import type { IExampleData, IExampleResponse } from "types";

export const getExampleData = async () => {
  const data = await http.get<IExampleResponse>("example");
  return data.data;
};

export const postExampleData = async (
  title: string,
  content: string,
  image: File,
) => {
  const data = await http.post<IExampleResponse, IExampleData>(
    "example",
    {
      title,
      content,
      image,
    },
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    },
  );
  return data.data;
};

export const putExampleData = async () => {
  const data = await http.put<IExampleResponse>("example");
  return data.data;
};
export const patchExampleData = async () => {
  const data = await http.patch<IExampleResponse>("example");
  return data.data;
};
export const deleteExampleData = async (id: string) => {
  const data = await http.delete<IExampleResponse>(`example/${id}`);
  return data.data;
};
