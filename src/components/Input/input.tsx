import React from "react";
import Label from "../Label/label";

interface InputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string; // Add error prop
  className?: string;
}

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  value,
  onChange,
  error,
  className,
}) => {
  return (
    <div>
      <input
        type={type}
        className={`form-control ${className}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <Label message={error} />} {/* Display error message */}
    </div>
  );
};

export default Input;
