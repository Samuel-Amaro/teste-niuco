"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Form({ initialValue }: { initialValue?: string }) {
  const [username, setUsername] = useState(
    initialValue?.trim() ? initialValue : "",
  );
  const router = useRouter();

  function handleChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
    setUsername(e.target.value);
  }

  function handleSubmitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (username.trim()) {
      updateSearchParams(username.trim());
      return;
    }
    alert("Please enter a username");
  }

  function updateSearchParams(username: string) {
    const searchParams = new URLSearchParams(window.location.search);

    if (username) {
      searchParams.set("q", username);
    } else {
      searchParams.delete("q");
    }

    const newPathName = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathName, { scroll: false });
  }

  return (
    <form onSubmit={handleSubmitForm}>
      <input
        type="search"
        title="Enter a username"
        aria-label="Enter a username"
        name="username"
        placeholder="Search GitHub username"
        value={username}
        onChange={handleChangeInput}
        required
      />
      <button type="submit" aria-label="Search" title="Search">
        Search
      </button>
      {username && `username: ${username}`}
    </form>
  );
}
