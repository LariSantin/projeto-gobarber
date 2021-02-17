import React from 'react';
import SignIn from '../../pages/SignIn';
import { render } from '@testing-library/react';

jest.mock('react-router-dom', () => {
  return {
    useHistory: jest.fn(),
    Link: ({ children }: { children: React.ReactNode }) => children,
  }
});

describe('SignIn Page', () => {
  it('should be able to sing in', () => {
    const { debug } = render(<SignIn />);

    debug();
  });
});
