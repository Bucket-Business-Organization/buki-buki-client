import React from "react";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  value?: string;
  placeholder?: string;
  showLabel?: boolean;
  disabled?: boolean;
  defaultValue?: string;
  accept?: string;
  onClick?: () => void;
  readOnly?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type = "text",
  value,
  placeholder,
  showLabel = true,
  disabled = false,
  defaultValue = "",
  onClick,
  readOnly = false,
  className = "",

  onChange,
}) => {
  return (
    <div className="mb-2 w-full flex">
      {showLabel ? (
        <label
          htmlFor={id}
          className={` text-gray-700 w-16 font-bold  text-center flex items-center${className}`}
        >
          {label}
        </label>
      ) : (
        <label htmlFor={id} className={`sr-only ${className}`}>
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        defaultValue={defaultValue}
        onClick={onClick}
        readOnly={readOnly}
        className={`text-base text-gray-500 w-full placeholder-gray-500 border-b border-black  py-1 px-1 leading-tight focus:outline-none focus:shadow-outline bg-white ${className}`}
      />
    </div>
  );
};

export default Input;
