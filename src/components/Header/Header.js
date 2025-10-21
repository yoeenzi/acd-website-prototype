import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, Search, ChevronDown } from 'lucide-react';
import styles from './Header.module.css';
// Import the logo
import acdLogo from '../../assets/acd-logo.png';

// Equipment database for search
const allEquipment = [
  // Hyundai Equipment
  { id: 1, name: 'H940C', type: 'Backhoe Loader', category: 'Hyundai - Loaders' },
  { id: 2, name: 'R140LC-9S', type: 'Crawler Excavator', category: 'Hyundai - Excavators' },
  { id: 3, name: 'HL760-9S', type: 'Wheel Loader', category: 'Hyundai - Loaders' },
  { id: 4, name: 'R210LC-9', type: 'Crawler Excavator', category: 'Hyundai - Excavators' },
  { id: 5, name: 'HW180', type: 'Wheeled Excavator', category: 'Hyundai - Excavators' },
  { id: 6, name: 'HL955', type: 'Wheel Loader', category: 'Hyundai - Loaders' },
  { id: 7, name: 'R380LC-9SH', type: 'Crawler Excavator', category: 'Hyundai - Excavators' },
  { id: 8, name: 'R520LC-9S', type: 'Crawler Excavator', category: 'Hyundai - Excavators' },
  
  // Tonly Trucks
  { id: 9, name: 'TL3000', type: 'Heavy Duty Dump Truck', category: 'Tonly - Dump Trucks' },
  { id: 10, name: 'TL-MX400', type: 'Concrete Mixer Truck', category: 'Tonly - Mixer Trucks' },
  { id: 11, name: 'TL-C500', type: 'Heavy Cargo Truck', category: 'Tonly - Cargo Trucks' },
  { id: 12, name: 'TL4000', type: 'Mining Dump Truck', category: 'Tonly - Dump Trucks' },
  { id: 13, name: 'TL-T600', type: 'Semi Tractor Truck', category: 'Tonly - Tractor Trucks' },
  { id: 14, name: 'TL-S700', type: 'Special Purpose Truck', category: 'Tonly - Special Trucks' },
];

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
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  
  const companyDropdownRef = useRef(null);
  const productsDropdownRef = useRef(null);
  const searchRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (companyDropdownRef.current && !companyDropdownRef.current.contains(event.target)) {
        setCompanyDropdownOpen(false);
      }
      if (productsDropdownRef.current && !productsDropdownRef.current.contains(event.target)) {
        setProductsDropdownOpen(false);
      }
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearchResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle search input
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim() === '') {
      setSearchResults([]);
      setShowSearchResults(false);
      return;
    }

    // Filter equipment based on search query
    const filtered = allEquipment.filter(item => 
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.type.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
    );

    setSearchResults(filtered);
    setShowSearchResults(true);
  };

  // Handle selecting a search result
  const handleSelectEquipment = (equipment) => {
    setSearchQuery(equipment.name);
    setShowSearchResults(false);
    
    // Navigate based on category
    if (equipment.category.includes('Hyundai')) {
      onNavigateToHyundai();
    } else if (equipment.category.includes('Tonly')) {
      onNavigateToTonly();
    }
  };

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

          {/* Search Box with Results */}
          <div className={styles.searchBox} ref={searchRef}>
            <input 
              type="text" 
              placeholder="Search equipment" 
              value={searchQuery}
              onChange={handleSearchChange}
              onFocus={() => searchQuery && setShowSearchResults(true)}
              className={styles.searchInput}
            />
            <Search size={18} className={styles.searchIcon} />
            
            {/* Search Results Dropdown */}
            {showSearchResults && searchResults.length > 0 && (
              <div className={styles.searchResults}>
                {searchResults.map((equipment) => (
                  <div 
                    key={equipment.id} 
                    className={styles.searchResultItem}
                    onClick={() => handleSelectEquipment(equipment)}
                  >
                    <div className={styles.equipmentName}>{equipment.name}</div>
                    <div className={styles.equipmentDetails}>
                      <span className={styles.equipmentType}>{equipment.type}</span>
                      <span className={styles.equipmentCategory}>{equipment.category}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {/* No Results Message */}
            {showSearchResults && searchQuery && searchResults.length === 0 && (
              <div className={styles.searchResults}>
                <div className={styles.noResults}>No equipment found</div>
              </div>
            )}
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
              value={searchQuery}
              onChange={handleSearchChange}
              className={styles.mobileSearchInput}
            />
            
            {/* Mobile Search Results */}
            {searchQuery && searchResults.length > 0 && (
              <div className={styles.mobileSearchResults}>
                {searchResults.map((equipment) => (
                  <div 
                    key={equipment.id} 
                    className={styles.searchResultItem}
                    onClick={() => {
                      handleSelectEquipment(equipment);
                      setMobileMenuOpen(false);
                    }}
                  >
                    <div className={styles.equipmentName}>{equipment.name}</div>
                    <div className={styles.equipmentDetails}>
                      <span className={styles.equipmentType}>{equipment.type}</span>
                      <span className={styles.equipmentCategory}>{equipment.category}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;