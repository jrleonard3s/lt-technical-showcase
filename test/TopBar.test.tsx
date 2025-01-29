import { beforeEach, describe, expect, it } from "vitest";
import "@testing-library/jest-dom/vitest";
import TopBar from "../src/components/TopBar";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router";

describe("TopBar", () => {
  beforeEach(() => {
    document.body.innerHTML = "";
  });

  it("Displays an app bar with a fallback title and search bar", () => {
    render(
      <BrowserRouter>
        <TopBar searchCallback={() => {}} />
      </BrowserRouter>
    );
    expect(
      screen.getByText("Lean Techniques Photo Gallery")
    ).toBeInTheDocument();

    expect(screen.getByRole("textbox", { name: "search" })).toBeInTheDocument();
  });

  it("Displays a custom title", () => {
    render(
      <BrowserRouter>
        <TopBar title="Custom title text" searchCallback={() => {}} />
      </BrowserRouter>
    );
    expect(screen.getByText("Custom title text")).toBeInTheDocument();
  });

  it("Optionally displays a link to the Home page", () => {
    // Build default
    render(
      <BrowserRouter>
        <TopBar showHomeButton={false} searchCallback={() => {}} />
      </BrowserRouter>
    );
    expect(screen.queryByTestId("Text I care about")).not.toBeInTheDocument();

    // Clear the rendered component
    document.body.innerHTML = "";

    // Build with home button prop = true
    render(
      <BrowserRouter>
        <TopBar showHomeButton={true} searchCallback={() => {}} />
      </BrowserRouter>
    );
    expect(screen.queryByTestId("HomeIcon")).toBeInTheDocument();
  });
});
