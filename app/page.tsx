export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      background: 'var(--bg)',
      display: 'flex',
      flexDirection: 'column',
    }}>
      {/* Nav */}
      <nav style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1.5rem 3rem',
        borderBottom: '1px solid var(--border)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{
            width: 32, height: 32,
            background: 'var(--accent)',
            borderRadius: 8,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0a0f1e" strokeWidth="2.5">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>
          <span style={{ fontWeight: 600, fontSize: '1rem', letterSpacing: '-0.02em' }}>
            AidTrust <span style={{ color: 'var(--accent)' }}>Disburse</span>
          </span>
        </div>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <a href="/login" style={{
            color: 'var(--text-muted)',
            textDecoration: 'none',
            fontSize: '0.875rem',
            fontWeight: 500,
            transition: 'color 0.2s',
          }}>Sign in</a>
          <a href="/login" style={{
            background: 'var(--accent)',
            color: '#0a0f1e',
            padding: '0.5rem 1.25rem',
            borderRadius: 8,
            fontSize: '0.875rem',
            fontWeight: 600,
            textDecoration: 'none',
          }}>Get started</a>
        </div>
      </nav>

      {/* Hero */}
      <section style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '6rem 2rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Background glow */}
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 600,
          height: 600,
          background: 'radial-gradient(circle, var(--accent-dim) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: 100,
          padding: '0.375rem 1rem',
          marginBottom: '2rem',
          fontSize: '0.75rem',
          color: 'var(--accent)',
          fontWeight: 500,
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
        }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', display: 'inline-block' }} />
          Built on Algorand · Powered by USDC
        </div>

        <h1 style={{
          fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
          fontWeight: 700,
          letterSpacing: '-0.04em',
          lineHeight: 1.05,
          maxWidth: 800,
          marginBottom: '1.5rem',
        }}>
          Send aid to thousands.<br />
          <span style={{ color: 'var(--accent)' }}>In minutes, not weeks.</span>
        </h1>

        <p style={{
          fontSize: '1.125rem',
          color: 'var(--text-muted)',
          maxWidth: 520,
          lineHeight: 1.7,
          marginBottom: '3rem',
        }}>
          Compliant stablecoin disbursements at scale. Upload a CSV, get approvals, and execute thousands of payments on-chain — monitored live in AidTrust.
        </p>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href="/login" style={{
            background: 'var(--accent)',
            color: '#0a0f1e',
            padding: '0.875rem 2rem',
            borderRadius: 10,
            fontSize: '1rem',
            fontWeight: 600,
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}>
            Start disbursing
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a href="https://aidtrust.io" target="_blank" style={{
            background: 'transparent',
            color: 'var(--text)',
            padding: '0.875rem 2rem',
            borderRadius: 10,
            fontSize: '1rem',
            fontWeight: 500,
            textDecoration: 'none',
            border: '1px solid var(--border)',
          }}>
            View AidTrust Portal →
          </a>
        </div>
      </section>

      {/* Stats bar */}
      <section style={{
        borderTop: '1px solid var(--border)',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        padding: '2.5rem 3rem',
        gap: '2rem',
      }}>
        {[
          { value: '< 10 min', label: 'Time to first payout' },
          { value: '> 99%', label: 'Batch success rate' },
          { value: '1M+', label: 'Recipients supported' },
        ].map((stat) => (
          <div key={stat.label} style={{ textAlign: 'center' }}>
            <div style={{
              fontSize: '2rem',
              fontWeight: 700,
              color: 'var(--accent)',
              letterSpacing: '-0.03em',
              fontFamily: 'JetBrains Mono, monospace',
            }}>{stat.value}</div>
            <div style={{
              fontSize: '0.875rem',
              color: 'var(--text-muted)',
              marginTop: '0.25rem',
            }}>{stat.label}</div>
          </div>
        ))}
      </section>
    </main>
  );
}
