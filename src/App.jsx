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
import SectionMenu from './components/SectionMenu'
import ViewToggle from './components/ViewToggle'
import Modal from './components/Modal'
import FloatingAddButton from './components/FloatingAddButton'
import SingleRoomForm from './components/SingleRoomForm'

function App() {
  // --- Branding Logic ---
  const searchParams = new URLSearchParams(window.location.search)
  const clientId = searchParams.get('client') || 'default'
  const activeClient = clients[clientId] || clients['default']

  useEffect(() => {
    document.documentElement.style.setProperty('--primary-color', activeClient.primaryColor)
    document.title = `${activeClient.name} - Estimation`
  }, [activeClient])

  // --- View Mode State ---
  const [viewMode, setViewMode] = useState('menu') // 'menu' | 'flow'
  const [activeSection, setActiveSection] = useState(null) // section ID or null
  const [isRoomModalOpen, setIsRoomModalOpen] = useState(false)

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

  // --- Sections Definition (No Emojis) ---
  const sections = [
    { id: 'J', title: 'Contacts & Propriétaire', description: 'Coordonnées du propriétaire et contact' },
    { id: 'A', title: 'Identité du Bien', description: 'Adresse, type, surface, année...' },
    { id: 'B', title: 'Fiscal & Charges', description: 'Taxe foncière, charges de copropriété' },
    { id: 'C', title: 'Commodités', description: 'Transports, commerces, écoles...' },
    { id: 'D', title: 'Caractéristiques', description: 'Chauffage, parking, dépendances...' },
    { id: 'E', title: 'Diagnostics & Expertise', description: 'DPE, Amiante, Plomb, Gaz...' },
    { id: 'F', title: 'Pièces & Photos', description: 'Détail des pièces et photos' },
    { id: 'G', title: 'Points Forts / Faibles', description: 'Analyse qualitative et standing' },
    { id: 'H', title: 'Occupation', description: 'Statut d\'occupation et dates' },
    { id: 'I', title: 'Visite', description: 'Informations sur la visite' },
  ]

  const renderSectionContent = (sectionId) => {
    switch (sectionId) {
      case 'J': return <SectionJ formData={formData} handleChange={handleChange} />
      case 'A': return <SectionA formData={formData} handleChange={handleChange} />
      case 'B': return <SectionB formData={formData} handleChange={handleChange} />
      case 'C': return <SectionC formData={formData} handleChange={handleChange} />
      case 'D': return <SectionD formData={formData} handleChange={handleChange} handleMultiSelectChange={handleMultiSelectChange} />
      case 'E': return <SectionE formData={formData} handleChange={handleChange} />
      case 'F': return <SectionF rooms={rooms} setRooms={setRooms} />
      case 'G': return <SectionG formData={formData} handleChange={handleChange} />
      case 'H': return <SectionH formData={formData} handleChange={handleChange} />
      case 'I': return <SectionI formData={formData} handleChange={handleChange} />
      default: return null
    }
  }

  return (
    <div className="container">
      {/* Header / Banner */}
      <header className="brand-header">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            {activeClient.logoUrl ? (
              <img src={activeClient.logoUrl} alt={activeClient.name} className="logo-placeholder" style={{ background: 'transparent', boxShadow: 'none' }} />
            ) : (
              <div className="logo-placeholder">
                {activeClient.name.substring(0, 2).toUpperCase()}
              </div>
            )}
            <div style={{ textAlign: 'left' }}>
              <h1 style={{ fontSize: '1.75rem', marginBottom: '0.25rem' }}>Estimation Immobilière</h1>
              <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '1rem' }}>
                {activeClient.name}
              </p>
            </div>
          </div>

          <ViewToggle viewMode={viewMode} setViewMode={(mode) => {
            setViewMode(mode)
            setActiveSection(null) // Reset active section when switching modes
          }} />
        </div>
      </header>

      <form onSubmit={handleSubmit}>

        {/* VIEW MODE: FLOW (Original) */}
        {viewMode === 'flow' && (
          <div className="flow-container fade-in">
            <SectionJ formData={formData} handleChange={handleChange} />
            <SectionA formData={formData} handleChange={handleChange} />
            <SectionB formData={formData} handleChange={handleChange} />
            <SectionC formData={formData} handleChange={handleChange} />
            <SectionD formData={formData} handleChange={handleChange} handleMultiSelectChange={handleMultiSelectChange} />
            <SectionE formData={formData} handleChange={handleChange} />
            <SectionF rooms={rooms} setRooms={setRooms} />
            <SectionG formData={formData} handleChange={handleChange} />
            <SectionH formData={formData} handleChange={handleChange} />
            <SectionI formData={formData} handleChange={handleChange} />

            <div className="card">
              <button type="submit" className="btn-primary">
                Enregistrer (Simulation)
              </button>
            </div>
          </div>
        )}

        {/* VIEW MODE: MENU (New) */}
        {viewMode === 'menu' && (
          <div className="menu-container fade-in">
            {!activeSection ? (
              <SectionMenu sections={sections} onSelectSection={setActiveSection} />
            ) : (
              <div className="single-section-view slide-in">
                <button
                  type="button"
                  className="btn-ghost"
                  onClick={() => setActiveSection(null)}
                  style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  ← Retour au Menu
                </button>

                {activeSection === 'submit' ? (
                  <div className="card">
                    <h2>Récapitulatif & Enregistrement</h2>
                    <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem', marginBottom: '2rem' }}>
                      Veuillez vérifier les informations saisies dans les différentes sections avant de valider le dossier.
                    </p>
                    <button type="submit" className="btn-primary">
                      Enregistrer le dossier
                    </button>
                  </div>
                ) : (
                  renderSectionContent(activeSection)
                )}
              </div>
            )}
          </div>
        )}

      </form>

      <FloatingNotes formData={formData} handleChange={handleChange} />

      {/* Global Room Access */}
      <FloatingAddButton label="Ajouter une pièce" onClick={() => setIsRoomModalOpen(true)} />

      <Modal
        isOpen={isRoomModalOpen}
        onClose={() => setIsRoomModalOpen(false)}
        title="Ajouter Pièce & Photo"
      >
        <SingleRoomForm
          onSave={(newRoom) => {
            setRooms(prev => [...prev, newRoom])
            setIsRoomModalOpen(false)
          }}
          onCancel={() => setIsRoomModalOpen(false)}
        />
      </Modal>

    </div>
  )
}

export default App
