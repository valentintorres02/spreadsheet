import React from "react";
import { COLUMNS_AMOUNT, COLUMN_LABELS } from "../utils/constants";
import Cell from "./Cell";

const Columns = () => {
  return (
    <div className='grid grid-cols-12' data-testid='columns-container'>
      {Array.from({ length: COLUMNS_AMOUNT }).map((_cell, index) => {
        return (
          <Cell
            data-testid='columns-cell'
            cellId='axis'
            key={index}
            value={COLUMN_LABELS[index - 1]}
            isAxis
          />
        );
      })}
    </div>
  );
};

export default Columns;
