"use client";

import { BASE_URL, fetcherRepos, fetcherUser } from "@/api/gitHub";
import useSWR from "swr";
import ProfileUser from "../ProfileUser";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./styles.module.css";

export default function Searcher({
  username,
  pageIndex,
}: {
  username: string;
  pageIndex: number;
}) {
  const [totalRepos, setTotalRepos] = useState(0);
  return (
    <div className={styles.searcher}>
      <h2 className={styles.title}>Profile User</h2>
      <SearchUser
        username={username}
        setTotalRepos={(newTotal: number) => setTotalRepos(newTotal)}
      />
      <SearchRepos
        username={username}
        initialTotalRepos={totalRepos}
        pageIndex={pageIndex}
      />
    </div>
  );
}

function SearchUser({
  username,
  setTotalRepos,
}: {
  username: string;
  setTotalRepos: (newTotal: number) => void;
}) {
  const { data, error, isLoading } = useSWR(
    `${BASE_URL}/users/${username}`,
    fetcherUser,
  );

  useEffect(() => {
    if (data) {
      if (data.public_repos) setTotalRepos(data.public_repos);
    }
  }, [data]);

  if (isLoading) {
    return <p className={styles.messageUser}>Loading Profile User...</p>;
  }

  if (!data) {
    return <p className={styles.messageUser}>Oops, {error?.info} user 😥</p>;
  }

  return <ProfileUser datas={data} />;
}

function SearchRepos({
  username,
  initialTotalRepos,
  pageIndex,
}: {
  username: string;
  initialTotalRepos: number;
  pageIndex: number;
}) {
  const router = useRouter();
  const pageCount = Math.ceil(initialTotalRepos / 30);
  const { data, isLoading } = useSWR(
    `${BASE_URL}/users/${username}/repos?page=${pageIndex}`,
    fetcherRepos,
  );

  function updateSearchParams(pageIndex: string) {
    const searchParams = new URLSearchParams(window.location.search);

    if (pageIndex) {
      searchParams.set("page", pageIndex);
    } else {
      searchParams.delete("page");
    }

    const newPathName = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathName, { scroll: false });
  }

  if (isLoading) {
    return <p className={styles.messageUser}>Loading Repositories User...</p>;
  }

  if (!data) {
    return (
      <p className={styles.messageUser}>Oops, not found repositories 😥</p>
    );
  }

  function nextPageIndex() {
    if (pageIndex < pageCount) {
      const newIndex = pageIndex + 1;
      updateSearchParams(newIndex.toString());
    }
  }

  function previousPageIndex() {
    if (pageIndex > 1) {
      const newIndex = pageIndex - 1;
      updateSearchParams(newIndex.toString());
    }
  }

  return (
    <div className={styles.containerRepos}>
      <h2 className={styles.containerReposTitle}>Repositories</h2>
      <div className={styles.containerListRepos}>
        {data.map((repos, index) => (
          <div
            key={repos.id ? repos.id : index}
            className={styles.containerReposCard}
          >
            <span className={styles.containerReposCardIcon}>📁</span>
            {repos.name && (
              <h3 className={styles.containerReposCardTitle}>{repos.name}</h3>
            )}
            {repos.description && (
              <p className={styles.containerReposCardDescription}>
                {repos.description}
              </p>
            )}
            <div className={styles.containerLinks}>
              {repos.html_url && (
                <Link
                  href={repos.html_url}
                  target="_blank"
                  rel="external"
                  aria-label="Url to repositorie"
                  title="Url to repositorie"
                  className={styles.containerReposLink}
                >
                  Url
                </Link>
              )}
              {repos.homepage && (
                <Link
                  href={repos.homepage}
                  target="_blank"
                  rel="external"
                  aria-label="HomePage"
                  title="HomePage"
                  className={styles.containerReposLink}
                >
                  HomePage
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className={styles.containerButtons}>
        <button
          type="button"
          aria-label="Previous"
          title="Previous"
          onClick={() => {
            previousPageIndex();
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              previousPageIndex();
            }
          }}
          disabled={pageIndex === 1}
          className={styles.btn}
        >
          Previous
        </button>
        <button
          type="button"
          aria-label="Next"
          title="Next"
          onClick={() => {
            nextPageIndex();
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              nextPageIndex();
            }
          }}
          disabled={pageIndex === pageCount}
          className={styles.btn}
        >
          Next
        </button>
      </div>
    </div>
  );
}
