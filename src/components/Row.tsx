import Cell from "./Cell";

export type RowProps = {
  rowNumber: number;
  cells: string[];
};

const Row = ({ rowNumber, cells }: RowProps) => {
  return (
    <div className='grid grid-cols-12' data-testid='row-container'>
      <Cell data-testid='row-cell' cellId='axis' value={rowNumber.toString()} isAxis />
      {cells.map((cell) => {
        return <Cell data-testid='row-cell' key={cell} cellId={cell} />;
      })}
    </div>
  );
};

export default Row;
