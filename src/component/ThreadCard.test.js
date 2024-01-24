/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ThreadCard from './ThreadCard';

const mockStore = configureStore();

// skenario testing
// ThreadCard
// 1. renders ThreadCard component with correct data

describe('ThreadCard', () => {
  it('renders ThreadCard component with correct data', () => {
    const mockThread = {
      id: 1,
      title: 'Test Thread',
      body: '<p>This is a test thread body.</p>',
      ownerId: 123,
      createdAt: '2022-01-01T12:00:00Z',
    };

    const mockUsers = [
      { id: 123, name: 'John Doe' },
    ];

    const store = mockStore({
      auth: {
        users: mockUsers,
      },
    });

    render(
      <Provider store={store}>
        <Router>
          <ThreadCard thread={mockThread} />
        </Router>
      </Provider>,
    );

    const titleElement = screen.getByText('Test Thread');
    expect(titleElement).toBeInTheDocument();

    const bodyElement = screen.getByText('This is a test thread body.');
    expect(bodyElement).toBeInTheDocument();

    const authorElement = screen.getByText('John Doe');
    expect(authorElement).toBeInTheDocument();

    const dateElement = screen.getByText('1 Jan 2022');
    expect(dateElement).toBeInTheDocument();
  });
});
