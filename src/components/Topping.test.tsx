import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Topping } from "./Topping";

describe("Topping", () => {
  it("shows active when in active state", () => {
    render(<Topping active onDone={() => {}} onError={() => {}} />);
    screen.getByText(/topping active/);
  });
  it("fires onDone callback when button is clicked", () => {
    const mockFn = jest.fn();
    render(<Topping active onDone={mockFn} onError={() => {}} />);
    userEvent.click(screen.getByText("topping button"));
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
  it("fires onError callback when error happens", () => {
    const mockFn = jest.fn();
    render(<Topping active onDone={() => {}} onError={mockFn} />);
    userEvent.click(screen.getByText("error"));
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
