import React from 'react';
import { render } from '@testing-library/react';
import AdvertisingCampaignBrief from '.';


describe("AdvertisingCampaignBrief", () => {
  it("should match snapshot", () => {
    const { getByText } = render(<AdvertisingCampaignBrief />);
    const linkElement = getByText(/AdvertisingCampaignBrief works!/i);
    expect(linkElement).toBeInTheDocument();
  });
});