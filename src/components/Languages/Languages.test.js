import React from 'react';
import { render } from '@testing-library/react';
import Languages from '.';


describe("Languages", () => {
  it("should match snapshot", () => {
    const { getByText } = render(<Languages />);
    const linkElement = getByText(/Languages works!/i);
    expect(linkElement).toBeInTheDocument();
  });
});