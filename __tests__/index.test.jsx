// __tests__/index.test.jsx

/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../pages/index";

describe("Home", () => {
  test("render text overview", () => {
    const { getByText, debug } = render(<Home />);

    const title = getByText("OVERVIEW");

    expect(title).toBeInTheDocument();
    expect(title).toHaveStyle("color: #666");
  });

  test("render text business", () => {
    const { getByText, debug } = render(<Home />);

    const title = getByText("BUSINESS");

    expect(title).toBeInTheDocument();
    expect(title).toHaveStyle("color: #666");
  });

  test("render text inbox", () => {
    const { getByText, debug } = render(<Home />);

    const title = getByText("INBOX");

    expect(title).toBeInTheDocument();
    expect(title).toHaveStyle("color: #666");
  });

  test("render text inbox", () => {
    const { getByText, debug } = render(<Home />);

    const title = getByText("INBOX");

    expect(title).toBeInTheDocument();
    expect(title).toHaveStyle("color: #666");
  });

  test("render a collaborators", () => {
    const { getByText, debug } = render(<Home />);

    const title = getByText("COLLABORATORS");

    expect(title).toBeInTheDocument();
    expect(title).toHaveStyle("color: #666");
  });

  //   test("render text performance", () => {
  //     const { getByText, debug } = render(<Home />);

  //     const title = getByText("PERFORMANCE");

  //     expect(title).toBeInTheDocument();
  //   });

  test("render text billing", () => {
    const { getByText, debug } = render(<Home />);

    const title = getByText("BILLING");

    expect(title).toBeInTheDocument();
    expect(title).toHaveStyle("color: #666");
  });

  test("render text support", () => {
    const { getByText, debug } = render(<Home />);

    const title = getByText("SUPPORT");

    expect(title).toBeInTheDocument();
    expect(title).toHaveStyle("color: #666");
  });

  test("render text id", () => {
    const { getByText, debug } = render(<Home />);

    const title = getByText("ID");

    expect(title).toBeInTheDocument();
    expect(title).toHaveStyle("color: #7983A5");
  });

  test("render text name", () => {
    const { getByText, debug } = render(<Home />);

    const title = getByText("NAME");

    expect(title).toBeInTheDocument();
    expect(title).toHaveStyle("color: #7983A5");
  });

  test("render text email", () => {
    const { getByText, debug } = render(<Home />);

    const title = getByText("EMAIL");

    expect(title).toBeInTheDocument();
    expect(title).toHaveStyle("color: #7983A5");
  });

  //   test("renders a heading", () => {
  //     const { getByTestId, debug } = render(<Home />);

  //     waitFor(() => {
  //       const dataItem = getByTestId("data-item");
  //       expect(dataItem).toBeInTheDocument();
  //     });
  //   });
});
