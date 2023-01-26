import Cell from "./Cell";

type RowProps = {
  rowNumber: number;
  cells: string[];
};

const Row = ({ rowNumber, cells }: RowProps) => {
  return (
    <div className="grid grid-cols-12">
      <Cell value={rowNumber.toString()} isAxis />
      {cells.map((cell) => {
        return <Cell />;
      })}
    </div>
  );
};

export default Row;
