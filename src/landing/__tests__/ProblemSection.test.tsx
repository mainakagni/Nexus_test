import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { ProblemSection } from '../components/ProblemSection'

describe('ProblemSection', () => {
  it('renders a section landmark with accessible label', () => {
    render(<ProblemSection />)
    expect(screen.getByRole('region', { name: /problem/i })).toBeInTheDocument()
  })

  it('renders the headline', () => {
    render(<ProblemSection />)
    expect(
      screen.getByRole('heading', { level: 2 }),
    ).toHaveTextContent('You find out too late.')
  })

  it('renders the margin erosion pain point', () => {
    render(<ProblemSection />)
    expect(
      screen.getByText(
        'Margin erosion shows up in the monthly deck, weeks after it could have been fixed.',
      ),
    ).toBeInTheDocument()
  })

  it('renders the spreadsheet disagreement pain point', () => {
    render(<ProblemSection />)
    expect(
      screen.getByText(
        "Spreadsheets disagree, and nobody can say which number is right.",
      ),
    ).toBeInTheDocument()
  })

  it('renders exactly two pain points', () => {
    render(<ProblemSection />)
    const list = screen.getByRole('list', { name: /pain points/i })
    expect(list.querySelectorAll('li')).toHaveLength(2)
  })

  it('headline is 10 words or fewer', () => {
    render(<ProblemSection />)
    const heading = screen.getByRole('heading', { level: 2 })
    const wordCount = (heading.textContent ?? '').trim().split(/\s+/).length
    expect(wordCount).toBeLessThanOrEqual(10)
  })
})
