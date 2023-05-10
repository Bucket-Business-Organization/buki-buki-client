import React from "react";

type ButtonProps = {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
};

const DefaultButton: React.FunctionComponent<ButtonProps> = ({
  label,
  onClick,
  disabled = false,
  className = "",
  type = "button",
}) => {
  return (
    <button
      className={`px-4 py-2 rounded-md text-white disabled:opacity-50 ${
        disabled
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-emerald-500 hover:bg-emerald-400 cursor-pointer"
      } ${className}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {label}
    </button>
  );
};

export default DefaultButton;
