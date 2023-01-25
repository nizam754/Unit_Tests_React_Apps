import { render, screen } from "@testing-library/react";
import Register from "./Register";

describe("Register component", () => {
  it("should render Register component correctly", () => {
    render(<Register />);
    const element = screen.getByRole("heading");
    expect(element).toBeInTheDocument();
  });

  it("should show error message when all the fields are not entered", () => {
    render(<Register />);
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
  });
});
