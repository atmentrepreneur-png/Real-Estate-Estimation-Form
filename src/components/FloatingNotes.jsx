import React, { useState } from 'react'

export default function FloatingNotes({ formData, handleChange }) {
    const [isOpen, setIsOpen] = useState(false)

    if (!isOpen) {
        return (
            <button
                onClick={() => setIsOpen(true)}
                className="btn-primary"
                style={{
                    position: 'fixed',
                    bottom: '2rem',
                    left: '2rem',
                    width: 'auto',
                    padding: '0.75rem 1.25rem',
                    zIndex: 800,
                    boxShadow: 'var(--shadow-lg)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                }}
            >
                <span>📝</span>
                <span>Notes</span>
            </button>
        )
    }

    return (
        <div className="card floating-notes-card" style={{
            position: 'fixed',
            bottom: '2rem',
            left: '2rem',
            width: '320px',
            zIndex: 800,
            margin: 0,
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            animation: 'fadeIn 0.3s ease-out'
        }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h4 style={{ margin: 0 }}>Notes Globales</h4>
                <button
                    onClick={() => setIsOpen(false)}
                    style={{
                        background: 'transparent',
                        border: 'none',
                        fontSize: '1.5rem',
                        lineHeight: 1,
                        cursor: 'pointer',
                        color: 'var(--text-secondary)'
                    }}
                >
                    &times;
                </button>
            </div>

            <textarea
                className="form-textarea"
                rows="6"
                name="notesGlobales"
                value={formData.notesGlobales}
                onChange={handleChange}
                placeholder="Prise de notes rapide..."
                autoFocus
            ></textarea>

            <button
                onClick={() => setIsOpen(false)}
                className="btn-ghost"
                style={{ alignSelf: 'flex-end', fontSize: '0.875rem' }}
            >
                Réduire
            </button>
        </div>
    )
}
