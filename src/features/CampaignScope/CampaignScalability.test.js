import React from 'react';
import { render } from '@testing-library/react';
import CampaignScalability from '.';


describe("CampaignScalability", () => {
  it("should match snapshot", () => {
    const { getByText } = render(<CampaignScalability />);
    const linkElement = getByText(/CampaignScalability works!/i);
    expect(linkElement).toBeInTheDocument();
  });
});