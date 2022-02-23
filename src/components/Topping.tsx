import React from "react";

interface ToppingProps {
  active?: boolean;
  onDone: () => void;
  onError: () => void;
}

export const Topping: React.FC<ToppingProps> = ({
  active,
  onDone,
  onError,
}) => {
  return (
    <div data-state={active}>
      {active && "topping active"}
      topping selection
      <button onClick={onDone}>topping button</button>
      <button onClick={onError}>error</button>
    </div>
  );
};
