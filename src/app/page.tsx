"use client";
import { SearchBar, ToggleTheme } from "../components";
import { useSelector } from "react-redux";

export default function Home() {
  const user = useSelector((state: any) => state.githubUser);
  return (
    <main className=" text-black dark:text-blue-700  flex flex-col w-[327px] m-6 ">
      <div className="flex flex-row w-full  justify-between">
        <h1>devfinder</h1>
        <ToggleTheme />
      </div>
      <SearchBar />
      {user.name && <h1>{user.name}</h1>}
    </main>
  );
}
