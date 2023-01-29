import classNames from "classnames";
import { useEffect, useRef } from "react";
import { useSpreadsheet } from "../context/Spreadsheet.context";
import { getFormulaValue, isFormula } from "../utils/formula";
export interface CellProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isAxis?: boolean;
  value?: string;
  cellId: string;
}

const Cell = ({ value, isAxis = false, cellId, ...props }: CellProps) => {
  const { cells, updateCellValue, activeCell, setActiveCell } = useSpreadsheet();
  const inputRef = useRef<HTMLInputElement>(null);

  function handleCellChange(e: React.ChangeEvent<HTMLInputElement>) {
    updateCellValue(cellId, e.target.value);
  }

  function removeFocusFromInput() {
    inputRef?.current?.blur();
  }

  function focusInput() {
    inputRef?.current?.focus();
  }

  function handleCellSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const cellValue = cells[cellId] || "";

    if (isFormula(cellValue)) {
      const formulaValue = getFormulaValue(cellValue, cells);
      updateCellValue(cellId, formulaValue);
    }

    removeFocusFromInput();
  }

  useEffect(() => {
    if (activeCell === cellId) {
      focusInput();
    }
  }, [activeCell]);

  return (
    <form
      className={classNames("w-full border border-gray-500/30 h-8", {
        "bg-gray-300 cursor-default focus:outline-none font-semibold": isAxis,
      })}
      onSubmit={handleCellSubmit}
      data-testid='cell-form'
    >
      <input
        className={classNames("w-full h-full px-1", {
          "text-center": isAxis,
        })}
        disabled={isAxis}
        value={cells[cellId ?? ""] || value || ""}
        onChange={handleCellChange}
        type='text'
        ref={inputRef}
        onFocus={() => setActiveCell(cellId)}
        data-testid='cell-input'
        {...props}
      ></input>
    </form>
  );
};

export default Cell;
