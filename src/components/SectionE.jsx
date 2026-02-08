import React from 'react'

export default function SectionE({ formData, handleChange }) {
    // Logic helpers
    const year = parseInt(formData.anneeConstruction) || 2026

    const showPlomb = year < 1949
    const showAmiante = year < 1997
    // "Gaz / Électricité → if installation > 15 ans (or unknown)"
    // Assuming if building is older than 15 years (2011), we ask.
    const showGazElec = year < 2011

    // "Mesurage → Appartement only"
    const showMesurage = formData.typeBien === 'appartement'
    // "Parasites → Maison only"
    const showParasites = formData.typeBien === 'maison'

    const DiagRow = ({ label, name }) => (
        <div className="form-group" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
            <label style={{ fontSize: '0.9rem' }}>{label}</label>
            <select
                className="form-select"
                style={{ width: '150px' }}
                name={`diag${name}`}
                value={formData[`diag${name}`]}
                onChange={handleChange}
            >
                <option value="">Sélectionner...</option>
                <option value="fourni">Fourni</option>
                <option value="a_prevoir">À prévoir</option>
                <option value="inutile">Inutile</option>
                <option value="inconnu">Inconnu</option>
            </select>
        </div>
    )

    return (
        <div className="card">
            <h2>Diagnostics / Expertise</h2>

            <div className="form-group">
                <label className="form-label">DPE (A → G)</label>
                <select
                    className="form-select"
                    name="diagDPE"
                    value={formData.diagDPE}
                    onChange={handleChange}
                >
                    <option value="">Sélectionner...</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                    <option value="E">E</option>
                    <option value="F">F</option>
                    <option value="G">G</option>
                    <option value="Inconnu">Inconnu</option>
                </select>
            </div>

            <div style={{ background: '#f9fafb', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
                <h4 style={{ marginBottom: '0.5rem', fontSize: '0.9rem', color: '#6b7280' }}>Diagnostics Obligatoires (Calculés)</h4>

                {showPlomb && <DiagRow label="Plomb (Avant 1949)" name="Plomb" />}
                {!showPlomb && <p style={{ fontSize: '0.8rem', color: '#9ca3af' }}>Plomb non requis (> 1949)</p>}

                {showAmiante && <DiagRow label="Amiante (Avant 1997)" name="Amiante" />}
                {!showAmiante && <p style={{ fontSize: '0.8rem', color: '#9ca3af' }}>Amiante non requis (> 1997)</p>}

                {showGazElec && (
                    <>
                        <DiagRow label="Gaz (> 15 ans)" name="Gaz" />
                        <DiagRow label="Électricité (> 15 ans)" name="Elec" />
                    </>
                )}

                {showMesurage && <DiagRow label="Mesurage (Loi Carrez)" name="Mesurage" />}
                {showParasites && <DiagRow label="Parasites (Mérules/Termites)" name="Parasites" />}
            </div>

            <div className="form-group">
                <label className="form-label">Observations diagnostics / conformité</label>
                <textarea
                    className="form-textarea"
                    rows="2"
                    name="notesDiag"
                    value={formData.notesDiag}
                    onChange={handleChange}
                ></textarea>
            </div>
        </div>
    )
}
