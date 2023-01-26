import { CELLS_AMOUNT, COLUMNS_AMOUNT, COLUMN_LABELS } from "./constants";

export type Cells = Record<string, string | null>;

export function createCells() {
  const rows = [];
  const cells: Cells = {};

  for (let i = 0; i < CELLS_AMOUNT / COLUMNS_AMOUNT - 1; i++) {
    const row = [];

    for (let j = 0; j < COLUMN_LABELS.length - 1; j++) {
      const rowId = COLUMN_LABELS[j] + (i + 1);
      row.push(rowId);
      cells[rowId] = null;
    }

    rows.push(row);
  }

  return { rows, cells };
}
