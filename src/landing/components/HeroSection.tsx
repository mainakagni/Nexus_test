import React from 'react'

export function HeroSection() {
  return (
    <section
      aria-label="Hero"
      style={{
        background: '#F5F7FA',
        padding: '96px 32px',
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
          gap: 24,
        }}
      >
        <h1
          style={{
            margin: 0,
            fontFamily: '"DM Sans", system-ui, sans-serif',
            fontSize: 40,
            fontWeight: 650,
            lineHeight: 1.2,
            letterSpacing: '-0.03em',
            color: '#1B2432',
          }}
        >
          Know which accounts need attention today.
        </h1>

        <p
          style={{
            margin: 0,
            fontFamily: '"DM Sans", system-ui, sans-serif',
            fontSize: 18,
            fontWeight: 400,
            lineHeight: 1.5,
            color: '#4B5A6C',
            maxWidth: 560,
          }}
        >
          Governed revenue intelligence for delivery organizations.
        </p>

        <a
          href="#demo"
          style={{
            display: 'inline-block',
            marginTop: 8,
            padding: '12px 28px',
            background: '#1B2432',
            color: '#FFFFFF',
            fontFamily: '"DM Sans", system-ui, sans-serif',
            fontSize: 15,
            fontWeight: 600,
            lineHeight: 1,
            borderRadius: 12,
            textDecoration: 'none',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Book a demo
        </a>
      </div>
    </section>
  )
}
