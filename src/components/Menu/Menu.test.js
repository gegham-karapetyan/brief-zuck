import React from "react";
import { render } from "@testing-library/react";
import Menu from ".";

describe("Menu", () => {
  it("should match snapshot", () => {
    const { getByText } = render(<Menu />);
    const linkElement = getByText(/Menu works!/i);
    expect(linkElement).toBeInTheDocument();
  });
});
