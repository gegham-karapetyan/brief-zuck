import React from 'react';
import { render } from '@testing-library/react';
import VisualKeyVisualBrief from '.';


describe("VisualKeyVisualBrief", () => {
  it("should match snapshot", () => {
    const { getByText } = render(<VisualKeyVisualBrief />);
    const linkElement = getByText(/VisualKeyVisualBrief works!/i);
    expect(linkElement).toBeInTheDocument();
  });
});