import { useState } from 'react';
import { Search, ChevronDown, Users, Briefcase, Building2 } from 'lucide-react';
import { navigationItems } from '../data';
import '../styles/global.css';

export default function Header() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [showTutorDropdown, setShowTutorDropdown] = useState(false);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  const TutorOptions = [
    {
      icon: <Users size={20} />,
      title: 'Tutor',
      description: 'Hire professionals and agencies'
    },
    {
      icon: <Briefcase size={20} />,
      title: 'Projects',
      description: 'Buy ready-to-start services'
    },
    {
      icon: <Building2 size={20} />,
      title: 'Jobs',
      description: 'Apply to jobs posted by clients'
    }
  ];

  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg bg-white">
        <div className="container-fluid px-4">
          <a className="navbar-brand me-4" href="/">
            <img src='./assets/images/logo.png' alt='logo' />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={handleNavCollapse}
            aria-expanded={!isNavCollapsed}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`}>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {Object.entries(navigationItems).map(([key, item]) => (
                <li className="nav-item dropdown" key={key}>
                  {item.dropdownItems ? (
                    <>
                      <a
                        className="nav-link custom-dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                      >
                        {item.label}
                        <ChevronDown size={16} className="ms-1 dropdown-icon" />
                      </a>
                      <ul className="dropdown-menu">
                        {item.dropdownItems.map((dropdownItem, index) => (
                          <li key={index}>
                            <a className="dropdown-item" href={dropdownItem.url}>
                              {dropdownItem.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <a className="nav-link" href={item.url}>{item.label}</a>
                  )}
                </li>
              ))}
            </ul>
            <div className="header-right d-flex align-items-center">
              <div className="search-container">
                <Search size={18} className="search-icon" />
                <input
                  type="search"
                  className="form-control search-input"
                  placeholder="Search"
                  aria-label="Search"
                />
              </div>
              <div className="user-actions">
                <div className="Tutor-select-container">
                  <button
                    className="Tutor-select-button"
                    onClick={() => setShowTutorDropdown(!showTutorDropdown)}
                  >
                    Tutor
                    <ChevronDown size={16} className="Tutor-select-icon" />
                  </button>
                  {showTutorDropdown && (
                    <div className="Tutor-dropdown">
                      {TutorOptions.map((option, index) => (
                        <a key={index} href="#" className="Tutor-dropdown-item">
                          <span className="Tutor-dropdown-icon">{option.icon}</span>
                          <div className="Tutor-dropdown-content">
                            <div className="Tutor-dropdown-title">{option.title}</div>
                            <div className="Tutor-dropdown-description">{option.description}</div>
                          </div>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
                <a href="/login" className="login-link">Log in</a>
                <a href="/sign-up" className="signup-btn">Sign up</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
