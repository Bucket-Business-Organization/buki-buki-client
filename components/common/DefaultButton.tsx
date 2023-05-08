import React from "react";

type Props = {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
};

const DefaultButton: React.FC<Props> = ({
  label,
  onClick,
  disabled = false,
  className = "",
}) => {
  return (
    <button
      className={`px-4 py-2 rounded-md  text-white disabled:opacity-50 ${
        disabled
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-emerald-500 hover:bg-emerald-400 cursor-pointer"
      } ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default DefaultButton;
