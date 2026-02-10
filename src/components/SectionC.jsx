import React from 'react'

export default function SectionC({ formData, handleChange }) {
    const options = [
        { value: 'pied', label: 'À pied' },
        { value: 'proche', label: 'Proche' },
        { value: 'eloigne', label: 'Éloigné' },
    ]

    return (
        <div className="card">
            <h2>Commodités</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                <div className="form-group">
                    <label className="form-label">Commerces</label>
                    <select
                        className="form-select"
                        name="commoditesCommerces"
                        value={formData.commoditesCommerces}
                        onChange={handleChange}
                    >
                        <option value="">Sélectionner...</option>
                        {options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                    </select>
                </div>
                <div className="form-group">
                    <label className="form-label">Transports</label>
                    <select
                        className="form-select"
                        name="commoditesTransports"
                        value={formData.commoditesTransports}
                        onChange={handleChange}
                    >
                        <option value="">Sélectionner...</option>
                        {options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                    </select>
                </div>
                <div className="form-group">
                    <label className="form-label">Écoles</label>
                    <select
                        className="form-select"
                        name="commoditesEcoles"
                        value={formData.commoditesEcoles}
                        onChange={handleChange}
                    >
                        <option value="">Sélectionner...</option>
                        {options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                    </select>
                </div>
            </div>

            <div className="form-group">
                <label className="form-label">Situation globale</label>
                <textarea
                    className="form-textarea"
                    rows="2"
                    name="commoditesSituation"
                    value={formData.commoditesSituation}
                    onChange={handleChange}
                    placeholder="Environnement, calme..."
                ></textarea>
            </div>


        </div>
    )
}
