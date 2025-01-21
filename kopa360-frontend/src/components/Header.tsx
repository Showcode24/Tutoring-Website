import { useState } from 'react';
import { Search, ChevronDown, Users, Briefcase, Building2 } from 'lucide-react';
import { navigationItems } from '../data';
import '../styles/global.css';

export default function Header() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [showTalentDropdown, setShowTalentDropdown] = useState(false);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  const talentOptions = [
    {
      icon: <Users size={20} />,
      title: 'Talent',
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
                <div className="talent-select-container">
                  <button
                    className="talent-select-button"
                    onClick={() => setShowTalentDropdown(!showTalentDropdown)}
                  >
                    Talent
                    <ChevronDown size={16} className="talent-select-icon" />
                  </button>
                  {showTalentDropdown && (
                    <div className="talent-dropdown">
                      {talentOptions.map((option, index) => (
                        <a key={index} href="#" className="talent-dropdown-item">
                          <span className="talent-dropdown-icon">{option.icon}</span>
                          <div className="talent-dropdown-content">
                            <div className="talent-dropdown-title">{option.title}</div>
                            <div className="talent-dropdown-description">{option.description}</div>
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
