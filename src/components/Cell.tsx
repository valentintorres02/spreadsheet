import classNames from "classnames";
import { useSpreadsheet } from "../context/Spreadsheet.context";
import { getFormulaValue, isFormula } from "../utils/formula";
interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  active?: boolean;
  isAxis?: boolean;
  value?: string;
  cellId: string;
}

const Cell = ({ active = false, value, isAxis = false, cellId, ...props }: Props) => {
  const { cells, updateCellValue } = useSpreadsheet();

  function handleCellChange(e: React.ChangeEvent<HTMLInputElement>) {
    updateCellValue(cellId, e.target.value);
  }

  function handleCellSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const cellValue = cells[cellId] || "";

    if (isFormula(cellValue)) {
      const formulaValue = getFormulaValue(cellValue);
      updateCellValue(cellId, formulaValue);
    }
  }

  return (
    <form
      className={classNames("w-full border border-gray-500/30 h-8", {
        "bg-gray-300 cursor-default focus:outline-none font-semibold": isAxis,
      })}
      onSubmit={handleCellSubmit}
    >
      <input
        className={classNames("w-full h-full px-1", {
          "text-center": isAxis,
        })}
        disabled={isAxis}
        value={cells[cellId ?? ""] || value || ""}
        onChange={handleCellChange}
        type='text'
        {...props}
      ></input>
    </form>
  );
};

export default Cell;
