import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CommentsList from './CommentsList';

describe('CommentsList', () => {
  it('renders CommentsList component with correct data', () => {
    const mockComments = [
      {
        id: 1,
        owner: { name: 'John Doe', avatar: 'john-avatar-url' },
        createdAt: '2022-01-01T12:00:00Z',
        content: '<p>This is a test comment.</p>',
      },
    ];

    render(<CommentsList comments={mockComments} />);

    const commentAuthorName = screen.getByText('John Doe');
    expect(commentAuthorName).toBeInTheDocument();

    const commentDate = screen.getByText('1 Jan 2022');
    expect(commentDate).toBeInTheDocument();

    const commentBody = screen.getByText('This is a test comment.');
    expect(commentBody).toBeInTheDocument();
  });
});
