import { render, screen } from "@testing-library/react";
import Columns from "../../components/Columns";
import "@testing-library/jest-dom";
import { COLUMNS_AMOUNT, COLUMN_LABELS } from "../../utils/constants";

describe("columns", () => {
  beforeEach(() => {
    render(<Columns />);
  });

  test("should render all the columns", () => {
    const columnsContainer = screen.getByTestId("columns-container");

    expect(columnsContainer).toBeVisible();
  });

  test("all column cells must be disabled as they are of isAxis type", () => {
    const columns = screen.getAllByTestId("columns-cell");

    columns.forEach((column) => {
      expect(column).toBeDisabled();
    });
  });

  test("should render the right amount of columns", () => {
    const columns = screen.getAllByTestId("columns-cell");

    expect(columns.length).toBe(COLUMNS_AMOUNT);
  });

  test("first column should have no value", () => {
    const firstColumn = screen.getAllByTestId("columns-cell")[0];

    expect(firstColumn).toHaveValue("");
  });

  test("rest of columns should have right value value", () => {
    const restOfColumns = screen.getAllByTestId("columns-cell").splice(1);

    restOfColumns.forEach((column, index) => {
      expect(column).toHaveValue(COLUMN_LABELS[index]);
    });
  });
});
