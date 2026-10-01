import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { HeroSection } from '../components/HeroSection'

describe('HeroSection', () => {
  it('renders the headline', () => {
    render(<HeroSection />)
    expect(
      screen.getByRole('heading', { level: 1 }),
    ).toHaveTextContent('Know which accounts need attention today.')
  })

  it('renders the subline', () => {
    render(<HeroSection />)
    expect(
      screen.getByText('Governed revenue intelligence for delivery organizations.'),
    ).toBeInTheDocument()
  })

  it('renders a single CTA button linking to demo', () => {
    render(<HeroSection />)
    const cta = screen.getByRole('link', { name: /book a demo/i })
    expect(cta).toBeInTheDocument()
    expect(cta).toHaveAttribute('href', '#demo')
  })

  it('has a section landmark with accessible label', () => {
    render(<HeroSection />)
    expect(screen.getByRole('region', { name: /hero/i })).toBeInTheDocument()
  })

  it('headline is 10 words or fewer', () => {
    render(<HeroSection />)
    const heading = screen.getByRole('heading', { level: 1 })
    const wordCount = (heading.textContent ?? '').trim().split(/\s+/).length
    expect(wordCount).toBeLessThanOrEqual(10)
  })

  it('subline is 25 words or fewer', () => {
    render(<HeroSection />)
    const subline = screen.getByText(
      'Governed revenue intelligence for delivery organizations.',
    )
    const wordCount = (subline.textContent ?? '').trim().split(/\s+/).length
    expect(wordCount).toBeLessThanOrEqual(25)
  })
})
