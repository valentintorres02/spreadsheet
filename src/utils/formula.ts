import { evaluate } from "mathjs";
import { Cells } from "./cells";

export function isFormula(input: string) {
  return input[0] === "=";
}

function splitMulti(str: string, tokens: string[]) {
  const tempChar = tokens[0]; // We can use the first token as a temporary join character
  for (let i = 1; i < tokens.length; i++) {
    str = str.split(tokens[i]).join(tempChar);
  }
  const splittedString = str.split(tempChar);
  return splittedString;
}

function splitOperations(input: string) {
  return splitMulti(input, ["+", "-", "*", "/", "^"]);
}

function parseCellReferences(input: string, cells: Cells) {
  let inputCopy = input.replace("", "").replace("=", "");
  const operations = splitOperations(inputCopy.replace(/\s/g, ""));

  operations.forEach((operation) => {
    inputCopy = inputCopy.replace(operation, cells[operation] || operation);
  });

  return inputCopy;
}

export function getFormulaValue(input: string, cells: Cells) {
  let formulaValue = input;

  try {
    formulaValue = evaluate(parseCellReferences(formulaValue, cells));
  } catch (e) {
    formulaValue = "FORMULA ERROR";
  }

  return formulaValue;
}
