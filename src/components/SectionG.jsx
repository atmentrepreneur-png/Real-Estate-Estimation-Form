import React from 'react'

export default function SectionG({ formData, handleChange }) {
    return (
        <div className="card">
            <h2>Positif / Négatif / État</h2>
            <div className="form-group">
                <label className="form-label">Points forts</label>
                <textarea
                    className="form-textarea"
                    rows="3"
                    name="pointsForts"
                    value={formData.pointsForts}
                    onChange={handleChange}
                ></textarea>
            </div>
            <div className="form-group">
                <label className="form-label">Points faibles</label>
                <textarea
                    className="form-textarea"
                    rows="3"
                    name="pointsFaibles"
                    value={formData.pointsFaibles}
                    onChange={handleChange}
                ></textarea>
            </div>

            <div className="form-group">
                <label className="form-label">Standing global</label>
                <select
                    className="form-select"
                    name="standingGlobal"
                    value={formData.standingGlobal}
                    onChange={handleChange}
                >
                    <option value="">Sélectionner...</option>
                    <option value="tres_bon">Très bon</option>
                    <option value="bon">Bon</option>
                    <option value="moyen">Moyen</option>
                    <option value="a_renover">À rénover</option>
                </select>
            </div>

            <div className="form-group">
                <label className="form-label">Commentaires complémentaires</label>
                <textarea
                    className="form-textarea"
                    rows="2"
                    name="notesConclusion"
                    value={formData.notesConclusion}
                    onChange={handleChange}
                ></textarea>
            </div>
        </div>
    )
}
