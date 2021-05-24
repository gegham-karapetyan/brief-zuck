import React from 'react';
import { render } from '@testing-library/react';
import UrlBlock from '.';


describe("UrlBlock", () => {
  it("should match snapshot", () => {
    const { getByText } = render(<UrlBlock />);
    const linkElement = getByText(/UrlBlock works!/i);
    expect(linkElement).toBeInTheDocument();
  });
});