import React from 'react';
import { render } from '@testing-library/react';
import CommercialVideoBrief from '.';


describe("CommercialVideoBrief", () => {
  it("should match snapshot", () => {
    const { getByText } = render(<CommercialVideoBrief />);
    const linkElement = getByText(/CommercialVideoBrief works!/i);
    expect(linkElement).toBeInTheDocument();
  });
});