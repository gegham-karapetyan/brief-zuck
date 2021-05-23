import React from 'react';
import { render } from '@testing-library/react';
import RequiredInfo from '.';


describe("RequiredInfo", () => {
  it("should match snapshot", () => {
    const { getByText } = render(<RequiredInfo />);
    const linkElement = getByText(/RequiredInfo works!/i);
    expect(linkElement).toBeInTheDocument();
  });
});