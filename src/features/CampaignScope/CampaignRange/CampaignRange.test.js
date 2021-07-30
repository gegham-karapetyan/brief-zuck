import React from 'react';
import { render } from '@testing-library/react';
import CampaignRange from '.';


describe("CampaignRange", () => {
  it("should match snapshot", () => {
    const { getByText } = render(<CampaignRange />);
    const linkElement = getByText(/CampaignRange works!/i);
    expect(linkElement).toBeInTheDocument();
  });
});