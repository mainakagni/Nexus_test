import React from 'react'

interface Testimonial {
  quote: string
  author: string
  title: string
  company: string
  metric?: { value: string; label: string }
}

const TESTIMONIAL: Testimonial = {
  quote:
    'Margin risk flagged 5.8% below baseline before month-end. We caught it three weeks earlier than our previous process ever would have.',
  author: 'Sarah Chen',
  title: 'VP of Engineering',
  company: 'Meridian Financial',
  metric: { value: '5.8%', label: 'margin risk caught early' },
}

export function ProofSection() {
  return (
    <section
      aria-label="Customer proof"
      style={{
        background: '#F5F7FA',
        borderTop: '1px solid #E3E8EF',
        borderBottom: '1px solid #E3E8EF',
        padding: '64px 32px',
      }}
    >
      <div
        style={{
          maxWidth: 960,
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 40,
        }}
      >
        {/* Eyebrow */}
        <p
          style={{
            margin: 0,
            fontFamily: '"DM Sans", system-ui, sans-serif',
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#5F6D7E',
          }}
        >
          What teams are seeing
        </p>

        {/* Quote card */}
        <figure
          style={{
            margin: 0,
            background: '#FFFFFF',
            border: '1px solid #E3E8EF',
            borderRadius: 16,
            padding: '40px 48px',
            display: 'flex',
            flexDirection: 'column',
            gap: 28,
            boxShadow: '0 1px 4px rgba(27,36,50,0.06)',
          }}
        >
          {/* Metric highlight */}
          {TESTIMONIAL.metric && (
            <div
              style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: 8,
              }}
            >
              <span
                style={{
                  fontFamily: '"JetBrains Mono", monospace',
                  fontVariantNumeric: 'tabular-nums',
                  fontSize: 40,
                  fontWeight: 700,
                  lineHeight: 1,
                  color: '#1B2432',
                  letterSpacing: '-0.02em',
                }}
              >
                {TESTIMONIAL.metric.value}
              </span>
              <span
                style={{
                  fontFamily: '"DM Sans", system-ui, sans-serif',
                  fontSize: 15,
                  fontWeight: 400,
                  color: '#4B5A6C',
                }}
              >
                {TESTIMONIAL.metric.label}
              </span>
            </div>
          )}

          {/* Quote text */}
          <blockquote
            style={{
              margin: 0,
              padding: 0,
              fontFamily: '"DM Sans", system-ui, sans-serif',
              fontSize: 20,
              fontWeight: 400,
              lineHeight: 1.55,
              color: '#1B2432',
              quotes: '"\\201C""\\201D"',
            }}
          >
            <span aria-hidden style={{ marginRight: 2, color: '#C9D3DF' }}>
              &ldquo;
            </span>
            {TESTIMONIAL.quote}
            <span aria-hidden style={{ marginLeft: 2, color: '#C9D3DF' }}>
              &rdquo;
            </span>
          </blockquote>

          {/* Attribution */}
          <figcaption
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
            }}
          >
            {/* Avatar placeholder */}
            <div
              aria-hidden
              style={{
                width: 36,
                height: 36,
                borderRadius: '50%',
                background: '#E9EEF5',
                border: '1px solid #C9D3DF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                fontFamily: '"DM Sans", system-ui, sans-serif',
                fontSize: 13,
                fontWeight: 600,
                color: '#1B2432',
              }}
            >
              {TESTIMONIAL.author
                .split(' ')
                .map((n) => n[0])
                .join('')}
            </div>

            <div>
              <p
                style={{
                  margin: 0,
                  fontFamily: '"DM Sans", system-ui, sans-serif',
                  fontSize: 14,
                  fontWeight: 600,
                  color: '#1B2432',
                  lineHeight: 1.3,
                }}
              >
                {TESTIMONIAL.author}
              </p>
              <p
                style={{
                  margin: 0,
                  fontFamily: '"DM Sans", system-ui, sans-serif',
                  fontSize: 13,
                  fontWeight: 400,
                  color: '#5F6D7E',
                  lineHeight: 1.3,
                }}
              >
                {TESTIMONIAL.title}, {TESTIMONIAL.company}
              </p>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
