"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import search from "../../assets/icon-search.svg";
import { useGetGithubUser } from "@/hooks/useGetGithubUser";

const SearchBar = () => {
  const [username, setUsername] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  const { isError, isLoading, refetch } = useGetGithubUser(username);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  const searchHandler = () => {
    if (username === "") return;
    refetch();
  };
  return (
    <div className="flex w-full h-[60px] md:h-[69px] bg-white dark:bg-[var(--secondary-dark)] rounded-2xl shadow-custom pr-2 pl-4 md:pl-8 items-center mt-8 ">
      <Image
        src={search}
        alt="Search Icon"
        width={20}
        className="mr-2 md:mr-5 h-auto md:w-[24px]"
      />
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className=" text-black dark:text-white placeholder:text-[var(--blue-gray)] dark:placeholder:text-white text-ellipsis w-full text-[0.813rem] md:text-[1.125rem] focus:outline-none bg-white dark:bg-[var(--second)]"
        placeholder="Search GitHub username..."
      />
      {isError && (
        <p className=" min-w-fit dark:text-red-500 text-red-500 mx-4">
          No Results
        </p>
      )}
      <button
        className="bg-[--accent] text-white p-2 flex items-center rounded-xl min-w-[84px] md:min-w-[106px] h-[46px] justify-center text-[0.875rem] md:text-base ml-1 hover:bg-[var(--accent-hover)]"
        onClick={searchHandler}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
