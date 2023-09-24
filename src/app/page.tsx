import Image from "next/image";
import { SearchBar, ToggleTheme } from "../components";

export default function Home() {
  return (
    <main className=" text-black dark:text-blue-700">
      hello world
      <h1>The Octocat</h1>
      <h2>The Octocat</h2>
      <ToggleTheme />
      <SearchBar />
    </main>
  );
}
