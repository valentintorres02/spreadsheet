import { useState, useEffect } from "react";

type KeyHandler = {
  key: string;
};

export const useKeyPress = function (targetKey: string) {
  const [keyPressed, setKeyPressed] = useState(false);

  function downHandler({ key }: KeyHandler) {
    if (key === targetKey) {
      setKeyPressed(true);
    }
  }

  const upHandler = ({ key }: KeyHandler) => {
    if (key === targetKey) {
      setKeyPressed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);

    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  });

  return keyPressed;
};
