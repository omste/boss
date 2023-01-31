import React from 'react';
import { render, screen } from '@testing-library/react';
import { SalesGraph, DataItem } from './salesGraph';

import '@testing-library/jest-dom';

const seriesMock: DataItem[] = [
  {
    month: 2,
    year: 2021,
    date: new Date('2021-02-05T08:44:46.523Z'),
    val: 8202.050000000001
  },
  {
    month: 3,
    year: 2021,
    date: new Date('2021-03-05T08:44:46.523Z'),
    val: 7038.359999999998
  },
  {
    month: 4,
    year: 2021,
    date: new Date('2021-04-05T07:44:46.522Z'),
    val: 7355.909999999998
  },
  {
    month: 5,
    year: 2021,
    date: new Date('2021-05-05T07:44:46.522Z'),
    val: 8685.560000000005
  },
  {
    month: 6,
    year: 2021,
    date: new Date('2021-06-05T07:44:46.521Z'),
    val: 7441.490000000002
  },
  {
    month: 7,
    year: 2021,
    date: new Date('2021-07-05T07:44:46.519Z'),
    val: 7781.819999999997
  },
  {
    month: 8,
    year: 2021,
    date: new Date('2021-08-05T07:44:46.519Z'),
    val: 7561.9299999999985
  },
  {
    month: 9,
    year: 2021,
    date: new Date('2021-09-05T07:44:46.518Z'),
    val: 8370.76
  },
  {
    month: 10,
    year: 2021,
    date: new Date('2021-10-05T07:44:46.518Z'),
    val: 1629.4900000000002
  },
  {
    month: 11,
    year: 2021,
    date: new Date('2021-11-05T08:44:46.517Z'),
    val: 0
  },
  {
    month: 12,
    year: 2021,
    date: new Date('2021-12-05T08:44:46.517Z'),
    val: 0
  },
  {
    month: 1,
    year: 2022,
    date: new Date('2022-01-05T08:44:46.516Z'),
    val: 0
  },
  {
    month: 2,
    year: 2022,
    date: new Date('2022-02-05T08:44:46.516Z'),
    val: 0
  },
  {
    month: 3,
    year: 2022,
    date: new Date('2022-03-05T08:44:46.515Z'),
    val: 0
  },
  {
    month: 4,
    year: 2022,
    date: new Date('2022-04-05T07:44:46.515Z'),
    val: 0
  },
  {
    month: 5,
    year: 2022,
    date: new Date('2022-05-05T07:44:46.514Z'),
    val: 0
  },
  {
    month: 6,
    year: 2022,
    date: new Date('2022-06-05T07:44:46.513Z'),
    val: 0
  },
  {
    month: 7,
    year: 2022,
    date: new Date('2022-07-05T07:44:46.513Z'),
    val: 0
  },
  {
    month: 8,
    year: 2022,
    date: new Date('2022-08-05T07:44:46.512Z'),
    val: 0
  },
  {
    month: 9,
    year: 2022,
    date: new Date('2022-09-05T07:44:46.511Z'),
    val: 0
  },
  {
    month: 10,
    year: 2022,
    date: new Date('2022-10-05T07:44:46.510Z'),
    val: 0
  },
  {
    month: 11,
    year: 2022,
    date: new Date('2022-11-05T08:44:46.510Z'),
    val: 0
  },
  {
    month: 12,
    year: 2022,
    date: new Date('2022-12-05T08:44:46.509Z'),
    val: 0
  },
  {
    month: 1,
    year: 2023,
    date: new Date('2023-01-05T08:44:46.508Z'),
    val: 0
  }
];

// yeah, I koon, I know
test('renders Graph', () => {
  render(<SalesGraph series={seriesMock} />);
  const textElement = screen.getByText(/monthly sales/i);
  expect(textElement).toBeInTheDocument();
});
