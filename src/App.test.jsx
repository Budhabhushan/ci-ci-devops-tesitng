import { render, screen, cleanup } from "@testing-library/react";
import { afterEach, expect, test } from "vitest";
import "@testing-library/jest-dom/vitest";
import App from "./App";

afterEach(() => {
  cleanup();
});

test("renders Vite + React", () => {
  render(<App />);
  const heading = screen.getByRole("heading", {
    level: 1,
    name: /Budhabhushan Code step by step/i,
  });
  expect(heading).toBeInTheDocument();
});
