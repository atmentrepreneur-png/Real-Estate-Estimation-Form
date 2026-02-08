import { useState, useEffect } from 'react'
import { clients } from './clientConfig'
import SectionA from './components/SectionA'
import SectionB from './components/SectionB'
import SectionC from './components/SectionC'
import SectionD from './components/SectionD'
import SectionE from './components/SectionE'
import SectionF from './components/SectionF'
import SectionG from './components/SectionG'
import SectionH from './components/SectionH'
import SectionI from './components/SectionI'
import SectionJ from './components/SectionJ'
import FloatingNotes from './components/FloatingNotes'

function App() {
  // --- Branding Logic ---
  // Simple URL param detection: ?client=lux
  const searchParams = new URLSearchParams(window.location.search)
  const clientId = searchParams.get('client') || 'default'
  const activeClient = clients[clientId] || clients['default']

  useEffect(() => {
    // Dynamically update CSS variables
    document.documentElement.style.setProperty('--primary-color', activeClient.primaryColor)
    // We could add more shades if we had a generator, for now just primary
    document.title = `${activeClient.name} - Estimation`
  }, [activeClient])

  // Monolithic state
  const [formData, setFormData] = useState({
    // A. Core Identity
    ville: '',
    adresseNumero: '',
    adresseRue: '',
    adresseCodePostal: '',
    adresseBatiment: '',
    adresseEtage: '',
    typeBien: '',
    pieces: '',
    chambres: '',
    anneeConstruction: '',
    surface: '',
    notesCore: '',

    // B. Fiscal
    charges: '',
    taxeFonciere: '',
    notesFiscal: '',

    // C. Commodités
    commoditesCommerces: '',
    commoditesTransports: '',
    commoditesEcoles: '',
    commoditesSituation: '',
    // notesCommodites removed redundant

    // D. Caractéristiques
    chauffageRegime: '',
    chauffageEnergies: [],
    chauffageDiffusion: [],
    vitrage: [], // New
    volet: [],   // New
    notesChauffage: '',
    parkingType: 'aucun',
    parkingQuantite: '',
    parkingIds: '',
    notesParking: '',
    dependances: '',
    ascenseur: false,

    // E. Diagnostics
    diagDPE: '',
    diagPlomb: '',
    diagAmiante: '',
    diagGaz: '',
    diagElec: '',
    diagMesurage: '',
    diagParasites: '',
    notesDiag: '',

    // G. Positif / Négatif
    pointsForts: '',
    pointsFaibles: '',
    standingGlobal: '',
    notesConclusion: '',

    // H. Occupation
    occupied: false,
    libreLe: '',
    raisonVente: '',
    dateAcquisition: '',
    notesOccupation: '',

    // I. Visite
    visiteType: 'proprietaire', // proprietaire | autre
    visiteNom: '',
    visiteTel: '',
    visiteQualite: '',
    notesVisite: '',

    // J. Contacts
    propCivilite: '',
    propNom: '',
    propPrenom: '',
    propType: 'physique',
    propTel: '',
    propEmail: '',
    // syndic removed

    notesContacts: '',

    // L. Global Notes
    notesGlobales: '',
  })

  // Separate state for Rooms (complex structure)
  const [rooms, setRooms] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    const fullData = {
      ...formData,
      rooms
    }
    console.log('Form data:', fullData)
    alert('Form submitted (check console for full JSON)')
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleMultiSelectChange = (e) => {
    const { name, value, checked } = e.target
    setFormData(prev => {
      const current = prev[name] || []
      if (checked) {
        return { ...prev, [name]: [...current, value] }
      } else {
        return { ...prev, [name]: current.filter(item => item !== value) }
      }
    })
  }

  return (
    <div className="container">
      {/* Header / Banner */}
      <header className="brand-header">
        {activeClient.logoUrl ? (
          <img src={activeClient.logoUrl} alt={activeClient.name} className="logo-placeholder" style={{ background: 'transparent' }} />
        ) : (
          <div className="logo-placeholder" style={{ color: activeClient.primaryColor, fontWeight: 'bold' }}>
            {activeClient.name.toUpperCase()}
          </div>
        )}
        <h1>Estimation Immobilière</h1>
        <p style={{ color: 'var(--text-light)', marginTop: '0.5rem' }}>
          Formulaire d'estimation résidentielle
        </p>
      </header>

      <form onSubmit={handleSubmit}>
        <SectionJ formData={formData} handleChange={handleChange} />
        <SectionA formData={formData} handleChange={handleChange} />
        <SectionB formData={formData} handleChange={handleChange} />
        <SectionC formData={formData} handleChange={handleChange} />
        <SectionD
          formData={formData}
          handleChange={handleChange}
          handleMultiSelectChange={handleMultiSelectChange}
        />
        <SectionE formData={formData} handleChange={handleChange} />

        <SectionF rooms={rooms} setRooms={setRooms} />

        <SectionG formData={formData} handleChange={handleChange} />
        <SectionH formData={formData} handleChange={handleChange} />
        <SectionI formData={formData} handleChange={handleChange} />
        {/* SectionJ moved to top */}

        <button type="submit" className="btn-primary" style={{ marginTop: '2rem' }}>
          Enregistrer (Simulation)
        </button>
      </form>

      <FloatingNotes formData={formData} handleChange={handleChange} />
    </div>
  )
}

export default App
