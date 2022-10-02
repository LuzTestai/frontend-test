import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/zara/i);
  expect(linkElement).toBeInTheDocument();
});

// learn react cambiar texto por uno que este en aplicacion
