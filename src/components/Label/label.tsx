import React from "react";

interface ErrorLabelProps {
  message: string;
}

const Label: React.FC<ErrorLabelProps> = ({ message }) => {
  return <div className="text-danger">{message}</div>;
};

export default Label;
