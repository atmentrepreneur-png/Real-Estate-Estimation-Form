import React from 'react'

export default function SectionI({ formData, handleChange }) {
    return (
        <div className="card">
            <h2>I. Visite</h2>
            <div className="form-group">
                <label className="form-label">Type de visite</label>
                <select
                    className="form-select"
                    name="visiteType"
                    value={formData.visiteType}
                    onChange={handleChange}
                >
                    <option value="proprietaire">Propriétaire</option>
                    <option value="autre">Autre (Locataire, Gardien...)</option>
                </select>
            </div>

            {formData.visiteType === 'proprietaire' ? (
                <div style={{ padding: '1rem', background: '#f0f9ff', borderRadius: '8px', color: '#0369a1', marginBottom: '1rem' }}>
                    <p style={{ margin: 0 }}>Voir coordonnées contact en haut de page.</p>
                </div>
            ) : (
                <>
                    <div className="form-group">
                        <label className="form-label">Nom visiteur</label>
                        <input
                            type="text"
                            className="form-input"
                            name="visiteNom"
                            value={formData.visiteNom}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Téléphone</label>
                        <input
                            type="text"
                            className="form-input"
                            name="visiteTel"
                            value={formData.visiteTel}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Qualité</label>
                        <select
                            className="form-select"
                            name="visiteQualite"
                            value={formData.visiteQualite}
                            onChange={handleChange}
                        >
                            <option value="">Sélectionner...</option>
                            <option value="locataire">Locataire</option>
                            <option value="gardien">Gardien</option>
                            <option value="autre">Autre</option>
                        </select>
                    </div>
                </>
            )}
            <div className="form-group">
                <label className="form-label">Infos pratiques visite</label>
                <textarea
                    className="form-textarea"
                    rows="1"
                    name="notesVisite"
                    value={formData.notesVisite}
                    onChange={handleChange}
                ></textarea>
            </div>
        </div>
    )
}
