import './Header.css'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="Header">
      <div className="Header-wrapper">
        <Link
          to="/"
          className="Header-logo Header-link"
          aria-label="Link to main page"
        >
          <span className="Header-link__blue">A11Y</span>{' '}
          <span className="Header-link__gold">Checker</span>
        </Link>
        <Link to="/about-us" className="Header-about Header-link">
          About project
        </Link>
      </div>
    </header>
  )
}
