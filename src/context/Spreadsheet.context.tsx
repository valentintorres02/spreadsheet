import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { Cells, createCells } from "../utils/cells";

type SpreadsheetContextType = {
  cells: Cells;
  rows: string[][];
  updateCellValue(cellIndex: string, value: string): void;
  activeCell: string;
  setActiveCell: React.Dispatch<React.SetStateAction<string>>;
};

export const CONTEXT_DEFAULT_VALUE: SpreadsheetContextType = {
  cells: {},
  rows: [],
  updateCellValue: () => null,
  activeCell: "A1",
  setActiveCell: () => null,
};

export const SpreadsheetContext = createContext<SpreadsheetContextType>(CONTEXT_DEFAULT_VALUE);

export const SpreadsheetProvider = ({ children }: { children: ReactNode }) => {
  const [rows, setRows] = useState<string[][]>([]);
  const [cells, setCells] = useState<Cells>({});
  const [activeCell, setActiveCell] = useState("A1");

  function updateCellValue(cellIndex: string, value: string) {
    setCells((prevState) => {
      return { ...prevState, [cellIndex]: value };
    });
  }

  useEffect(() => {
    const createdCells = createCells();
    setRows(createdCells.rows);
    setCells(createdCells.cells);
  }, []);

  return (
    <SpreadsheetContext.Provider
      value={{ rows, cells, updateCellValue, activeCell, setActiveCell }}
    >
      {children}
    </SpreadsheetContext.Provider>
  );
};

export const useSpreadsheet = () => useContext(SpreadsheetContext);
