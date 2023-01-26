import { useEffect, useState } from "react";
import { createCells } from "../utils/cells";
import Columns from "./Columns";
import Row from "./Row";

function Spreadsheet() {
  const [cells, setCells] = useState<string[][]>([]);

  useEffect(() => {
    setCells(createCells());
  }, []);

  return (
    <div>
      <Columns />
      {cells.map((rowCells, index) => (
        <Row rowNumber={index + 1} cells={rowCells} />
      ))}
    </div>
  );
}

export default Spreadsheet;
