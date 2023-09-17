"use client";

import { useHistoricContext } from "@/context/HistoricContext";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./styles.module.css";

export default function Form({ initialValue }: { initialValue?: string }) {
  const [username, setUsername] = useState(
    initialValue?.trim() ? initialValue : "",
  );
  const router = useRouter();
  const historicContext = useHistoricContext();

  function handleChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
    setUsername(e.target.value);
  }

  function handleSubmitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (username.trim()) {
      updateSearchParams(username.trim());
      historicContext.addHistoric(username.trim());
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
    <form onSubmit={handleSubmitForm} className={styles.form}>
      <input
        type="search"
        title="Enter a username"
        aria-label="Enter a username"
        name="username"
        placeholder="Search GitHub username"
        value={username}
        onChange={handleChangeInput}
        required
        className={styles.input}
      />
      <button type="submit" aria-label="Search" title="Search" className={styles.btn}>
        Search
      </button>
    </form>
  );
}
