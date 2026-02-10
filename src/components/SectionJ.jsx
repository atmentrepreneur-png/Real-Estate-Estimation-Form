import React from 'react'

export default function SectionJ({ formData, handleChange }) {
    return (
        <div className="card">
            <h2>Contacts</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                <div className="form-group">
                    <label className="form-label">Civilité</label>
                    <select
                        className="form-select"
                        name="propCivilite"
                        value={formData.propCivilite}
                        onChange={handleChange}
                    >
                        <option value="">...</option>
                        <option value="M">M</option>
                        <option value="Mme">Mme</option>
                        <option value="Mlle">Mlle</option>
                        <option value="SCI">SCI</option>
                    </select>
                </div>
                <div className="form-group">
                    <label className="form-label">Nom</label>
                    <input
                        type="text"
                        className="form-input"
                        name="propNom"
                        value={formData.propNom}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Prénom</label>
                    <input
                        type="text"
                        className="form-input"
                        name="propPrenom"
                        value={formData.propPrenom}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className="form-group">
                <label className="form-label">Type</label>
                <select
                    className="form-select"
                    name="propType"
                    value={formData.propType}
                    onChange={handleChange}
                >
                    <option value="physique">Personne physique</option>
                    <option value="sci">SCI</option>
                </select>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                    <label className="form-label">Téléphone</label>
                    <input
                        type="text"
                        className="form-input"
                        name="propTel"
                        value={formData.propTel}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-input"
                        name="propEmail"
                        value={formData.propEmail}
                        onChange={handleChange}
                    />
                </div>
            </div>

            {/* Syndic removed */}

            <div className="form-group">
                <label className="form-label">Remarques contacts / disponibilité</label>
                <textarea
                    className="form-textarea"
                    rows="2"
                    name="notesContacts"
                    value={formData.notesContacts}
                    onChange={handleChange}
                ></textarea>
            </div>
        </div>
    )
}
