import { beforeEach, describe, expect, it } from "vitest";
import "@testing-library/jest-dom/vitest";
import ImageFrame from "../src/components/ImageFrame";
import { Photo } from "../src/types";
import test_image from "../src/assets/test_image.png";
import { render, screen } from "@testing-library/react";

describe("ImageFrame", () => {
  beforeEach(() => {
    document.body.innerHTML = "";
  });

  it("Displays an image", () => {
    const photo: Photo = {
      photoId: 1,
      url: test_image,
      albumId: 1,
      title: "test title",
    };

    render(<ImageFrame photo={photo} />);
    const image: HTMLImageElement = screen.getByAltText("test title");

    expect(image.src).toContain("test_image");
  });

  it("Links to the image src", () => {
    const photo: Photo = {
      photoId: 1,
      url: test_image,
      albumId: 1,
      title: "test title",
    };

    render(<ImageFrame photo={photo} />);
    const link = screen.getByRole("link");

    expect(link).toHaveAttribute("href", test_image);
  });
});
