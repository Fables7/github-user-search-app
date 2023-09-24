import Image from "next/image";
import search from "../../assets/icon-search.svg";

const SearchBar = () => {
  return (
    <div className="flex w-full h-[60px] bg-white dark:bg-[var(--secondary-dark)] rounded-2xl shadow-custom px-2 items-center mt-8 ">
      <Image
        src={search}
        alt="Search Icon"
        width={20}
        height={20}
        className="mr-2"
      />
      <input
        type="text"
        className=" placeholder:text-black dark:placeholder:text-white text-ellipsis w-full text-[0.813rem] focus:outline-none bg-white dark:bg-[var(--second)]"
        placeholder="Search GitHub username..."
      />
      <button className="bg-[--accent] text-white p-2 flex items-center rounded-xl w-[115px] h-[46px] justify-center text-[0.875rem] ml-1 hover:bg-[var(--accent-hover)]">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
