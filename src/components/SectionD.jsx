import React from 'react'

export default function SectionD({ formData, handleChange, handleMultiSelectChange }) {
    const energies = ['Electrique', 'Gaz', 'Fioul', 'Autre']
    const diffusions = ['Radiateurs', 'Plancher chauffant', 'Autre']

    return (
        <div className="card">
            <h2>Caractéristiques Générales</h2>

            {/* Heating */}
            <h3 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>Chauffage</h3>
            <div className="form-group">
                <label className="form-label">Régime</label>
                <select
                    className="form-select"
                    name="chauffageRegime"
                    value={formData.chauffageRegime}
                    onChange={handleChange}
                >
                    <option value="">Sélectionner...</option>
                    <option value="individuel">Individuel</option>
                    <option value="collectif">Collectif</option>
                </select>
            </div>

            <div className="form-group">
                <label className="form-label">Énergies</label>
                <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                    {energies.map(e => (
                        <label key={e} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                            <input
                                type="checkbox"
                                name="chauffageEnergies"
                                value={e}
                                checked={formData.chauffageEnergies?.includes(e) || false}
                                onChange={handleMultiSelectChange}
                                style={{ transform: 'scale(1.2)' }}
                            />
                            {e}
                        </label>
                    ))}
                </div>
            </div>

            <div className="form-group">
                <label className="form-label">Diffusion</label>
                <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                    {diffusions.map(d => (
                        <label key={d} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                            <input
                                type="checkbox"
                                name="chauffageDiffusion"
                                value={d}
                                checked={formData.chauffageDiffusion?.includes(d) || false}
                                onChange={handleMultiSelectChange}
                                style={{ transform: 'scale(1.2)' }}
                            />
                            {d}
                        </label>
                    ))}
                </div>
            </div>

            <div className="form-group">
                <label className="form-label">Précisions chauffage</label>
                <textarea
                    className="form-textarea"
                    rows="2"
                    name="notesChauffage"
                    value={formData.notesChauffage}
                    onChange={handleChange}
                ></textarea>
            </div>

            {/* Vitrage & Volets */}
            <h3 style={{ marginTop: '2rem', marginBottom: '1rem', borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem' }}>Huisseries</h3>

            <div className="form-group">
                <label className="form-label">Vitrage</label>
                <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                    {['PVC double vitrage', 'Simple vitrage', 'Double vitrage bois', 'Autre'].map(v => (
                        <label key={v} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                            <input
                                type="checkbox"
                                name="vitrage"
                                value={v}
                                checked={formData.vitrage?.includes(v) || false}
                                onChange={handleMultiSelectChange}
                                style={{ transform: 'scale(1.2)' }}
                            />
                            {v}
                        </label>
                    ))}
                </div>
            </div>

            <div className="form-group">
                <label className="form-label">Volets</label>
                <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                    {['Roulant électrique', 'Manuel', 'Bois', 'Autre'].map(v => (
                        <label key={v} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                            <input
                                type="checkbox"
                                name="volet"
                                value={v}
                                checked={formData.volet?.includes(v) || false}
                                onChange={handleMultiSelectChange}
                                style={{ transform: 'scale(1.2)' }}
                            />
                            {v}
                        </label>
                    ))}
                </div>
            </div>

            {/* Parking */}
            <h3 style={{ marginTop: '2rem', marginBottom: '1rem', borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem' }}>Parking / Garage</h3>
            <div className="form-group">
                <label className="form-label">Type</label>
                <select
                    className="form-select"
                    name="parkingType"
                    value={formData.parkingType}
                    onChange={handleChange}
                >
                    <option value="aucun">Aucun</option>
                    <option value="parking">Parking</option>
                    <option value="garage">Garage</option>
                </select>
            </div>

            {formData.parkingType !== 'aucun' && (
                <div className="fade-in">
                    <div className="form-group">
                        <label className="form-label">Quantité</label>
                        <input
                            type="number"
                            className="form-input"
                            name="parkingQuantite"
                            value={formData.parkingQuantite}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Identifiants / numéros</label>
                        <input
                            type="text"
                            className="form-input"
                            name="parkingIds"
                            value={formData.parkingIds}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            )}
            <div className="form-group">
                <label className="form-label">Observations stationnement</label>
                <textarea
                    className="form-textarea"
                    rows="2"
                    name="notesParking"
                    value={formData.notesParking}
                    onChange={handleChange}
                ></textarea>
            </div>

            {/* Conditionals */}
            {formData.typeBien === 'maison' && (
                <div className="form-group fade-in" style={{ marginTop: '2rem', borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem' }}>
                    <label className="form-label">Grenier / Combles / Dépendances</label>
                    <textarea
                        className="form-textarea"
                        name="dependances"
                        value={formData.dependances}
                        onChange={handleChange}
                    ></textarea>
                </div>
            )}

            {formData.typeBien === 'appartement' && (
                <div className="form-group fade-in" style={{ marginTop: '2rem', borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem' }}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, cursor: 'pointer' }}>
                        <input
                            type="checkbox"
                            name="ascenseur"
                            checked={formData.ascenseur || false}
                            onChange={(e) => handleChange({ target: { name: 'ascenseur', value: e.target.checked } })}
                            style={{ transform: 'scale(1.2)' }}
                        />
                        Ascenseur ?
                    </label>
                </div>
            )}
        </div>
    )
}
