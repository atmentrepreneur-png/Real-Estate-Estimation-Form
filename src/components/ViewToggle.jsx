import React from 'react'

export default function ViewToggle({ viewMode, setViewMode }) {
    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#f3f4f6', padding: '0.25rem', borderRadius: '2rem' }}>
            <button
                onClick={() => setViewMode('menu')}
                style={{
                    background: viewMode === 'menu' ? 'white' : 'transparent',
                    color: viewMode === 'menu' ? 'var(--primary-color)' : '#6b7280',
                    border: 'none',
                    borderRadius: '1.5rem',
                    padding: '0.5rem 1rem',
                    boxShadow: viewMode === 'menu' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
                    cursor: 'pointer',
                    fontWeight: viewMode === 'menu' ? '600' : '400',
                    transition: 'all 0.2s'
                }}
            >
                Menu
            </button>
            <button
                onClick={() => setViewMode('flow')}
                style={{
                    background: viewMode === 'flow' ? 'white' : 'transparent',
                    color: viewMode === 'flow' ? 'var(--primary-color)' : '#6b7280',
                    border: 'none',
                    borderRadius: '1.5rem',
                    padding: '0.5rem 1rem',
                    boxShadow: viewMode === 'flow' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
                    cursor: 'pointer',
                    fontWeight: viewMode === 'flow' ? '600' : '400',
                    transition: 'all 0.2s'
                }}
            >
                Liste
            </button>
        </div>
    )
}
