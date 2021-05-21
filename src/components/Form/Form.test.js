import React from 'react';
import { render } from '@testing-library/react';
import Form from '.';


describe("Form", () => {
  it("should match snapshot", () => {
    const { getByText } = render(<Form />);
    const linkElement = getByText(/Form works!/i);
    expect(linkElement).toBeInTheDocument();
  });
});