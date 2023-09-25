"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import search from "../../assets/icon-search.svg";
import { useGetGithubUser } from "@/hooks/useGetGithubUser";

const SearchBar = () => {
  const [username, setUsername] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  const { data, isError, isLoading, refetch } = useGetGithubUser(username);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  const searchHandler = () => {
    refetch();
    console.log(data);
  };
  return (
    <div className="flex w-full h-[60px] bg-white dark:bg-[var(--secondary-dark)] rounded-2xl shadow-custom px-2 items-center mt-8 ">
      <Image
        src={search}
        alt="Search Icon"
        width={20}
        className="mr-2 h-auto"
      />
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className=" text-black dark:text-white placeholder:text-black dark:placeholder:text-white text-ellipsis w-full text-[0.813rem] focus:outline-none bg-white dark:bg-[var(--second)]"
        placeholder="Search GitHub username..."
      />
      <button
        className="bg-[--accent] text-white p-2 flex items-center rounded-xl w-[115px] h-[46px] justify-center text-[0.875rem] ml-1 hover:bg-[var(--accent-hover)]"
        onClick={searchHandler}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
