"use client";
import { SearchBar, ToggleTheme } from "../components";
import { useSelector } from "react-redux";
import Image from "next/image";

export default function Home() {
  const user = useSelector((state: any) => state.githubUser);
  return (
    <main className=" text-black dark:text-blue-700  flex flex-col w-[327px] m-6 ">
      <div className="flex flex-row w-full  justify-between">
        <h1>devfinder</h1>
        <ToggleTheme />
      </div>
      <SearchBar />
      <div className="h-[517px] bg-[var(--secondary-light)] dark:bg-[var(--secondary-dark)] rounded-2xl shadow-custom mt-5">
        <>
          {user.name && <h1>{user.name}</h1>}
          {user.avatar && (
            <Image src={user.avatar} alt={"avatar"} width={70} height={70} />
          )}
        </>
      </div>
    </main>
  );
}
