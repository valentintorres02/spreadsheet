import { CELLS_AMOUNT, COLUMNS_AMOUNT, COLUMN_LABELS } from "./constants";

export function createCells(): string[][] {
  const rows = [];

  for (let i = 0; i < CELLS_AMOUNT / COLUMNS_AMOUNT - 1; i++) {
    const row = [];

    for (let j = 0; j < COLUMN_LABELS.length - 1; j++) {
      row.push(COLUMN_LABELS[j] + (i + 1));
    }

    rows.push(row);
  }

  return rows;
}
