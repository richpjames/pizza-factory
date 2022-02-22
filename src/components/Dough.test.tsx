import React from "react";
import { render, screen } from "@testing-library/react";
import { Dough } from "./Dough";

describe("Dough", () => {
  it("shows active when in active state", () => {
    render(<Dough active />);
    screen.getByText(/dough active/);
  });
});
