import React from "react";

interface DoughProps {
  active?: boolean;
}

export const Dough: React.FC<DoughProps> = ({ active }) => {
  return (
    <div data-state={active}>
      {active && "dough active"}
      dough selection
    </div>
  );
};
