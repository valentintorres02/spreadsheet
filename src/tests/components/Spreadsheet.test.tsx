import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { SpreadsheetProvider } from "../../context/Spreadsheet.context";
import Spreadsheet from "../../components/Spreadsheet";
import { CELLS_AMOUNT, COLUMNS_AMOUNT } from "../../utils/constants";

describe("non-axis cell", () => {
  beforeEach(() => {
    render(
      <SpreadsheetProvider>
        <Spreadsheet />
      </SpreadsheetProvider>,
    );
  });

  test("should render the columns", () => {
    const columnsContainer = screen.getByTestId("columns-container");

    expect(columnsContainer).toBeVisible();
  });

  test("should render the rows", () => {
    const rowsContainer = screen.getByTestId("rows-container");

    expect(rowsContainer).toBeVisible();
  });

  test("should render the correct amount of rows", () => {
    const rowsContainer = screen.getAllByTestId("row-container");

    expect(rowsContainer.length).toBe(CELLS_AMOUNT / COLUMNS_AMOUNT - 1);
  });
});
