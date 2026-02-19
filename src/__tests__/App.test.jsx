import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

describe("SprintFlow App", () => {
  test("renders app title", () => {
    render(<App />);
    const titleElement = screen.getByText(/SprintFlow/i);
    expect(titleElement).toBeInTheDocument();
  });

  test("user can add a task", () => {
    render(<App />);

    const input = screen.getByPlaceholderText(/Enter a task/i);
    const addButton = screen.getByText(/Add/i);

    fireEvent.change(input, { target: { value: "Learn testing" } });
    fireEvent.click(addButton);

    const taskItem = screen.getByText("Learn testing");
    expect(taskItem).toBeInTheDocument();
  });

  test("task appears in list after adding", () => {
    render(<App />);

    const input = screen.getByPlaceholderText(/Enter a task/i);
    const addButton = screen.getByText(/Add/i);

    fireEvent.change(input, { target: { value: "Write tests" } });
    fireEvent.click(addButton);

    const taskItem = screen.getByText("Write tests");
    expect(taskItem).toBeInTheDocument();
  });

  test("user can mark task as complete", () => {
    render(<App />);

    const input = screen.getByPlaceholderText(/Enter a task/i);
    const addButton = screen.getByText(/Add/i);

    fireEvent.change(input, { target: { value: "Complete task" } });
    fireEvent.click(addButton);

    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);

    const taskItem = screen.getByText("Complete task");
    expect(taskItem).toHaveStyle("text-decoration: line-through");
  });
});
