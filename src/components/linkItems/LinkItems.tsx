import Image from "next/image";
import { useTheme } from "next-themes";

interface LinkItemsProps {
  label: string;
  icon: string;
}

const LinkItems = ({ icon, label }: LinkItemsProps) => {
  const available = label ? true : false;
  const { theme } = useTheme();
  return (
    <div
      className={`flex items-center my-3 opacity-${available ? "100" : "50"}`}
    >
      <div className="w-[20px] mr-5">
        <Image
          src={`${icon + (theme === "dark" ? "-dark.svg" : ".svg")}`}
          alt={label}
          width={icon === "/icon-location" ? 15 : 20}
          height={20}
        />
      </div>

      <p>{label || "Not Available"}</p>
    </div>
  );
};

export default LinkItems;
