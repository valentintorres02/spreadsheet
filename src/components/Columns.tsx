import React from "react";
import { COLUMNS_AMOUNT, COLUMN_LABELS } from "../utils/constants";
import Cell from "./Cell";

const Columns = () => {
  return (
    <div className="grid grid-cols-12">
      {Array.from({ length: COLUMNS_AMOUNT }).map((_cell, index) => {
        return <Cell key={index} value={COLUMN_LABELS[index - 1]} isAxis />;
      })}
    </div>
  );
};

export default Columns;
