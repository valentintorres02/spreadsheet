import { useEffect } from "react";
import { useSpreadsheet } from "../context/Spreadsheet.context";
import { handleKeyPress } from "../utils/cells";
import { useKeyPress } from "./useKeyPress";

const useArrowKeysNavigation = () => {
  const { setActiveCell, cells, activeCell } = useSpreadsheet();
  const downPress = useKeyPress("ArrowDown");
  const upPress = useKeyPress("ArrowUp");
  const leftPress = useKeyPress("ArrowLeft");
  const rightPress = useKeyPress("ArrowRight");

  useEffect(() => {
    setActiveCell(handleKeyPress("DOWN", activeCell, cells));
  }, [downPress]);

  useEffect(() => {
    setActiveCell(handleKeyPress("UP", activeCell, cells));
  }, [upPress]);

  useEffect(() => {
    setActiveCell(handleKeyPress("LEFT", activeCell, cells));
  }, [leftPress]);

  useEffect(() => {
    setActiveCell(handleKeyPress("RIGHT", activeCell, cells));
  }, [rightPress]);
};

export default useArrowKeysNavigation;
