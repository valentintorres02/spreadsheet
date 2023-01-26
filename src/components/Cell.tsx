import classNames from "classnames";
import { useSpreadsheet } from "../context/Spreadsheet.context";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  active?: boolean;
  isAxis?: boolean;
  value?: string;
  cellId?: string;
}

const Cell = ({ active = false, value, isAxis = false, cellId, ...props }: Props) => {
  const { cells, updateCellValue } = useSpreadsheet();

  function handleCellChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (cellId) {
      updateCellValue(cellId, e.target.value);
    }
  }

  return (
    <input
      className={classNames("border border-gray-500/30 h-8 px-1", {
        "bg-gray-300 cursor-default focus:outline-none text-center font-semibold": isAxis,
      })}
      disabled={isAxis}
      value={cells[cellId ?? ""] || value || ""}
      onChange={handleCellChange}
      {...props}
    ></input>
  );
};

export default Cell;
