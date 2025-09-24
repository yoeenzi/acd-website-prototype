import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, Search, ChevronDown } from 'lucide-react';
import styles from './Header.module.css';
// Import the logo
import acdLogo from '../../assets/acd-logo.png'; // Update extension if needed (.svg, .jpg)

const Header = ({ 
  onNavigateToServices, 
  onNavigateToAbout, 
  onNavigateToCareers,
  onNavigateToHyundai,
  onNavigateToTonly 
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const companyDropdownRef = useRef(null);
  const productsDropdownRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (companyDropdownRef.current && !companyDropdownRef.current.contains(event.target)) {
        setCompanyDropdownOpen(false);
      }
      if (productsDropdownRef.current && !productsDropdownRef.current.contains(event.target)) {
        setProductsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleServicesClick = (e) => {
    e.preventDefault();
    if (onNavigateToServices) {
      onNavigateToServices();
    }
    setMobileMenuOpen(false);
  };

  const handleAboutClick = (e) => {
    e.preventDefault();
    setCompanyDropdownOpen(false);
    if (onNavigateToAbout) {
      onNavigateToAbout();
    }
    setMobileMenuOpen(false);
  };

  const handleCareersClick = (e) => {
    e.preventDefault();
    setCompanyDropdownOpen(false);
    if (onNavigateToCareers) {
      onNavigateToCareers();
    }
    setMobileMenuOpen(false);
  };

  const handleHyundaiClick = (e) => {
    e.preventDefault();
    setProductsDropdownOpen(false);
    if (onNavigateToHyundai) {
      onNavigateToHyundai();
    }
    setMobileMenuOpen(false);
  };

  const handleTonlyClick = (e) => {
    e.preventDefault();
    setProductsDropdownOpen(false);
    if (onNavigateToTonly) {
      onNavigateToTonly();
    }
    setMobileMenuOpen(false);
  };

  const toggleCompanyDropdown = (e) => {
    e.preventDefault();
    setCompanyDropdownOpen(!companyDropdownOpen);
  };

  const toggleProductsDropdown = (e) => {
    e.preventDefault();
    setProductsDropdownOpen(!productsDropdownOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        {/* Logo with image */}
        <div className={styles.logo}>
          <a href="/">
            <img 
              src={acdLogo} 
              alt="ACD Corporation" 
              className={styles.logoImage}
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          {/* Products Dropdown */}
          <div className={styles.dropdownContainer} ref={productsDropdownRef}>
            <a 
              href="#products" 
              className={styles.navLink}
              onClick={toggleProductsDropdown}
            >
              Products <ChevronDown size={16} className={productsDropdownOpen ? styles.chevronUp : ''} />
            </a>
            
            {productsDropdownOpen && (
              <div className={styles.dropdownMenu}>
                <a href="#hyundai" onClick={handleHyundaiClick} className={styles.dropdownItem}>
                  Hyundai Equipments
                </a>
                <a href="#tonly" onClick={handleTonlyClick} className={styles.dropdownItem}>
                  Tonly Trucks
                </a>
              </div>
            )}
          </div>

          <a href="#services" onClick={handleServicesClick} className={styles.navLink}>
            Services
          </a>
          
          {/* Company Dropdown */}
          <div className={styles.dropdownContainer} ref={companyDropdownRef}>
            <a 
              href="#company" 
              className={styles.navLink}
              onClick={toggleCompanyDropdown}
            >
              Company <ChevronDown size={16} className={companyDropdownOpen ? styles.chevronUp : ''} />
            </a>
            
            {companyDropdownOpen && (
              <div className={styles.dropdownMenu}>
                <a href="#about" onClick={handleAboutClick} className={styles.dropdownItem}>
                  About Us
                </a>
                <a href="#careers" onClick={handleCareersClick} className={styles.dropdownItem}>
                  Careers
                </a>
              </div>
            )}
          </div>

          <div className={styles.searchBox}>
            <input 
              type="text" 
              placeholder="Search equipment" 
              className={styles.searchInput}
            />
            <Search size={18} className={styles.searchIcon} />
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className={styles.mobileMenuBtn}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <div className={styles.mobileMenuContent}>
            {/* Mobile Products Section */}
            <div className={styles.mobileNavSection}>
              <span className={styles.mobileNavHeader}>Products</span>
              <a href="#hyundai" onClick={handleHyundaiClick} className={styles.mobileNavSubLink}>
                Hyundai Equipments
              </a>
              <a href="#tonly" onClick={handleTonlyClick} className={styles.mobileNavSubLink}>
                Tonly Trucks
              </a>
            </div>

            <a href="#services" onClick={handleServicesClick} className={styles.mobileNavLink}>Services</a>
            
            {/* Mobile Company Section */}
            <div className={styles.mobileNavSection}>
              <span className={styles.mobileNavHeader}>Company</span>
              <a href="#about" onClick={handleAboutClick} className={styles.mobileNavSubLink}>
                About Us
              </a>
              <a href="#careers" onClick={handleCareersClick} className={styles.mobileNavSubLink}>
                Careers
              </a>
            </div>
            
            <input 
              type="text" 
              placeholder="Search equipment" 
              className={styles.mobileSearchInput}
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;