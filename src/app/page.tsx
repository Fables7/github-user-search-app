"use client";
import { SearchBar, ToggleTheme, UserDetails, LinkItems } from "../components";
import { useSelector } from "react-redux";
import Image from "next/image";

export default function Home() {
  const {
    name,
    avatar,
    username,
    userCreated,
    bio,
    repos,
    followers,
    following,
    location,
    blog,
    twitter,
    company,
  } = useSelector((state: any) => state.githubUser);
  return (
    <main className="flex flex-col w-[327px] m-6 ">
      <div className="flex flex-row w-full  justify-between">
        <h1>devfinder</h1>
        <ToggleTheme />
      </div>
      <SearchBar />
      <div className="min-h-[517px] bg-[var(--secondary-light)] dark:bg-[var(--secondary-dark)] rounded-2xl shadow-custom mt-5 p-4">
        {name ? (
          <>
            <div className="flex">
              <Image
                src={avatar}
                alt={"avatar"}
                width={70}
                height={70}
                className=" rounded-full"
              />
              <div className="ml-5">
                <h3>{name}</h3>
                <a
                  href={`https://github.com/${username}`}
                  className=" text-[var(--accent)]"
                >
                  @{username}
                </a>
                <p>
                  Joined{" "}
                  {new Date(userCreated).toLocaleDateString("en-UK", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>
            <p className=" mt-10">{bio || "No Bio found"}</p>
            <UserDetails
              following={following}
              repos={repos}
              followers={followers}
            />
            <LinkItems label={location} icon={"/icon-location"} />

            <LinkItems label={blog} icon={"/icon-website"} />
            <LinkItems label={twitter} icon={"/icon-twitter"} />
            <LinkItems label={company} icon={"/icon-company"} />
          </>
        ) : (
          <h1>Search for a user</h1>
        )}
      </div>
    </main>
  );
}
