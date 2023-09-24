import Image from "next/image";
import { SearchBar, ToggleTheme } from "../components";

export default function Home() {
  return (
    <main className=" text-red-800 dark:text-blue-700">
      <ToggleTheme />
      <SearchBar />
    </main>
  );
}
