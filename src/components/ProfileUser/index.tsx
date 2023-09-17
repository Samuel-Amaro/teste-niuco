import { ResponseUser } from "@/types";
import { shimer, toBase64 } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";

export default function ProfileUser({ datas }: { datas: ResponseUser }) {
  return (
    <div className={styles.container}>
      {datas.avatar_url && (
        <Image
          src={datas.avatar_url}
          alt="Image Avatar"
          width={360}
          height={360}
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimer(360, 360),
          )}`}
          className={styles.image}
        />
      )}
      <div>
        <div className={styles.containerText}>
          {datas.name && <h2 className={styles.name}>{datas.name}</h2>}
          {datas.login && datas.html_url && (
            <Link
              href={datas.html_url}
              target="_blank"
              rel="external"
              title="Url Profile"
              aria-label="Url Profile"
              className={styles.link}
            >{`@${datas.login}`}</Link>
          )}
        </div>
        <p className={styles.description}>
          {datas.bio ? datas.bio : "This Profile has no bio"}
        </p>
        <div className={styles.containerSocial}>
          {datas.public_repos && (
            <p className={styles.socialItem}>
              <span className={styles.socialItemInfo}>Repos</span>
              <span className={styles.socialItemValue}>
                {datas.public_repos}
              </span>
            </p>
          )}
          {datas.followers && (
            <p className={styles.socialItem}>
              <span className={styles.socialItemInfo}>Followers</span>
              <span className={styles.socialItemValue}>{datas.followers}</span>
            </p>
          )}
          {datas.following && (
            <p className={styles.socialItem}>
              <span className={styles.socialItemInfo}>Following</span>
              <span className={styles.socialItemValue}>{datas.following}</span>
            </p>
          )}
        </div>
        <div className={styles.datas}>
          {datas.location && (
            <div className={styles.containerData}>
              <p className={styles.containerDataInfo}>Location</p>
              <p className={styles.containerDataValue}>{datas.location}</p>
            </div>
          )}
          {datas.blog && (
            <div className={styles.containerData}>
              <p className={styles.containerDataInfo}>Blog</p>
              <Link
                href={datas.blog}
                target="_blank"
                rel="external"
                title="Url Blog"
                aria-label="Url Blog"
                className={styles.link}
              >
                @Blog
              </Link>
            </div>
          )}
          {datas.email && (
            <div className={styles.containerData}>
              <p className={styles.containerDataInfo}>Email</p>
              <Link
                href={`mailto:${datas.email}`}
                target="_blank"
                rel="external"
                title="Email"
                aria-label="Email"
                className={styles.link}
              >
                {datas.email}
              </Link>
            </div>
          )}
          {datas.company && (
            <div className={styles.containerData}>
              <p className={styles.containerDataInfo}>Company</p>
              <p className={styles.containerDataValue}>{datas.company}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
