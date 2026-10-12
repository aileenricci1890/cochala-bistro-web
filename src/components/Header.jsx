import { useState } from 'react'
import logo from '../assets/logo-cochala-bistro.svg'
import Icon from './Icon'

const navigation = [
  ['inicio', 'Inicio'],
  ['menu', 'Menú'],
  ['sabores', 'Sabores'],
  ['promociones', 'Promociones'],
  ['nosotros', 'Sobre nosotros'],
  ['cochabamba', 'Llajta querida'],
  ['ubicaciones', 'Ubicaciones'],
]

export default function Header({ activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="container nav-container">
        <a className="brand" href="#inicio" onClick={closeMenu} aria-label="Cochala Bistro, inicio">
          <img src={logo} alt="" />
          <span>Cochala Bistro</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <Icon>{menuOpen ? 'close' : 'menu'}</Icon>
        </button>

        <nav id="main-navigation" className={`nav${menuOpen ? ' open' : ''}`} aria-label="Navegación principal">
          {navigation.map(([id, label]) => (
            <a
              className={`nav-link${activeSection === id ? ' active' : ''}`}
              href={`#${id}`}
              key={id}
              aria-current={activeSection === id ? 'location' : undefined}
              onClick={closeMenu}
            >
              {label}
            </a>
          ))}
        </nav>

        <a className="nav-order" href="#ubicaciones" onClick={closeMenu}>Pedir ahora</a>
      </div>
    </header>
  )
}
