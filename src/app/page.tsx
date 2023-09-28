"use client";
import { SearchBar, ToggleTheme, UserDetails, LinkItems } from "../components";
import { useSelector } from "react-redux";
import Image from "next/image";
import clsx from "clsx";

interface UserHeaderProps {
  name: string;
  username: string;
  userCreated: string;
  className?: string;
}

const UserHeader = ({
  name,
  username,
  userCreated,
  className,
}: UserHeaderProps) => {
  const joined = new Date(userCreated).toLocaleDateString("en-UK", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
  const rootClassName = clsx("ml-5 md:ml-11 lg:ml-0", className);
  return (
    <div className={rootClassName}>
      <div className="flex items-center justify-between">
        <h3>{name}</h3>
        <p className="md:hidden lg:inline">Joined {joined}</p>
      </div>
      <a
        href={`https://github.com/${username}`}
        className=" text-[var(--accent)] md:text-base"
      >
        @{username}
      </a>
      <p className="lg:hidden">Joined {joined}</p>
    </div>
  );
};

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
    id,
  } = useSelector((state: any) => state.githubUser);
  return (
    <main className="flex flex-col w-[327px] md:w-[573px] lg:w-[730px] m-6 md:mt-20">
      <div className="flex flex-row w-full  justify-between">
        <h1>devfinder</h1>
        <ToggleTheme />
      </div>
      <SearchBar />
      <div className="min-h-[517px] md:min-h-[481px] lg:min-h-[419px] bg-[var(--secondary-light)] dark:bg-[var(--secondary-dark)] rounded-2xl shadow-custom mt-5 p-4 md:p-8 flex flex-col lg:flex-row">
        {id ? (
          <>
            <div className="flex items-center lg:items-start">
              <Image
                src={avatar}
                alt={"avatar"}
                width={70}
                height={70}
                className=" rounded-full md:h-[117px] md:w-[117px]"
              />
              <UserHeader
                className={"lg:hidden"}
                name={name}
                username={username}
                userCreated={userCreated}
              />
            </div>
            <div className="lg:ml-10">
              <UserHeader
                className={"hidden lg:inline"}
                name={name}
                username={username}
                userCreated={userCreated}
              />
              <p className=" mt-10 lg:mt-5">{bio || "No Bio found"}</p>
              <UserDetails
                following={following}
                repos={repos}
                followers={followers}
              />
              <div className="md:grid md:grid-cols-2 md:grid-rows-2">
                <LinkItems
                  className="md:col-start-1 row-start-1"
                  label={location}
                  icon={"/icon-location"}
                />
                <LinkItems
                  className={"md:col-start-1 row-start-2"}
                  label={blog}
                  icon={"/icon-website"}
                />
                <LinkItems
                  className={"md:col-start-2 row-start-1"}
                  label={twitter}
                  icon={"/icon-twitter"}
                />
                <LinkItems
                  className={"md:row-start-2"}
                  label={company}
                  icon={"/icon-company"}
                />
              </div>
            </div>
          </>
        ) : (
          <h1>Search for a user</h1>
        )}
      </div>
    </main>
  );
}
