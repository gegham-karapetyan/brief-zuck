import React from 'react';
import { render } from '@testing-library/react';
import SocialMediaActivationBrief from '.';


describe("SocialMediaActivationBrief", () => {
  it("should match snapshot", () => {
    const { getByText } = render(<SocialMediaActivationBrief />);
    const linkElement = getByText(/SocialMediaActivationBrief works!/i);
    expect(linkElement).toBeInTheDocument();
  });
});