import React from 'react'

const ITEMS = [
  {
    title: 'One pulse',
    description: 'Revenue, cost, margin and forecast per account — in one view.',
  },
  {
    title: 'Policy-backed signals',
    description: 'Margin, SOW, allocation and delivery risk flagged early.',
  },
  {
    title: 'Grounded AI',
    description: 'Answers from published data, or says it can\'t.',
  },
]

export function HowItWorksSection() {
  return (
    <section
      aria-label="How it works"
      style={{
        background: '#F5F7FA',
        padding: '80px 32px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          maxWidth: 720,
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 48,
        }}
      >
        <h2
          style={{
            margin: 0,
            fontFamily: '"DM Sans", system-ui, sans-serif',
            fontSize: 32,
            fontWeight: 700,
            lineHeight: 1.25,
            letterSpacing: '-0.02em',
            color: '#1B2432',
          }}
        >
          How it works
        </h2>

        <ol
          aria-label="Product capabilities"
          style={{
            margin: 0,
            padding: 0,
            listStyle: 'none',
            display: 'flex',
            flexDirection: 'column',
            gap: 32,
            width: '100%',
          }}
        >
          {ITEMS.map((item) => (
            <li
              key={item.title}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
              }}
            >
              <h3
                style={{
                  margin: 0,
                  fontFamily: '"DM Sans", system-ui, sans-serif',
                  fontSize: 20,
                  fontWeight: 600,
                  lineHeight: 1.3,
                  color: '#1B2432',
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  margin: 0,
                  fontFamily: '"DM Sans", system-ui, sans-serif',
                  fontSize: 16,
                  fontWeight: 400,
                  lineHeight: 1.6,
                  color: '#4B5A6C',
                }}
              >
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
