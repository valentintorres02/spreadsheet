import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Cell from "../../components/Cell";
import { MOCK_CELL } from "../mocks/cell.mock";
import userEvent from "@testing-library/user-event";
import { SpreadsheetProvider } from "../../context/Spreadsheet.context";

describe("non-axis cell", () => {
  beforeEach(() => {
    render(
      <SpreadsheetProvider>
        <Cell {...MOCK_CELL} />
      </SpreadsheetProvider>,
    );
  });

  test("should render non-axis cell form", () => {
    const cellForm = screen.getByTestId("cell-form");

    expect(cellForm).toBeVisible();
  });

  test("should not be disabled if it is a non-axis cell", () => {
    const cellInput = screen.getByTestId("cell-input");

    expect(cellInput).not.toBeDisabled();
  });

  test("should have correct initial value", () => {
    const cellInput = screen.getByTestId("cell-input");

    expect(cellInput).toHaveValue(MOCK_CELL.value);
  });

  test("should change its value when new value written on input", () => {
    const cellInput = screen.getByTestId("cell-input");
    const newValue = "5 * 3";

    userEvent.type(cellInput, newValue);

    expect(cellInput).toHaveValue(newValue);
  });
});

describe("axis cell", () => {
  beforeEach(() => {
    render(<Cell {...MOCK_CELL} isAxis />);
  });

  test("should be disabled if it is a non-axis cell", () => {
    const cellInput = screen.getByTestId("cell-input");

    expect(cellInput).toBeDisabled();
  });
});
