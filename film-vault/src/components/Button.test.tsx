import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./Button";

test("Show the right color of the button", () => {
  render(<Button label="Press me" onClick={() => {}} />);
  expect(screen.getByRole("button", { name: "Press me" })).toBeInTheDocument();
});
