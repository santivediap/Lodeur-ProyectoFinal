import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Search from './Search';

describe('something truthy and falsy', () => {
  it('true to be true', () => {
    expect(true).toBe(true);
  });

  it('false to be false', () => {
    expect(false).toBe(false);
  });
});

describe('Search', () => {
  it('renders headline', () => {
    render(<Search test="¡BUSCA TU PRODUCTO YA!"/>);

    screen.debug();
  });
});