import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Dough } from "./Dough";

describe("Dough", () => {
  it("shows active when in active state", () => {
    render(<Dough active onDone={() => {}} />);
    screen.getByText(/dough active/);
  });
  it("fires onDone callback when button is clicked", () => {
    const mockFn = jest.fn();
    render(<Dough active onDone={mockFn} />);
    userEvent.click(screen.getByText("done"));
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
