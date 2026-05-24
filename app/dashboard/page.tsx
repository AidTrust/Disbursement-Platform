import Link from 'next/link';

const stats = [
  { label: 'Total Disbursed', value: '$0', sub: 'USDC on Algorand', accent: false },
  { label: 'Active Batches', value: '0', sub: 'Pending approval', accent: false },
  { label: 'Recipients Paid', value: '0', sub: 'All time', accent: false },
  { label: 'Success Rate', value: '—', sub: 'Last 30 days', accent: true },
];

const recentBatches = [
  // Empty state for now
];

export default function DashboardPage() {
  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: '2.5rem', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <div>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: '0.35rem' }}>
            Overview
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            Welcome to AidTrust Disburse. Send your first batch to get started.
          </p>
        </div>
        <Link href="/dashboard/batches/new" style={{
          background: 'var(--accent)',
          color: '#0a0f1e',
          padding: '0.625rem 1.25rem',
          borderRadius: 8,
          fontSize: '0.875rem',
          fontWeight: 600,
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
          New Batch
        </Link>
      </div>

      {/* Stats grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '1rem',
        marginBottom: '2.5rem',
      }}>
        {stats.map((stat) => (
          <div key={stat.label} style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: 12,
            padding: '1.5rem',
          }}>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.75rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              {stat.label}
            </div>
            <div style={{
              fontSize: '2rem',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              fontFamily: 'JetBrains Mono, monospace',
              color: stat.accent ? 'var(--accent)' : 'var(--text)',
              marginBottom: '0.25rem',
            }}>
              {stat.value}
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              {stat.sub}
            </div>
          </div>
        ))}
      </div>

      {/* Recent batches */}
      <div style={{
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: 12,
        overflow: 'hidden',
      }}>
        <div style={{
          padding: '1.25rem 1.5rem',
          borderBottom: '1px solid var(--border)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <h2 style={{ fontSize: '1rem', fontWeight: 600 }}>Recent Batches</h2>
          <Link href="/dashboard/batches" style={{ fontSize: '0.8rem', color: 'var(--accent)', textDecoration: 'none' }}>
            View all →
          </Link>
        </div>

        {/* Empty state */}
        <div style={{
          padding: '5rem 2rem',
          textAlign: 'center',
          color: 'var(--text-muted)',
        }}>
          <div style={{
            width: 56,
            height: 56,
            borderRadius: 14,
            background: 'var(--surface-2)',
            border: '1px solid var(--border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.25rem',
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="1.5">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14,2 14,8 20,8"/>
            </svg>
          </div>
          <p style={{ fontWeight: 500, marginBottom: '0.5rem', color: 'var(--text)' }}>No batches yet</p>
          <p style={{ fontSize: '0.875rem', marginBottom: '1.5rem' }}>
            Upload a CSV to create your first disbursement batch
          </p>
          <Link href="/dashboard/batches/new" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'var(--accent)',
            color: '#0a0f1e',
            padding: '0.625rem 1.25rem',
            borderRadius: 8,
            fontSize: '0.875rem',
            fontWeight: 600,
            textDecoration: 'none',
          }}>
            Create first batch
          </Link>
        </div>
      </div>
    </div>
  );
}
