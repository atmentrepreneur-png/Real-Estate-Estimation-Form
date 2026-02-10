import React from 'react'

export default function SectionMenu({ onSelectSection, sections }) {
    return (
        <div className="menu-grid">
            {sections.map((section) => (
                <div
                    key={section.id}
                    className="menu-item"
                    onClick={() => onSelectSection(section.id)}
                    style={{ justifyContent: 'center', textAlign: 'center', display: 'flex', flexDirection: 'column' }}
                >
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>{section.title}</h3>
                    <p style={{ margin: 0, color: 'var(--text-turquoise)', fontWeight: '500', fontSize: '0.9rem' }}>{section.description}</p>
                </div>
            ))}

            {/* Simulation/Submit Action as a special card */}
            <div
                className="menu-item"
                onClick={() => onSelectSection('submit')}
                style={{
                    border: '2px dashed var(--primary-color)',
                    background: 'rgba(255, 255, 255, 0.5)',
                    justifyContent: 'center',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--primary-color)' }}>Finaliser</h3>
                <p style={{ margin: 0, color: 'var(--text-turquoise)', fontWeight: '600', fontSize: '0.9rem' }}>Voir le récapitulatif & enregistrer</p>
            </div>
        </div>
    )
}
