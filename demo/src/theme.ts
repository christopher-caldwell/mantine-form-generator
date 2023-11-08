'use client';
import { MantineColorsTuple, createTheme } from '@mantine/core';

export const orange = '#Ed6c14';
const orangeRange: MantineColorsTuple = [
  '#fff1e4',
  '#ffe2cf',
  '#f9c5a2',
  '#f4a56f',
  '#f08a45',
  '#ee7929',
  // Default index for colors
  orange,
  '#d45f0e',
  '#bd5307',
  '#a54600',
];

export const blue = '#2d4e65';
const blueRange: MantineColorsTuple = [
  '#f1f5f9',
  '#e3e8eb',
  '#c2d0d9',
  '#9eb6c7',
  '#80a0b7',
  '#6d92ae',
  // Default index for colors
  blue,
  '#628cab',
  '#517896',
  '#466b86',
  '#0d85d6',
];

export const theme = createTheme({
  primaryColor: 'blue',
  colors: {
    orange: orangeRange,
    blue: blueRange,
  },
});
