import { SearchBar, ToggleTheme } from "../components";

export default function Home() {
  return (
    <main className=" text-black dark:text-blue-700  flex flex-col w-[327px] m-6 ">
      <div className="flex flex-row w-full  justify-between">
        <h1>devfinder</h1>
        <ToggleTheme />
      </div>
      <SearchBar />
    </main>
  );
}
