import { render, screen, fireEvent } from '@testing-library/react';
import { useRouter } from 'next/navigation';
import GNB from '@/components/common/gnb';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('GNB Component', () => {
  const push = jest.fn();
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({ push });
  });

  it('renders and handles navigation correctly', () => {
    render(<GNB />);

    const logo = screen.getByText(/옷체통/i);
    expect(logo).toBeInTheDocument();
    fireEvent.click(logo);
    expect(push).toHaveBeenCalledWith('/');

    const guideButton = screen.getByText(/이용 가이드/i);
    expect(guideButton).toBeInTheDocument();
    fireEvent.click(guideButton);
    expect(push).toHaveBeenCalledWith('/guide');
  });
});
