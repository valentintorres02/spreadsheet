import { useSpreadsheet } from "../context/Spreadsheet.context";
import useArrowKeysNavigation from "../hooks/useArrowKeysNavigation";
import Columns from "./Columns";
import Row from "./Row";

function Spreadsheet() {
  const { rows } = useSpreadsheet();
  useArrowKeysNavigation();

  return (
    <>
      <Columns />
      <div data-testid='rows-container'>
        {rows.map((rowCells, index) => (
          <Row key={index} rowNumber={index + 1} cells={rowCells} />
        ))}
      </div>
    </>
  );
}

export default Spreadsheet;
