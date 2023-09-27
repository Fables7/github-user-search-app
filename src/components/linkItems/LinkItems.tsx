import Image from "next/image";
import { useTheme } from "next-themes";
import { StyledLinkItem } from "./StyledLinkItems";

interface LinkItemsProps {
  label: string;
  icon: string;
  style?: string;
}

const LinkItems = ({ icon, label, style }: LinkItemsProps) => {
  const { theme } = useTheme();
  const link = String(label).includes("http");
  return (
    <StyledLinkItem
      label={label}
      className={`flex items-center my-3  box-border pr-4 md:${style}`}
    >
      <div className="w-[20px] mr-5 ">
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
    </StyledLinkItem>
  );
};

export default LinkItems;
