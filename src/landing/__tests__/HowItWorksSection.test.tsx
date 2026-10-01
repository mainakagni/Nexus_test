import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { HowItWorksSection } from '../components/HowItWorksSection'

describe('HowItWorksSection', () => {
  it('renders the section heading', () => {
    render(<HowItWorksSection />)
    expect(
      screen.getByRole('heading', { level: 2 }),
    ).toHaveTextContent('How it works')
  })

  it('has a section landmark with accessible label', () => {
    render(<HowItWorksSection />)
    expect(screen.getByRole('region', { name: /how it works/i })).toBeInTheDocument()
  })

  it('renders exactly three items', () => {
    render(<HowItWorksSection />)
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(3)
  })

  it('renders One pulse item with its description', () => {
    render(<HowItWorksSection />)
    expect(screen.getByRole('heading', { level: 3, name: /one pulse/i })).toBeInTheDocument()
    expect(
      screen.getByText(/revenue, cost, margin and forecast per account/i),
    ).toBeInTheDocument()
  })

  it('renders Policy-backed signals item with its description', () => {
    render(<HowItWorksSection />)
    expect(
      screen.getByRole('heading', { level: 3, name: /policy-backed signals/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByText(/margin, SOW, allocation and delivery risk flagged early/i),
    ).toBeInTheDocument()
  })

  it('renders Grounded AI item with its description', () => {
    render(<HowItWorksSection />)
    expect(
      screen.getByRole('heading', { level: 3, name: /grounded ai/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByText(/answers from published data/i),
    ).toBeInTheDocument()
  })

  it('each item description is one line (25 words or fewer)', () => {
    render(<HowItWorksSection />)
    const descriptions = screen
      .getAllByRole('heading', { level: 3 })
      .map((h) => h.nextElementSibling?.textContent ?? '')
    descriptions.forEach((text) => {
      const wordCount = text.trim().split(/\s+/).length
      expect(wordCount).toBeLessThanOrEqual(25)
    })
  })
})
