import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Row from "../../components/Row";
import { MOCK_ROW } from "../mocks/row.mock";
import { COLUMNS_AMOUNT } from "../../utils/constants";

describe("axis cell", () => {
  beforeEach(() => {
    render(<Row {...MOCK_ROW} />);
  });

  test("should render the row", () => {
    const row = screen.getByTestId("row-container");

    expect(row).toBeVisible();
  });

  test("should render the right amount of elements", () => {
    const rows = screen.getAllByTestId("row-cell");

    expect(rows.length).toBe(COLUMNS_AMOUNT);
  });

  test("first row cell must be disabled as they are of isAxis type", () => {
    const row = screen.getAllByTestId("row-cell")[0];

    expect(row).toBeDisabled();
  });

  test("rest of row cells must not be disabled as they are not of isAxis type", () => {
    const rows = screen.getAllByTestId("row-cell").splice(1);

    rows.forEach((row) => {
      expect(row).not.toBeDisabled();
    });
  });

  test("first row must have rowNumber value", () => {
    const row = screen.getAllByTestId("row-cell")[0];

    expect(row).toHaveValue(MOCK_ROW.rowNumber.toString());
  });
});
