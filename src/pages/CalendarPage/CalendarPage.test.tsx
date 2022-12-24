import React from 'react';
import { render, screen } from '@testing-library/react';
import CalendarPage from './CalendarPage';
import { Provider } from "react-redux";
import { store } from "../../store";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

test('Renders Calendar heading', () => {
  render(<Provider store={store}><BrowserRouter><CalendarPage /></BrowserRouter></Provider>);
  const headingElement = screen.getByTestId('calendarHeading');
  expect(headingElement).toBeInTheDocument();
});
