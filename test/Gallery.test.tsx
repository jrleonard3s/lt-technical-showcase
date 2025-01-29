import { beforeEach, describe, expect, it } from "vitest";
import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import Gallery from "../src/components/Gallery";
import { Photo } from "../src/types";

const testPhotos: Photo[] = [
  {
    photoId: 1,
    url: "../assets/test_image.png",
    albumId: 1,
    title: "test title 1",
  },
  {
    photoId: 2,
    url: "../assets/test_image.png",
    albumId: 1,
    title: "test title 2",
  },
];

describe("Gallery", () => {
  beforeEach(() => {
    document.body.innerHTML = "";
  });

  it("renders images", () => {
    render(<Gallery photos={testPhotos} />);

    const image1: HTMLImageElement = screen.getByAltText("test title 1");
    const image2: HTMLImageElement = screen.getByAltText("test title 2");

    expect(image1.src).toContain("test_image.png");
    expect(image2.src).toContain("test_image.png");
  });
});
