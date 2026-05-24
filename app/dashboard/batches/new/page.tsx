'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function NewBatchPage() {
  const [dragOver, setDragOver] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [batchName, setBatchName] = useState('');

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const dropped = e.dataTransfer.files[0];
    if (dropped?.name.endsWith('.csv')) setFile(dropped);
  };

  return (
    <div style={{ maxWidth: 720 }}>
      {/* Header */}
      <div style={{ marginBottom: '2.5rem' }}>
        <Link href="/dashboard/batches" style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.375rem',
          color: 'var(--text-muted)', fontSize: '0.85rem', textDecoration: 'none',
          marginBottom: '1rem',
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back to Batches
        </Link>
        <h1 style={{ fontSize: '1.75rem', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: '0.35rem' }}>
          New Disbursement Batch
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          Upload a CSV file with recipient wallet addresses and amounts
        </p>
      </div>

      {/* Step 1: Batch name */}
      <div style={{
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: 12,
        padding: '1.5rem',
        marginBottom: '1rem',
      }}>
        <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.75rem' }}>
          Batch Name
        </label>
        <input
          type="text"
          placeholder="e.g. Uganda Relief — May 2026"
          value={batchName}
          onChange={(e) => setBatchName(e.target.value)}
          style={{
            width: '100%',
            background: 'var(--surface-2)',
            border: '1px solid var(--border)',
            borderRadius: 8,
            padding: '0.75rem 1rem',
            color: 'var(--text)',
            fontSize: '0.9rem',
            outline: 'none',
          }}
        />
      </div>

      {/* Step 2: CSV Upload */}
      <div style={{
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: 12,
        padding: '1.5rem',
        marginBottom: '1rem',
      }}>
        <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.75rem' }}>
          Upload CSV
        </label>

        {/* Drop zone */}
        <div
          onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
          onDragLeave={() => setDragOver(false)}
          onDrop={handleDrop}
          style={{
            border: `2px dashed ${dragOver ? 'var(--accent)' : file ? 'var(--accent)' : 'var(--border)'}`,
            borderRadius: 10,
            padding: '3rem 2rem',
            textAlign: 'center',
            background: dragOver ? 'var(--accent-dim)' : file ? 'var(--accent-dim)' : 'var(--surface-2)',
            transition: 'all 0.2s',
            cursor: 'pointer',
          }}
          onClick={() => document.getElementById('csv-input')?.click()}
        >
          <input
            id="csv-input"
            type="file"
            accept=".csv"
            style={{ display: 'none' }}
            onChange={(e) => setFile(e.target.files?.[0] || null)}
          />
          {file ? (
            <>
              <div style={{
                width: 48, height: 48,
                background: 'var(--accent)',
                borderRadius: 12,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 1rem',
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0a0f1e" strokeWidth="2.5">
                  <polyline points="20,6 9,17 4,12"/>
                </svg>
              </div>
              <p style={{ fontWeight: 600, color: 'var(--accent)', marginBottom: '0.25rem' }}>{file.name}</p>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                {(file.size / 1024).toFixed(1)} KB · Click to replace
              </p>
            </>
          ) : (
            <>
              <div style={{
                width: 48, height: 48,
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 12,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 1rem',
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="1.5">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="17,8 12,3 7,8"/><line x1="12" y1="3" x2="12" y2="15"/>
                </svg>
              </div>
              <p style={{ fontWeight: 500, marginBottom: '0.35rem' }}>Drop your CSV here</p>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>or click to browse</p>
            </>
          )}
        </div>

        {/* CSV format hint */}
        <div style={{
          marginTop: '1rem',
          padding: '0.875rem 1rem',
          background: 'var(--surface-2)',
          borderRadius: 8,
          border: '1px solid var(--border)',
        }}>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.5rem', fontWeight: 500 }}>
            Required CSV format:
          </p>
          <code style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.75rem',
            color: 'var(--accent)',
            display: 'block',
          }}>
            wallet_address, amount_usdc, reference_id
          </code>
        </div>
      </div>

      {/* Actions */}
      <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end' }}>
        <Link href="/dashboard/batches" style={{
          padding: '0.75rem 1.5rem',
          borderRadius: 8,
          fontSize: '0.875rem',
          fontWeight: 500,
          color: 'var(--text-muted)',
          textDecoration: 'none',
          border: '1px solid var(--border)',
        }}>
          Cancel
        </Link>
        <button
          disabled={!file || !batchName}
          style={{
            padding: '0.75rem 1.5rem',
            borderRadius: 8,
            fontSize: '0.875rem',
            fontWeight: 600,
            background: file && batchName ? 'var(--accent)' : 'var(--surface-2)',
            color: file && batchName ? '#0a0f1e' : 'var(--text-muted)',
            border: 'none',
            cursor: file && batchName ? 'pointer' : 'not-allowed',
            transition: 'all 0.2s',
          }}
        >
          Continue to Review →
        </button>
      </div>
    </div>
  );
}
