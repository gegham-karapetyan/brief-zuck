import React from 'react';
import { render } from '@testing-library/react';
import DynamicBox from '.';


describe("DynamicBox", () => {
  it("should match snapshot", () => {
    const { getByText } = render(<DynamicBox />);
    const linkElement = getByText(/DynamicBox works!/i);
    expect(linkElement).toBeInTheDocument();
  });
});