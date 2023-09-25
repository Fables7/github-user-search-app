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
    <div className="flex items-center my-3 opacity-50">
      <Image
        src={`${icon + (theme === "dark" ? "-dark.svg" : ".svg")}`}
        alt={label}
        width={20}
        height={20}
      />

      <p className="ml-5">{label || "Not Available"}</p>
    </div>
  );
};

export default LinkItems;
