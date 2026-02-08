import React, { useState } from 'react'

export default function FloatingNotes({ formData, handleChange }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div
                style={{
                    position: 'fixed',
                    bottom: '20px',
                    right: '20px',
                    zIndex: 1000,
                }}
            >
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        background: 'var(--primary-color)',
                        color: 'white',
                        border: 'none',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                        fontSize: '1.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer'
                    }}
                >
                    📝
                </button>
            </div>

            {isOpen && (
                <div
                    style={{
                        position: 'fixed',
                        bottom: '90px',
                        right: '20px',
                        width: '300px',
                        height: '400px',
                        background: 'white',
                        boxShadow: '0 10px 15px rgba(0,0,0,0.1)',
                        borderRadius: '8px',
                        padding: '1rem',
                        zIndex: 1000,
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                        <h3 style={{ fontSize: '1rem' }}>Notes rapides</h3>
                        <button
                            type="button"
                            onClick={() => setIsOpen(false)}
                            style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.25rem' }}
                        >
                            &times;
                        </button>
                    </div>
                    <textarea
                        style={{
                            flex: 1,
                            width: '100%',
                            resize: 'none',
                            border: '1px solid #e5e7eb',
                            borderRadius: '4px',
                            padding: '0.5rem'
                        }}
                        placeholder="Prendre des notes..."
                        name="notesGlobales"
                        value={formData.notesGlobales}
                        onChange={handleChange}
                    ></textarea>
                </div>
            )}
        </>
    )
}
