import { render, screen } from '@testing-library/react';
import React from 'react';
import Card from '../../src/components/card/Card';

describe('Card', () => {
  test('test button reset', () => {
    render(<Card img={undefined} descr={undefined} price={undefined} additional={undefined} />);
    expect(screen.queryByRole('listitem')).not.toBeNull();
  })
})