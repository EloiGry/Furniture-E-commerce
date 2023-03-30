import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Newslatter from '../Newslatter';
import '../../../../../mockIntersectionObserver';

describe('Newslatter', () => {
  test('modal opens and closes on button click', async () => {
    render(<Newslatter />);
    const button = screen.getByRole('button', { name: /s'inscrire/i });

    fireEvent.click(button);
    const dialogTitle = await screen.findByText(/inscription réussie/i);
    expect(dialogTitle).toBeInTheDocument();

    const closeModalButton = screen.getByRole('button', { name: /c'est daccord/i });
    fireEvent.click(closeModalButton);
    expect(dialogTitle).not.toBeInTheDocument();
  });
});