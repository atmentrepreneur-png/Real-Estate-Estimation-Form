import React, { useState, useRef, useEffect } from 'react'

export default function SingleRoomForm({ onSave, onCancel }) {
    const fileInputRef = useRef(null)
    const [room, setRoom] = useState({
        id: Date.now(),
        type: '',
        surface: '',
        exposition: '',
        windowType: '',
        photos: [],
        notes: ''
    })

    const roomTypes = [
        'Entrée', 'Séjour', 'Salle à manger', 'Cuisine',
        'Chambre', 'Salle de bains', 'Salle d’eau', 'WC',
        'Bureau', 'Dégagement', 'Cellier', 'Buanderie', 'Autre'
    ]

    // Auto-open camera on mount if requested? 
    // User said "button prominent en haut for access a la camera".
    // We won't auto-open, but make it the first big button.

    const handlePhotoChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            const newPhotos = Array.from(e.target.files)
            setRoom(prev => ({ ...prev, photos: [...prev.photos, ...newPhotos] }))
        }
    }

    const handleSave = () => {
        // Basic validation
        if (!room.type && room.photos.length === 0) {
            if (!confirm("Sauvegarder sans type de pièce ni photo ?")) return
        }
        onSave(room)
    }

    return (
        <div className="fade-in">
            {/* Prominent Camera Button */}
            <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
                <button
                    type="button"
                    onClick={() => fileInputRef.current.click()}
                    className="btn-primary"
                    style={{
                        background: 'linear-gradient(135deg, #0ea5e9, #0284c7)',
                        padding: '1.5rem',
                        fontSize: '1.25rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '1rem',
                        width: '100%',
                        boxShadow: '0 10px 25px -5px rgba(14, 165, 233, 0.4)'
                    }}
                >
                    <span style={{ fontSize: '2rem' }}>📸</span>
                    <div>
                        <div style={{ fontWeight: 700 }}>Prendre Photos</div>
                        <div style={{ fontSize: '0.875rem', fontWeight: 400, opacity: 0.9 }}>Ajouter à cette pièce</div>
                    </div>
                </button>
                <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    accept="image/*"
                    capture="environment"
                    style={{ display: 'none' }}
                    onChange={handlePhotoChange}
                />
            </div>

            {/* Photo Preview */}
            {room.photos.length > 0 && (
                <div style={{
                    display: 'flex',
                    gap: '0.5rem',
                    overflowX: 'auto',
                    padding: '0.5rem',
                    marginBottom: '1.5rem',
                    background: '#f1f5f9',
                    borderRadius: '8px'
                }}>
                    {room.photos.map((p, idx) => (
                        <div key={idx} style={{
                            flexShrink: 0,
                            width: '80px',
                            height: '80px',
                            background: '#cbd5e1',
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '0.7rem',
                            textAlign: 'center',
                            overflow: 'hidden'
                        }}>
                            {/* In a real app we'd create object URLs */}
                            📷 {p.name.substring(0, 10)}...
                        </div>
                    ))}
                </div>
            )}

            {/* Room Details Form */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div className="form-group">
                    <label className="form-label">Type de pièce</label>
                    <select
                        className="form-select"
                        value={room.type}
                        onChange={e => setRoom({ ...room, type: e.target.value })}
                        autoFocus
                    >
                        <option value="">Sélectionner...</option>
                        {roomTypes.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="form-group">
                        <label className="form-label">Surface (m²)</label>
                        <input
                            type="number"
                            className="form-input"
                            value={room.surface}
                            onChange={e => setRoom({ ...room, surface: e.target.value })}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Exposition</label>
                        <input
                            type="text"
                            className="form-input"
                            value={room.exposition}
                            onChange={e => setRoom({ ...room, exposition: e.target.value })}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label className="form-label">Vitrage</label>
                    <select
                        className="form-select"
                        value={room.windowType}
                        onChange={e => setRoom({ ...room, windowType: e.target.value })}
                    >
                        <option value="">Sélectionner...</option>
                        <option value="PVC double">PVC double</option>
                        <option value="Simple">Simple</option>
                        <option value="Bois double">Bois double</option>
                        <option value="Autre">Autre</option>
                    </select>
                </div>

                <div className="form-group">
                    <label className="form-label">Notes</label>
                    <textarea
                        className="form-textarea"
                        rows="2"
                        value={room.notes}
                        onChange={e => setRoom({ ...room, notes: e.target.value })}
                    ></textarea>
                </div>
            </div>

            {/* Actions */}
            <div style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <button
                    type="button"
                    onClick={onCancel}
                    className="btn-ghost"
                    style={{ textAlign: 'center', border: '1px solid var(--border-color)' }}
                >
                    Annuler
                </button>
                <button
                    type="button"
                    onClick={handleSave}
                    className="btn-primary"
                >
                    Enregistrer la pièce
                </button>
            </div>
        </div>
    )
}
