import React from 'react';
import { render } from '@testing-library/react';
import NumberSelect from '.';


describe("NumberSelect", () => {
  it("should match snapshot", () => {
    const { getByText } = render(<NumberSelect />);
    const linkElement = getByText(/NumberSelect works!/i);
    expect(linkElement).toBeInTheDocument();
  });
});