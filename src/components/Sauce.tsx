import React from "react";

interface SauceProps {
  active?: boolean;
  onDone: () => void;
  onError: () => void;
}

export const Sauce: React.FC<SauceProps> = ({ active, onDone, onError }) => {
  return (
    <div data-state={active}>
      {active && "sauce active"}
      sauce selection
      <button onClick={onDone}>sauce button</button>
      <button onClick={onError}>error</button>
    </div>
  );
};
