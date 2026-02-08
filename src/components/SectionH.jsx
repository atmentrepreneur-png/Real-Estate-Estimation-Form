import React from 'react'

export default function SectionH({ formData, handleChange }) {
    return (
        <div className="card">
            <h2>Occupation & Projet</h2>

            <div className="form-group">
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <input
                        type="checkbox"
                        name="occupied"
                        checked={formData.occupied || false}
                        onChange={(e) => handleChange({ target: { name: 'occupied', value: e.target.checked } })}
                    />
                    Bien occupé ?
                </label>
            </div>

            <div className="form-group">
                <label className="form-label">Libre le</label>
                <input
                    type="text"
                    className="form-input"
                    name="libreLe"
                    value={formData.libreLe}
                    onChange={handleChange}
                    placeholder="Date ou Inconnu"
                />
            </div>

            <div className="form-group">
                <label className="form-label">Raison de la vente</label>
                <textarea
                    className="form-textarea"
                    rows="2"
                    name="raisonVente"
                    value={formData.raisonVente}
                    onChange={handleChange}
                ></textarea>
            </div>

            <div className="form-group">
                <label className="form-label">Date d’acquisition (approx)</label>
                <input
                    type="text"
                    className="form-input"
                    name="dateAcquisition"
                    value={formData.dateAcquisition}
                    onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <label className="form-label">Notes occupation</label>
                <textarea
                    className="form-textarea"
                    rows="1"
                    name="notesOccupation"
                    value={formData.notesOccupation}
                    onChange={handleChange}
                ></textarea>
            </div>
        </div>
    )
}
