import React from 'react';
import { render } from '@testing-library/react';
import FilesBox from '.';


describe("FilesBox", () => {
  it("should match snapshot", () => {
    const { getByText } = render(<FilesBox />);
    const linkElement = getByText(/FilesBox works!/i);
    expect(linkElement).toBeInTheDocument();
  });
});