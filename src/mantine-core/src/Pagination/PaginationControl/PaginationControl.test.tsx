import React from 'react';
import { itSupportsSystemProps, itIsPolymorphic } from '@mantine/tests';
import { render, screen } from '@testing-library/react';
import { PaginationControl, PaginationControlProps } from './PaginationControl';

const defaultProps: PaginationControlProps = {
  children: 10,
};

describe('@mantine/core/PaginationControl', () => {
  itIsPolymorphic(PaginationControl, defaultProps);
  itSupportsSystemProps({
    component: PaginationControl,
    props: defaultProps,
    refType: HTMLButtonElement,
    displayName: '@mantine/core/PaginationControl',
    providerName: 'PaginationControl',
  });

  it('has data-active attribute when active prop is set', () => {
    const { rerender } = render(<PaginationControl {...defaultProps} active={false} />);
    expect(screen.getByRole('button')).not.toHaveAttribute('data-active');

    rerender(<PaginationControl {...defaultProps} active />);
    expect(screen.getByRole('button')).toHaveAttribute('data-active');
  });

  it('has data-disabled attribute when disabled prop is set', () => {
    const { rerender } = render(<PaginationControl {...defaultProps} disabled={false} />);
    expect(screen.getByRole('button')).not.toHaveAttribute('data-disabled');

    rerender(<PaginationControl {...defaultProps} disabled />);
    expect(screen.getByRole('button')).toHaveAttribute('data-disabled');
  });
});