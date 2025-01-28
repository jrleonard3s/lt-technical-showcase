import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import "@testing-library/jest-dom/vitest";
import AlbumCover from "../src/components/AlbumCover";
import { BrowserRouter } from "react-router";

describe("AlbumCover", () => {
  it("Renders an album cover for an empty album", () => {
    render(
      <BrowserRouter>
        <AlbumCover albumId={1} photos={[]} />
      </BrowserRouter>
    );
    expect(screen.getByAltText("Album 1")).toBeInTheDocument();
  });
});
