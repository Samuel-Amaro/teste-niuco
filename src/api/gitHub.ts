import { ResponseUser } from "@/types";

const BASE_URL = "https://api.github.com/";

async function fetcher<TypeResponse>(url: string, messageError: string) {
  const response = await fetch(url, {
    cache: "no-store"
  });

  if (!response.ok) {
    throw new Error(messageError);
  }

  const result: TypeResponse = await response.json();

  return result;
}

export async function getUser(username: string) {
  const url = `${BASE_URL}/users/${username}`;
  return await fetcher<ResponseUser>(url, "Failed to fetch datas user");
}
