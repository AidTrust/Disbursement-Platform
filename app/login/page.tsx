import Link from 'next/link';

export default function LoginPage() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--bg)',
      padding: '2rem',
    }}>
      <div style={{ width: '100%', maxWidth: 400 }}>
        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <Link href="/" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
              width: 40, height: 40,
              background: 'var(--accent)',
              borderRadius: 10,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0a0f1e" strokeWidth="2.5">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <span style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--text)', letterSpacing: '-0.02em' }}>
              AidTrust <span style={{ color: 'var(--accent)' }}>Disburse</span>
            </span>
          </Link>
        </div>

        {/* Card */}
        <div style={{
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: 16,
          padding: '2rem',
        }}>
          <h1 style={{ fontSize: '1.35rem', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '0.35rem' }}>
            Sign in
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '1.75rem' }}>
            Enter your credentials to access your organization
          </p>

          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 500, marginBottom: '0.5rem', color: 'var(--text-muted)' }}>
              Email address
            </label>
            <input type="email" placeholder="you@organization.org" style={{
              width: '100%',
              background: 'var(--surface-2)',
              border: '1px solid var(--border)',
              borderRadius: 8,
              padding: '0.75rem 1rem',
              color: 'var(--text)',
              fontSize: '0.9rem',
              outline: 'none',
            }} />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 500, marginBottom: '0.5rem', color: 'var(--text-muted)' }}>
              Password
            </label>
            <input type="password" placeholder="••••••••" style={{
              width: '100%',
              background: 'var(--surface-2)',
              border: '1px solid var(--border)',
              borderRadius: 8,
              padding: '0.75rem 1rem',
              color: 'var(--text)',
              fontSize: '0.9rem',
              outline: 'none',
            }} />
          </div>

          <Link href="/dashboard" style={{
            display: 'block',
            width: '100%',
            background: 'var(--accent)',
            color: '#0a0f1e',
            padding: '0.875rem',
            borderRadius: 8,
            fontSize: '0.9rem',
            fontWeight: 600,
            textDecoration: 'none',
            textAlign: 'center',
          }}>
            Sign in →
          </Link>
        </div>

        <p style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
          Need access?{' '}
          <a href="mailto:hello@aidtrust.io" style={{ color: 'var(--accent)', textDecoration: 'none' }}>
            Contact your administrator
          </a>
        </p>
      </div>
    </div>
  );
}
