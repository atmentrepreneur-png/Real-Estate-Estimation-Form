import React from 'react'

export default function SectionB({ formData, handleChange }) {
    return (
        <div className="card">
            <h2>Fiscalité & Charges</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                    <label className="form-label">Charges mensuelles (€)</label>
                    <input
                        type="number"
                        className="form-input"
                        name="charges"
                        value={formData.charges}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Taxe foncière (€)</label>
                    <input
                        type="number"
                        className="form-input"
                        name="taxeFonciere"
                        value={formData.taxeFonciere}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="form-group">
                <label className="form-label">Observations charges / fiscalité</label>
                <textarea
                    className="form-textarea"
                    rows="2"
                    name="notesFiscal"
                    value={formData.notesFiscal}
                    onChange={handleChange}
                ></textarea>
            </div>
        </div>
    )
}
