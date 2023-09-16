import {  ErrorResponseUser, ResponseRepos, ResponseUser, ResponseUserNotFound} from "@/types";

export const BASE_URL = "https://api.github.com";

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

export async function fetcherUser(url: string, username: string) {
  const response = await fetch(url, {
    cache: "default"
  });

  if (!response.ok) {
    const responseError: ResponseUserNotFound = await response.json();
    const error: ErrorResponseUser = {
      message: "Failed to fetch datas user", info: responseError.message,
      name: ""
    };
    error.info = responseError.message;
    throw error;
  }

  const result: ResponseUser = await response.json();

  return result;
}

export async function fetcherRepos(url: string, username: string) {
  const response = await fetch(url, {
    cache: "default"
  });

  if (!response.ok) {
    throw new Error("Failed fetch repositories from user");
  }

  const result: ResponseRepos = await response.json();

  return result;
}