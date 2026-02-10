import React from 'react'

export default function FloatingAddButton({ onClick, label = "Ajouter Photo" }) {
    return (
        <button
            onClick={onClick}
            className="btn-primary"
            style={{
                position: 'fixed',
                bottom: '2rem',
                right: '2rem',
                width: 'auto',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
                zIndex: 900,
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
            }}
        >
            <span style={{ fontSize: '1.5rem', lineHeight: 1 }}>+</span>
            <span>{label}</span>
        </button>
    )
}
