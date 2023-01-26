import { evaluate } from "mathjs";
export function isFormula(input: string) {
  return input[0] === "=";
}

export function getOperationFromFormula(input: string) {
  return input.substring(1);
}

export function getFormulaValue(input: string) {
  let formulaValue = input;

  try {
    formulaValue = evaluate(getOperationFromFormula(input));
  } catch (e) {
    formulaValue = "FORMULA ERROR";
  }

  return formulaValue;
}
