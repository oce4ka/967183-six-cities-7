import { render, screen } from '@testing-library/react';
import React from 'react';
import LoadingScreen from './loading-screen';

describe('Component: LoadingScreen', () => {
  it('should render correctly', () => {
    render(<LoadingScreen />);
    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });
});
