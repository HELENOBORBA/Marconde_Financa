import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { StatCard } from './StatCard';
import { Banknote } from 'lucide-react';

describe('StatCard', () => {
  it('should render the title, value, and icon correctly', () => {
    const title = 'Sample Title';
    const value = 'R$ 1.000,00';

    render(<StatCard title={title} value={value} icon={Banknote} />);

    // Assert that the title is in the document
    expect(screen.getByText(title)).toBeInTheDocument();

    // Assert that the value is in the document
    expect(screen.getByText(value)).toBeInTheDocument();
    
    // Assert that an SVG icon is rendered
    const cardElement = screen.getByText(title).closest('div');
    const svgElement = cardElement?.querySelector('svg');
    expect(svgElement).toBeInTheDocument();
  });
});
