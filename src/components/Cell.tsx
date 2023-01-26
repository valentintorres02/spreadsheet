import classNames from "classnames";
import { useState } from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  active?: boolean;
  isAxis?: boolean;
  value?: string;
}

const Cell = ({ active = false, value, isAxis = false, ...props }: Props) => {
  const [cellValue, setCellValue] = useState(value);

  function handleCellChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCellValue(e.target.value);
  }

  return (
    <input
      className={classNames("border border-gray-500/30 h-8 px-1", {
        "bg-gray-300 cursor-default focus:outline-none text-center font-semibold": isAxis,
      })}
      disabled={isAxis}
      value={cellValue}
      onChange={handleCellChange}
      {...props}
    ></input>
  );
};

export default Cell;
