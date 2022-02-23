import React from "react";

interface CookingProps {
  active?: boolean;
  onDone: () => void;
  onError: () => void;
}

export const Cooking: React.FC<CookingProps> = ({
  active,
  onDone,
  onError,
}) => {
  return (
    <div data-state={active}>
      {active && "cooking active"}
      cooking selection
      <button onClick={onDone}>cooking button</button>
      <button onClick={onError}>error</button>
    </div>
  );
};
