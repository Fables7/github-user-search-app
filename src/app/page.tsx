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
    <main className="flex flex-col w-[327px] md:w-[573px] m-6 ">
      <div className="flex flex-row w-full  justify-between">
        <h1>devfinder</h1>
        <ToggleTheme />
      </div>
      <SearchBar />
      <div className="min-h-[517px] md:min-h-[481px] bg-[var(--secondary-light)] dark:bg-[var(--secondary-dark)] rounded-2xl shadow-custom mt-5 p-4 md:p-8">
        {name ? (
          <>
            <div className="flex items-center">
              <Image
                src={avatar}
                alt={"avatar"}
                width={70}
                height={70}
                className=" rounded-full md:h-[117px] md:w-[117px]"
              />
              <div className="ml-5 md:ml-11">
                <h3>{name}</h3>
                <a
                  href={`https://github.com/${username}`}
                  className=" text-[var(--accent)] md:text-base"
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
            <div className="md:grid md:grid-cols-2 md:grid-rows-2">
              <LinkItems
                style="col-start-1 row-start-1"
                label={location}
                icon={"/icon-location"}
              />
              <LinkItems
                style={"col-start-1 row-start-2"}
                label={blog}
                icon={"/icon-website"}
              />
              <LinkItems
                style={"col-start-2 row-start-1"}
                label={twitter}
                icon={"/icon-twitter"}
              />
              <LinkItems
                style={"row-start-2"}
                label={company}
                icon={"/icon-company"}
              />
            </div>
          </>
        ) : (
          <h1>Search for a user</h1>
        )}
      </div>
    </main>
  );
}
