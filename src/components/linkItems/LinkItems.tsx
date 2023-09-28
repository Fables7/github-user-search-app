import Image from "next/image";
import { useTheme } from "next-themes";
import { StyledLinkItem } from "./StyledLinkItems";
import clsx from "clsx";

interface LinkItemsProps {
  label: string;
  icon: string;
  className?: string;
}

const LinkItems = ({ icon, label, className }: LinkItemsProps) => {
  const { theme } = useTheme();
  const link = String(label).includes("http");
  const rootClassName = clsx(
    "flex items-center my-3  box-border pr-4",
    className
  );
  return (
    <StyledLinkItem label={label} className={rootClassName}>
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
