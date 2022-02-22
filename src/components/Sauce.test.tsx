import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Sauce } from "./Sauce";

describe("Sauce", () => {
  it("shows active when in active state", () => {
    render(<Sauce active onDone={() => {}} onError={() => {}} />);
    screen.getByText(/sauce active/);
  });
  it("fires onDone callback when button is clicked", () => {
    const mockFn = jest.fn();
    render(<Sauce active onDone={mockFn} onError={() => {}} />);
    userEvent.click(screen.getByText("sauce button"));
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
  it("fires onError callback when error happens", () => {
    const mockFn = jest.fn();
    render(<Sauce active onDone={() => {}} onError={mockFn} />);
    userEvent.click(screen.getByText("error"));
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
