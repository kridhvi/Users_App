/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-render-in-setup */
import React from 'react';
import { useDispatch } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';
import Create from './Create';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

describe('Create', () => {
  let component;
  const mockDispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockReturnValue(mockDispatch);
    component = render(<Create />);
  });

  it('renders without crashing', () => {
    expect(component).toBeTruthy();
  });

  it('renders the correct elements', () => {
    expect(component.getByText('Create User')).toBeInTheDocument();
    expect(component.getByLabelText('Name')).toBeInTheDocument();
    expect(component.getByLabelText('Email')).toBeInTheDocument();
  });

  it('dispatches the addUser action on form submission', () => {
    const nameInput = component.getByLabelText('Name');
    const emailInput = component.getByLabelText('Email');
    const form = component.getByTestId('create-user-form');

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.submit(form);

    expect(mockDispatch).toHaveBeenCalled();
  });
});