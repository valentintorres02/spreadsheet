import Cell from "./Cell";

type RowProps = {
  rowNumber: number;
  cells: string[];
};

const Row = ({ rowNumber, cells }: RowProps) => {
  return (
    <div className='grid grid-cols-12'>
      <Cell cellId='axis' value={rowNumber.toString()} isAxis />
      {cells.map((cell) => {
        return <Cell key={cell} cellId={cell} />;
      })}
    </div>
  );
};

export default Row;
