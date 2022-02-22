import React from "react";

interface DoughProps {
  active?: boolean;
  onDone: () => void;
  onError: () => void;
}

export const Dough: React.FC<DoughProps> = ({ active, onDone, onError }) => {
  return (
    <div data-state={active}>
      {active && "dough active"}
      dough selection
      <button onClick={onDone}>done</button>
      <button onClick={onError}>error</button>
    </div>
  );
};
