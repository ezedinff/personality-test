import { render,  screen  } from '@testing-library/react'
import Home from '@/pages/index'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)
    const heading = screen.getByRole('heading', { name: /Personality Test/i })
    expect(heading).toBeInTheDocument()
  });

  it('renders a paragraph', () => {
    render(<Home />)
    const paragraph = screen.getByText(/Find out if you are an introvert or an extrovert, and learn how to improve your personality. our test is based on the Myers-Briggs Type Indicator \(MBTI\) test and above all, it's fun and easy to take./i)
    expect(paragraph).toBeInTheDocument()
  });

  it('renders a link', () => {
    render(<Home />)
    const link = screen.getByRole('link', { name: /Take the test/i })
    expect(link).toBeInTheDocument()
  });
});