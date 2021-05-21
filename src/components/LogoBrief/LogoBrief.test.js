import React from 'react';
import { render } from '@testing-library/react';
import LogoBrief from '.';


describe("LogoBrief", () => {
  it("should match snapshot", () => {
    const { getByText } = render(<LogoBrief />);
    const linkElement = getByText(/LogoBrief works!/i);
    expect(linkElement).toBeInTheDocument();
  });
});