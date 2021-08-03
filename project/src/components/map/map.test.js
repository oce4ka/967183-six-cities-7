import React from 'react';
import {render, screen} from '@testing-library/react';
import Map from './map';

describe('Component: Map', () => {
  it('should render correctly', () => {
    render(
      <Map offersArray={[]} activePlaceId={1} currentCity={'Amsterdam'}/>,
    );

    expect(screen.getByRole('link', {name: 'OpenStreetMap'})).toBeInTheDocument();
  });
});
