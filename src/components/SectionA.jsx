import React from 'react'

export default function SectionA({ formData, handleChange }) {
    return (
        <div className="card">
            <h2>Identité du Bien</h2>

            <div className="form-group">
                <label className="form-label">Type de bien</label>
                <select
                    className="form-select"
                    name="typeBien"
                    value={formData.typeBien}
                    onChange={handleChange}
                >
                    <option value="">Sélectionner...</option>
                    <option value="appartement">Appartement</option>
                    <option value="maison">Maison</option>
                </select>
            </div>

            <div className="form-group">
                <label className="form-label">Ville / Commune</label>
                <input
                    type="text"
                    className="form-input"
                    name="ville"
                    value={formData.ville}
                    onChange={handleChange}
                    placeholder="ex: Paris 15ème"
                />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '1rem' }}>
                <div className="form-group" style={{ gridColumn: 'span 1' }}>
                    <label className="form-label">N°</label>
                    <input
                        type="text"
                        className="form-input"
                        name="adresseNumero"
                        value={formData.adresseNumero}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group" style={{ gridColumn: 'span 2' }}>
                    <label className="form-label">Rue / Voie</label>
                    <input
                        type="text"
                        className="form-input"
                        name="adresseRue"
                        value={formData.adresseRue}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className="form-group">
                <label className="form-label">Code Postal</label>
                <input
                    type="text"
                    className="form-input"
                    name="adresseCodePostal"
                    value={formData.adresseCodePostal}
                    onChange={handleChange}
                    style={{ maxWidth: '150px' }}
                />
            </div>

            {formData.typeBien === 'appartement' && (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                    <div className="form-group">
                        <label className="form-label">Bâtiment</label>
                        <input
                            type="text"
                            className="form-input"
                            name="adresseBatiment"
                            value={formData.adresseBatiment}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Étage</label>
                        <input
                            type="text"
                            className="form-input"
                            name="adresseEtage"
                            value={formData.adresseEtage}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            )}

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                <div className="form-group">
                    <label className="form-label">Nombre de pièces</label>
                    <input
                        type="number"
                        className="form-input"
                        name="pieces"
                        value={formData.pieces}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Nombre de chambres</label>
                    <input
                        type="number"
                        className="form-input"
                        name="chambres"
                        value={formData.chambres}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                <div className="form-group">
                    <label className="form-label">Année de construction</label>
                    <input
                        type="number"
                        className="form-input"
                        name="anneeConstruction"
                        value={formData.anneeConstruction}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Surface habitable (m²)</label>
                    <input
                        type="number"
                        className="form-input"
                        name="surface"
                        value={formData.surface}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className="form-group">
                <label className="form-label">Notes générales</label>
                <textarea
                    className="form-textarea"
                    rows="3"
                    name="notesCore"
                    value={formData.notesCore}
                    onChange={handleChange}
                    placeholder="Secteur nuance, immeuble réputation..."
                ></textarea>
            </div>
        </div>
    )
}
