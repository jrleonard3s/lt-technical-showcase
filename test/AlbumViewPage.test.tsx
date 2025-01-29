import {
  afterAll,
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from "vitest";
import "@testing-library/jest-dom/vitest";
import { BrowserRouter } from "react-router";
import { render, screen, waitFor } from "@testing-library/react";
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AlbumViewPage from "../src/pages/AlbumViewPage";

const queryClient = new QueryClient();
const fakeResponse = [
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

const server = setupServer(
  http.get("ltapi/albums/1", () => {
    return HttpResponse.json(fakeResponse);
  })
);

describe("AlbumViewPage", () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());
  beforeEach(() => {
    document.body.innerHTML = "";
    vi.mock("react-router", async () => {
      const actual = await vi.importActual<typeof import("react-router")>(
        "react-router"
      );
      return {
        ...actual,
        useParams: () => ({
          albumId: "1",
        }),
      };
    });
  });
  afterEach(() => {
    vi.resetAllMocks();
    server.resetHandlers();
  });

  it("renders images", async () => {
    render(
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <AlbumViewPage />
        </QueryClientProvider>
      </BrowserRouter>
    );

    // Wait for fetch and rerender
    await waitFor(() => {
      expect(screen.queryAllByTestId("gallery-testid").length).toEqual(1);
    });

    const image1: HTMLImageElement = screen.getByAltText("test title 1");
    const image2: HTMLImageElement = screen.getByAltText("test title 2");

    expect(screen.getByTestId("gallery-testid")).toBeInTheDocument();
    expect(image1.src).toContain("test_image.png");
    expect(image2.src).toContain("test_image.png");
  });
});
