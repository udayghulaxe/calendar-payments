import React from 'react';
import { render, screen } from '@testing-library/react';
import PaymentsPage from './PaymentsPage';
import { Provider } from "react-redux";
import { store } from "../../store";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

test('Renders Calendar heading', () => {
  render(<Provider store={store}><BrowserRouter><PaymentsPage /></BrowserRouter></Provider>);
  const headingElement = screen.getByTestId('paymentsHeading');
  expect(headingElement).toBeInTheDocument();
});
