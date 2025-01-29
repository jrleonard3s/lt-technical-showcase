import {
  afterAll,
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  expect,
  it,
} from "vitest";
import "@testing-library/jest-dom/vitest";
import AlbumSelectPage from "../src/pages/AlbumSelectPage";
import { BrowserRouter } from "react-router";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
const fakeResponse = [
  {
    albumId: 1,
    photos: [
      {
        photoId: 1,
        url: "../assets/test_image.png",
        albumId: 1,
        title: "Album1phototitle",
      },
      {
        photoId: 2,
        url: "../assets/test_image.png",
        albumId: 1,
        title: "Album1 another photo",
      },
    ],
  },
  {
    albumId: 2,
    photos: [
      {
        photoId: 3,
        url: "../assets/test_image.png",
        albumId: 2,
        title: "album2 photo",
      },
    ],
  },
];

const server = setupServer(
  http.get("ltapi/albums", () => {
    return HttpResponse.json(fakeResponse);
  })
);

describe("Search bar", () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());
  beforeEach(() => {
    document.body.innerHTML = "";
  });
  afterEach(() => {
    server.resetHandlers();
  });

  it("Renders album covers", async () => {
    render(
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <AlbumSelectPage />
        </QueryClientProvider>
      </BrowserRouter>
    );

    // Wait for fetch and rerender
    await waitFor(() => {
      expect(screen.queryAllByTestId("album-cover-testid").length).toEqual(2);
    });

    // Check that both albums are present
    expect(screen.getByAltText("Album 1")).toBeInTheDocument();
    expect(screen.getByAltText("Album 2")).toBeInTheDocument();
  });

  it("Filters albums", async () => {
    render(
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <AlbumSelectPage />
        </QueryClientProvider>
      </BrowserRouter>
    );

    // Wait for fetch and rerender
    await waitFor(() => {
      expect(screen.queryAllByTestId("album-cover-testid").length).toEqual(2);
    });

    // Check that both albums are present
    expect(screen.getByAltText("Album 1")).toBeInTheDocument();
    expect(screen.getByAltText("Album 2")).toBeInTheDocument();

    // Type in the search bar
    const input = screen.getByRole("textbox", { name: "search" });
    userEvent.type(input, "album1phototitle");

    // Wait for the search to debounce and rerender
    await waitFor(() => {
      expect(screen.queryAllByTestId("album-cover-testid").length).toEqual(1);
    });

    // Check only the album with a photo with that title is displayed
    expect(screen.getByAltText("Album 1")).toBeInTheDocument();
    expect(screen.queryByAltText("Album 2")).not.toBeInTheDocument();
  });

  it("Shows a message when all albums are filtered", async () => {
    render(
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <AlbumSelectPage />
        </QueryClientProvider>
      </BrowserRouter>
    );

    // Wait for fetch and rerender
    await waitFor(() => {
      expect(screen.queryAllByTestId("album-cover-testid").length).toEqual(2);
    });

    // Check that both albums are present
    expect(screen.getByAltText("Album 1")).toBeInTheDocument();
    expect(screen.getByAltText("Album 2")).toBeInTheDocument();

    // Type in the search bar
    const input = screen.getByRole("textbox", { name: "search" });
    userEvent.type(input, "nonsensestringasdfojlkqwjef");

    // Wait for the search to debounce and rerender
    await waitFor(() => {
      expect(screen.queryAllByTestId("album-cover-testid").length).toEqual(0);
    });

    // Check neither album is displayed
    expect(screen.queryByAltText("Album 1")).not.toBeInTheDocument();
    expect(screen.queryByAltText("Album 2")).not.toBeInTheDocument();

    // Check for fallback message
    expect(screen.queryByText("No results found")).toBeInTheDocument();
  });
});
