import React from 'react';
import { render } from '@testing-library/react';
import SideBar from '.';


describe("SideBar", () => {
  it("should match snapshot", () => {
    const { getByText } = render(<SideBar />);
    const linkElement = getByText(/SideBar works!/i);
    expect(linkElement).toBeInTheDocument();
  });
});