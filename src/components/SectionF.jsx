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
        const fileArray = Array.from(files)
        setRooms(rooms.map(r => r.id === id ? { ...r, photos: [...r.photos, ...fileArray] } : r))
    }

    return (
        <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                <h2 style={{ fontSize: '1.5rem', margin: 0 }}>Pièces & Photos</h2>
                <button
                    type="button"
                    onClick={addRoom}
                    className="btn-primary"
                    style={{ width: 'auto', padding: '0.5rem 1.25rem' }}
                >
                    + Ajouter une pièce
                </button>
            </div>

            {rooms.length === 0 && (
                <div style={{
                    padding: '3rem',
                    textAlign: 'center',
                    border: '2px dashed var(--border-color)',
                    borderRadius: 'var(--radius-md)',
                    color: 'var(--text-light)'
                }}>
                    <p style={{ margin: 0 }}>Aucune pièce ajoutée.</p>
                    <p style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>Utilisez le bouton flottant ou le bouton ci-dessus pour ajouter des pièces.</p>
                </div>
            )}

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                {rooms.length === 0 && (
                    <div style={{
                        padding: '3rem',
                        textAlign: 'center',
                        border: '2px dashed var(--border-color)',
                        borderRadius: 'var(--radius-md)',
                        color: 'var(--text-light)'
                    }}>
                        <p style={{ margin: 0 }}>Aucune pièce ajoutée.</p>
                        <p style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>Cliquez sur le bouton pour commencer l'inventaire.</p>
                    </div>
                )}

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {rooms.map((room, index) => (
                        <div key={room.id} className="fade-in" style={{
                            background: 'var(--bg-body)',
                            border: '1px solid var(--border-color)',
                            borderRadius: 'var(--radius-md)',
                            padding: '1.5rem',
                            position: 'relative',
                            transition: 'var(--transition-base)'
                        }}>
                            <button
                                type="button"
                                onClick={() => removeRoom(room.id)}
                                style={{
                                    position: 'absolute',
                                    top: '1rem',
                                    right: '1rem',
                                    background: 'transparent',
                                    border: 'none',
                                    color: '#ef4444',
                                    fontSize: '1.5rem',
                                    lineHeight: 1,
                                    cursor: 'pointer',
                                    padding: '0.25rem'
                                }}
                                title="Supprimer la pièce"
                            >
                                &times;
                            </button>

                            <h4 style={{ marginTop: 0, marginBottom: '1rem', color: 'var(--text-main)' }}>Pièce #{index + 1}</h4>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
                                <div className="form-group" style={{ marginBottom: 0 }}>
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
                                <div className="form-group" style={{ marginBottom: 0 }}>
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
                                <div className="form-group" style={{ marginBottom: 0 }}>
                                    <label className="form-label">Surface (m²)</label>
                                    <input
                                        type="number"
                                        className="form-input"
                                        value={room.surface}
                                        onChange={(e) => updateRoom(room.id, 'surface', e.target.value)}
                                    />
                                </div>
                                <div className="form-group" style={{ marginBottom: 0 }}>
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
                                <div style={{
                                    border: '1px dashed var(--border-color)',
                                    padding: '1rem',
                                    borderRadius: 'var(--radius-md)',
                                    background: 'white'
                                }}>
                                    <input
                                        type="file"
                                        multiple
                                        accept="image/*"
                                        style={{ width: '100%' }}
                                        onChange={(e) => handlePhotoUpload(room.id, e.target.files)}
                                    />
                                    {room.photos.length > 0 && (
                                        <div style={{ marginTop: '0.5rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                            {room.photos.map((p, idx) => (
                                                <span key={idx} style={{
                                                    fontSize: '0.75rem',
                                                    background: 'var(--primary-color)',
                                                    color: 'white',
                                                    padding: '2px 8px',
                                                    borderRadius: '12px'
                                                }}>
                                                    {p.name}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="form-group" style={{ marginBottom: 0 }}>
                                <label className="form-label">Notes pièce</label>
                                <textarea
                                    className="form-textarea"
                                    rows="1"
                                    value={room.notes}
                                    onChange={(e) => updateRoom(room.id, 'notes', e.target.value)}
                                    placeholder="Observations particulières..."
                                ></textarea>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            )
}
