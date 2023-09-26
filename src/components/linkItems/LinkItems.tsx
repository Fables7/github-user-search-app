import Image from "next/image";
import { useTheme } from "next-themes";

interface LinkItemsProps {
  label: string;
  icon: string;
  style?: string;
}

const LinkItems = ({ icon, label, style }: LinkItemsProps) => {
  const { theme } = useTheme();
  const link = String(label).includes("http");
  return (
    <div
      className={`flex items-center my-3 opacity-[${
        label ? 1 : 0.5
      }] md:${style}`}
    >
      <div className="w-[20px] mr-5">
        <Image
          src={`${icon + (theme === "dark" ? "-dark.svg" : ".svg")}`}
          alt={label || "Not Available"}
          width={icon === "/icon-location" ? 15 : 20}
          height={20}
        />
      </div>

      <p className="w-[200px] ">
        {link ? <a href={label}>{label}</a> : label || "Not Available"}
      </p>
    </div>
  );
};

export default LinkItems;
