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

function splitAtIndex(value: string, index: number) {
  return value.substring(0, index) + "," + value.substring(index);
}

function getDownCell(cellId: string) {
  const [column, row] = splitAtIndex(cellId, 1).split(",");
  return `${column}${Number(row) + 1}`;
}

function getUpCell(cellId: string) {
  const [column, row] = splitAtIndex(cellId, 1).split(",");
  return `${column}${Number(row) - 1}`;
}

function getLeftCell(cellId: string) {
  const [column, row] = splitAtIndex(cellId, 1).split(",");

  const newValue = `${COLUMN_LABELS[COLUMN_LABELS.indexOf(column) - 1]}${Number(row)}`;

  return newValue;
}

function getRightCell(cellId: string) {
  const [column, row] = splitAtIndex(cellId, 1).split(",");

  const newValue = `${COLUMN_LABELS[COLUMN_LABELS.indexOf(column) + 1]}${Number(row)}`;

  return newValue;
}

export function handleKeyDown(cellId: string, cells: Cells): string {
  const newValue = getDownCell(cellId);

  if (Object.keys(cells).includes(newValue)) {
    return newValue;
  }

  return cellId;
}

export function handleKeyUp(cellId: string, cells: Cells): string {
  const newValue = getUpCell(cellId);

  if (Object.keys(cells).includes(newValue)) {
    return newValue;
  }

  return cellId;
}

export function handleKeyLeft(cellId: string): string {
  const newValue = getLeftCell(cellId);

  return newValue || cellId;
}

export function handleKeyRight(cellId: string): string {
  const newValue = getRightCell(cellId);

  return newValue || cellId;
}

type KeyType = "DOWN" | "UP" | "LEFT" | "RIGHT";

export function handleKeyPress(keyType: KeyType, cellId: string, cells: Cells) {
  switch (keyType) {
    case "DOWN":
      return handleKeyDown(cellId, cells);
    case "UP":
      return handleKeyUp(cellId, cells);
    case "LEFT":
      return handleKeyLeft(cellId);
    case "RIGHT":
      return handleKeyRight(cellId);
  }
}
