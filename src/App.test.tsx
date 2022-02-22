import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders the dough component", () => {
    render(<App />);
    screen.getByText(/dough selection/);
  });

  it("renders the sauce component", () => {
    render(<App />);
    screen.getByText(/sauce selection/);
  });
  it("renders the topping component", () => {
    render(<App />);
    screen.getByText(/topping selection/);
  });
  it("renders the cooking component", () => {
    render(<App />);
    screen.getByText(/cooking selection/);
  });
  it("dough component should be active initially", () => {
    render(<App />);
    screen.getByText(/dough active/);
  });
});
