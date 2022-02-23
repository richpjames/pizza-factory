import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Cooking } from "./Cooking";

describe("Cooking", () => {
  it("shows active when in active state", () => {
    render(<Cooking active onDone={() => {}} onError={() => {}} />);
    screen.getByText(/cooking active/);
  });
  it("fires onDone callback when button is clicked", () => {
    const mockFn = jest.fn();
    render(<Cooking active onDone={mockFn} onError={() => {}} />);
    userEvent.click(screen.getByText("cooking button"));
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
  it("fires onError callback when error happens", () => {
    const mockFn = jest.fn();
    render(<Cooking active onDone={() => {}} onError={mockFn} />);
    userEvent.click(screen.getByText("error"));
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
