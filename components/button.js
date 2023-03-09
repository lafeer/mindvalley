import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";

export default function Button({ text, url, size, type, className, icon }) {
  const paddingY = {
    sm: "py-3.5",
    md: "py-3",
    lg: "py-4",
  };

  const paddingX = {
    sm: "px-11",
    md: "px-8",
    lg: "px-10",
  };

  const bg = {
    primary: "bg-primary",
    secondary: "bg-white",
    transparent: "bg-transparent",
  };

  const textColor = {
    primary: "text-white",
    secondary: "text-black",
    transparent: "text-primary",
  };

  const border = {
    primary: "border-primary",
    secondary: "border-white",
    transparent: "border-primary",
  };

  return (
    <a href={url || "#"}>
      <button
        type="button"
        className={`${
          type ? bg[type] : bg["primary"]
        } hover:shadow-large rounded-xl border ${
          type ? border[type] : border["primary"]
        } ${type ? textColor[type] : textColor["primary"]} font-bold ${
          paddingY[size]
        } ${
          paddingX[size]
        } duration-200 transition-colors mb-6 lg:mb-0 text-sm ${
          className || ""
        }`}
      >
        {text}
        {icon && (
          <ArrowSmallRightIcon
            className="h-5 w-5 inline-block ml-3"
            aria-hidden="true"
          />
        )}
      </button>
    </a>
  );
}
