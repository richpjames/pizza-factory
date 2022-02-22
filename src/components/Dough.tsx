import React from "react";

interface DoughProps {
  active?: boolean;
  onDone: () => void;
}

export const Dough: React.FC<DoughProps> = ({ active, onDone }) => {
  return (
    <div data-state={active}>
      {active && "dough active"}
      dough selection
      <button onClick={onDone}>done</button>
    </div>
  );
};
