import { ResponseUser } from "@/types";
import { shimer, toBase64 } from "@/utils";
import Image from "next/image";
import Link from "next/link";

export default function ProfileUser({ datas }: { datas: ResponseUser }) {
  return (
    <div>
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
        />
      )}
      <div>
        <div>
          {datas.name && <h2>{datas.name}</h2>}
          {datas.login && datas.html_url && (
            <Link
              href={datas.html_url}
              target="_blank"
              rel="external"
              title="Url Profile"
              aria-label="Url Profile"
            >{`@${datas.login}`}</Link>
          )}
        </div>
        <p>{datas.bio ? datas.bio : "This Profile has no bio"}</p>
        <div>
          {datas.public_repos && (
            <p>
              <span>Repos</span>
              <span>{datas.public_repos}</span>
            </p>
          )}
          {datas.followers && (
            <p>
              <span>Followers</span>
              <span>{datas.followers}</span>
            </p>
          )}
          {datas.following && (
            <p>
              <span>Following</span>
              <span>{datas.following}</span>
            </p>
          )}
        </div>
        <div>
          {datas.location && <p>{datas.location}</p>}
          {datas.blog && (
            <Link
              href={datas.blog}
              target="_blank"
              rel="external"
              title="Url Blog"
              aria-label="Url Blog"
            >
              @Blog
            </Link>
          )}
          {datas.email && (
            <Link
              href={`mailto:${datas.email}`}
              target="_blank"
              rel="external"
              title="Email"
              aria-label="Email"
            >
              {datas.email}
            </Link>
          )}
          {datas.company && <p>{datas.company}</p>}
        </div>
      </div>
    </div>
  );
}
