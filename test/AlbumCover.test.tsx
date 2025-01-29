import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import AlbumCover from "../src/components/AlbumCover";
import { BrowserRouter } from "react-router";
import { Photo } from "../src/types";
import test_image from "../src/assets/test_image.png";
import "@testing-library/jest-dom/vitest";

describe("AlbumCover", () => {
  beforeEach(() => {
    document.body.innerHTML = "";
  });

  it("Renders a fallback album cover for an empty album", () => {
    render(
      <BrowserRouter>
        <AlbumCover albumId={1} photos={[]} />
      </BrowserRouter>
    );

    const image: HTMLImageElement = screen.getByAltText("Album 1");

    expect(image.src).toContain("fallback_image");
  });

  it("Renders album cover using first photo", () => {
    const photo: Photo = {
      photoId: 1,
      url: test_image,
      albumId: 1,
      title: "Test title",
    };

    render(
      <BrowserRouter>
        <AlbumCover albumId={1} photos={[photo]} />
      </BrowserRouter>
    );
    const image: HTMLImageElement = screen.getByAltText("Album 1");

    expect(image.src).toContain("test_image");
  });

  it("Renders a Link to the specified album's route", () => {
    const photo: Photo = {
      photoId: 1,
      url: test_image,
      albumId: 1,
      title: "Test title",
    };

    render(
      <BrowserRouter>
        <AlbumCover albumId={1} photos={[photo]} />
      </BrowserRouter>
    );
    const link = screen.getByTestId("routerLink");

    expect(link).toHaveAttribute("href", "/album/1");
  });
});
