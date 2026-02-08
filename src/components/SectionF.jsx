import React from 'react'

export default function SectionF({ rooms, setRooms }) {
    const roomTypes = [
        'Entrée', 'Séjour', 'Salle à manger', 'Cuisine',
        'Chambre', 'Salle de bains', 'Salle d’eau', 'WC',
        'Bureau', 'Dégagement', 'Cellier', 'Buanderie', 'Autre'
    ]

    const addRoom = () => {
        setRooms([...rooms, {
            id: Date.now(),
            type: '',
            surface: '',
            exposition: '',
            photos: [],
            notes: ''
        }])
    }

    const updateRoom = (id, field, value) => {
        setRooms(rooms.map(r => r.id === id ? { ...r, [field]: value } : r))
    }

    const removeRoom = (id) => {
        setRooms(rooms.filter(r => r.id !== id))
    }

    const handlePhotoUpload = (id, files) => {
        // files is a FileList
        // We store them as an array of files/urls
        // For now, let's just store the file objects
        const fileArray = Array.from(files)
        setRooms(rooms.map(r => r.id === id ? { ...r, photos: [...r.photos, ...fileArray] } : r))
    }

    return (
        <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2>Pièces & Photos</h2>
                <button
                    type="button"
                    onClick={addRoom}
                    style={{
                        background: 'var(--primary-color)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        padding: '0.5rem 1rem',
                        fontSize: '0.875rem'
                    }}
                >
                    + Ajouter une pièce
                </button>
            </div>

            {rooms.length === 0 && (
                <p style={{ color: '#9ca3af', fontStyle: 'italic', marginTop: '1rem' }}>
                    Aucune pièce ajoutée. Cliquez sur le bouton pour commencer.
                </p>
            )}

            <div style={{ marginTop: '1rem' }}>
                {rooms.map((room, index) => (
                    <div key={room.id} style={{
                        background: '#f9fafb',
                        border: '1px solid #e5e7eb',
                        borderRadius: '8px',
                        padding: '1rem',
                        marginBottom: '1rem',
                        position: 'relative'
                    }}>
                        <button
                            type="button"
                            onClick={() => removeRoom(room.id)}
                            style={{
                                position: 'absolute',
                                top: '0.5rem',
                                right: '0.5rem',
                                background: 'transparent',
                                border: 'none',
                                color: '#ef4444',
                                fontSize: '1.25rem',
                                cursor: 'pointer'
                            }}
                            title="Supprimer la pièce"
                        >
                            &times;
                        </button>

                        <h4 style={{ marginTop: 0, marginBottom: '0.5rem', color: '#4b5563' }}>Pièce #{index + 1}</h4>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.5rem' }}>
                            <div className="form-group">
                                <label className="form-label">Type</label>
                                <select
                                    className="form-select"
                                    value={room.type}
                                    onChange={(e) => updateRoom(room.id, 'type', e.target.value)}
                                >
                                    <option value="">Sélectionner...</option>
                                    {roomTypes.map(t => <option key={t} value={t}>{t}</option>)}
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="form-label">Vitrage</label>
                                <select
                                    className="form-select"
                                    value={room.windowType || ''}
                                    onChange={(e) => updateRoom(room.id, 'windowType', e.target.value)}
                                >
                                    <option value="">Sélectionner...</option>
                                    <option value="PVC double">PVC double</option>
                                    <option value="Simple">Simple</option>
                                    <option value="Bois double">Bois double</option>
                                    <option value="Autre">Autre</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="form-label">Surface (m²)</label>
                                <input
                                    type="number"
                                    className="form-input"
                                    value={room.surface}
                                    onChange={(e) => updateRoom(room.id, 'surface', e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Exposition</label>
                                <input
                                    type="text"
                                    className="form-input"
                                    value={room.exposition}
                                    onChange={(e) => updateRoom(room.id, 'exposition', e.target.value)}
                                    placeholder="Nord, Sud..."
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="form-label">Photos</label>
                            <input
                                type="file"
                                multiple
                                accept="image/*"
                                className="form-input"
                                onChange={(e) => handlePhotoUpload(room.id, e.target.files)}
                            />
                            {room.photos.length > 0 && (
                                <div style={{ marginTop: '0.5rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                    {room.photos.map((p, idx) => (
                                        <span key={idx} style={{
                                            fontSize: '0.75rem',
                                            background: '#e5e7eb',
                                            padding: '2px 6px',
                                            borderRadius: '4px'
                                        }}>
                                            {p.name}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="form-group">
                            <label className="form-label">Notes pièce</label>
                            <textarea
                                className="form-textarea"
                                rows="1"
                                value={room.notes}
                                onChange={(e) => updateRoom(room.id, 'notes', e.target.value)}
                            ></textarea>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
