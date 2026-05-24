import Link from 'next/link';

const statusColors: Record<string, string> = {
  pending: '#f59e0b',
  approved: '#3b82f6',
  executing: '#8b5cf6',
  completed: '#00d4aa',
  failed: '#ef4444',
};

export default function BatchesPage() {
  return (
    <div>
      <div style={{ marginBottom: '2.5rem', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <div>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: '0.35rem' }}>
            Batches
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            Manage and track all your disbursement batches
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

      {/* Filter bar */}
      <div style={{
        display: 'flex',
        gap: '0.5rem',
        marginBottom: '1.5rem',
      }}>
        {['All', 'Pending', 'Approved', 'Executing', 'Completed', 'Failed'].map((filter) => (
          <button key={filter} style={{
            padding: '0.375rem 0.875rem',
            borderRadius: 100,
            fontSize: '0.8rem',
            fontWeight: 500,
            border: filter === 'All' ? '1px solid var(--accent)' : '1px solid var(--border)',
            background: filter === 'All' ? 'var(--accent-dim)' : 'transparent',
            color: filter === 'All' ? 'var(--accent)' : 'var(--text-muted)',
            cursor: 'pointer',
          }}>
            {filter}
          </button>
        ))}
      </div>

      {/* Table */}
      <div style={{
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: 12,
        overflow: 'hidden',
      }}>
        {/* Table header */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr 1fr',
          padding: '0.875rem 1.5rem',
          borderBottom: '1px solid var(--border)',
          fontSize: '0.75rem',
          color: 'var(--text-muted)',
          fontWeight: 500,
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
        }}>
          <span>Batch Name</span>
          <span>Recipients</span>
          <span>Total Amount</span>
          <span>Status</span>
          <span>Created</span>
          <span></span>
        </div>

        {/* Empty state */}
        <div style={{ padding: '5rem 2rem', textAlign: 'center', color: 'var(--text-muted)' }}>
          <div style={{
            width: 56, height: 56,
            borderRadius: 14,
            background: 'var(--surface-2)',
            border: '1px solid var(--border)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 1.25rem',
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="1.5">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14,2 14,8 20,8"/>
            </svg>
          </div>
          <p style={{ fontWeight: 500, marginBottom: '0.5rem', color: 'var(--text)' }}>No batches yet</p>
          <p style={{ fontSize: '0.875rem', marginBottom: '1.5rem' }}>Create your first batch to start disbursing</p>
          <Link href="/dashboard/batches/new" style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            background: 'var(--accent)', color: '#0a0f1e',
            padding: '0.625rem 1.25rem', borderRadius: 8,
            fontSize: '0.875rem', fontWeight: 600, textDecoration: 'none',
          }}>
            Create first batch
          </Link>
        </div>
      </div>
    </div>
  );
}
