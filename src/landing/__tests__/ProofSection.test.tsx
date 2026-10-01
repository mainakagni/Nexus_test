import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { ProofSection } from '../components/ProofSection'

describe('ProofSection', () => {
  it('renders the customer quote', () => {
    render(<ProofSection />)
    expect(
      screen.getByText(
        /Margin risk flagged 5\.8% below baseline before month-end/i,
      ),
    ).toBeInTheDocument()
  })

  it('renders the metric value prominently', () => {
    render(<ProofSection />)
    expect(screen.getByText('5.8%')).toBeInTheDocument()
    expect(screen.getByText('margin risk caught early')).toBeInTheDocument()
  })

  it('renders attribution with author and company', () => {
    render(<ProofSection />)
    expect(screen.getByText('Sarah Chen')).toBeInTheDocument()
    expect(screen.getByText(/VP of Engineering, Meridian Financial/i)).toBeInTheDocument()
  })

  it('has a section landmark with accessible label', () => {
    render(<ProofSection />)
    expect(screen.getByRole('region', { name: /customer proof/i })).toBeInTheDocument()
  })

  it('renders the eyebrow label', () => {
    render(<ProofSection />)
    expect(screen.getByText(/what teams are seeing/i)).toBeInTheDocument()
  })
})
