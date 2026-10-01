import React from 'react'

const PAIN_POINTS = [
  'Margin erosion shows up in the monthly deck, weeks after it could have been fixed.',
  'Spreadsheets disagree, and nobody can say which number is right.',
]

export function ProblemSection() {
  return (
    <section
      aria-label="Problem"
      style={{
        background: '#FFFFFF',
        padding: '80px 32px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          maxWidth: 640,
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 32,
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
          You find out too late.
        </h2>

        <ul
          aria-label="Pain points"
          style={{
            margin: 0,
            padding: 0,
            listStyle: 'none',
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
          }}
        >
          {PAIN_POINTS.map((point) => (
            <li
              key={point}
              style={{
                fontFamily: '"DM Sans", system-ui, sans-serif',
                fontSize: 18,
                fontWeight: 400,
                lineHeight: 1.6,
                color: '#4B5A6C',
              }}
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
