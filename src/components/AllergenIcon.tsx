import React from 'react';

interface AllergenIconProps {
  code: string;
  className?: string;
}

const AllergenIcon: React.FC<AllergenIconProps> = ({ code, className = "" }) => {
  const getIcon = (code: string) => {
    switch (code) {
      case '1': // Cereales con gluten - Naranja con espiga
        return (
          <div className={`relative w-12 h-12 ${className}`}>
            <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="45" fill="#E57373" stroke="#D32F2F" strokeWidth="4" />
              <rect x="25" y="25" width="50" height="50" rx="8" fill="#BF360C" />
              <path d="M40 35L35 40L65 65L70 60L40 35ZM38 42L35 45L45 55L48 52L38 42ZM50 30L45 35L60 50L65 45L50 30Z" fill="white" />
              <text x="50" y="85" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">1</text>
            </svg>
          </div>
        );
      case '2': // Crustáceos - Marrón rojizo con camarón
        return (
          <div className={`relative w-12 h-12 ${className}`}>
            <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="45" fill="#CD853F" stroke="#8B4513" strokeWidth="4" />
              <rect x="25" y="25" width="50" height="50" rx="8" fill="#8B4513" />
              <path d="M30 40C30 35 35 35 35 40S40 45 45 45S50 40 50 40S55 35 60 35S65 40 65 40S70 45 65 50S60 55 50 55S45 60 40 60S35 65 30 65S40 60 45 60S50 55 55 55S60 50 60 50S65 55 65 55S70 50 70 50" 
                    stroke="white" strokeWidth="3" fill="none" />
              <circle cx="50" cy="50" r="8" fill="white" />
              <text x="50" y="85" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">2</text>
            </svg>
          </div>
        );
      case '3': // Huevos - Amarillo con huevo roto
        return (
          <div className={`relative w-12 h-12 ${className}`}>
            <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="45" fill="#FFD700" stroke="#FFA500" strokeWidth="4" />
              <rect x="25" y="25" width="50" height="50" rx="8" fill="#FFA500" />
              <ellipse cx="50" cy="45" rx="15" ry="12" fill="white" />
              <path d="M35 45C35 42 37 42 37 45S39 48 42 48S45 46 48 46S51 42 54 42S57 46 57 46S63 42 65 42S63 48 57 48S57 52 51 52S51 56 45 56S43 60 39 60S37 56 35 56S35 48 39 48S43 44 47 44S51 40 55 40S57 44 63 44S63 48 57 48S57 52 51 52S51 56 45 56S43 60 39 60S37 56 35 56" 
                    stroke="white" strokeWidth="2" fill="none" />
              <text x="50" y="85" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">3</text>
            </svg>
          </div>
        );
      case '4': // Pescado - Azul con pez
        return (
          <div className={`relative w-12 h-12 ${className}`}>
            <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="45" fill="#87CEEB" stroke="#4682B4" strokeWidth="4" />
              <rect x="25" y="25" width="50" height="50" rx="8" fill="#4682B4" />
              <path d="M30 50C30 45 35 45 35 50S40 55 45 55S50 45 55 45S60 35 65 35S65 45 65 45S70 55 70 55S65 65 60 65S55 70 50 70S45 65 40 65S35 55 30 55S40 50 45 50S50 55 55 55S60 50 65 50S65 55 70 55S70 50 75 50" 
                    stroke="white" strokeWidth="3" fill="none" />
              <circle cx="40" cy="45" r="3" fill="white" />
              <text x="50" y="85" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">4</text>
            </svg>
          </div>
        );
      case '5': // Cacahuetes - Marrón claro con cacahuete
        return (
          <div className={`relative w-12 h-12 ${className}`}>
            <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="45" fill="#DEB887" stroke="#8B4513" strokeWidth="4" />
              <rect x="25" y="25" width="50" height="50" rx="8" fill="#8B4513" />
              <ellipse cx="45" cy="45" rx="12" ry="8" fill="white" />
              <ellipse cx="55" cy="55" rx="12" ry="8" fill="white" />
              <path d="M45 45C45 43 43 43 43 45S41 47 43 47S45 49 47 49S49 47 51 47S53 45 55 45S57 43 59 43S61 45 61 45S59 47 57 47S55 49 53 49S51 47 49 47" 
                    stroke="white" strokeWidth="2" fill="none" />
              <text x="50" y="85" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">5</text>
            </svg>
          </div>
        );
      case '6': // Soja - Verde con vaina de soja
        return (
          <div className={`relative w-12 h-12 ${className}`}>
            <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="45" fill="#90EE90" stroke="#228B22" strokeWidth="4" />
              <rect x="25" y="25" width="50" height="50" rx="8" fill="#228B22" />
              <ellipse cx="40" cy="40" rx="8" ry="15" fill="white" />
              <circle cx="40" cy="35" r="3" fill="white" />
              <ellipse cx="60" cy="60" rx="8" ry="15" fill="white" />
              <circle cx="60" cy="55" r="3" fill="white" />
              <text x="50" y="85" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">6</text>
            </svg>
          </div>
        );
      case '7': // Lácteos - Púrpura con botella de leche
        return (
          <div className={`relative w-12 h-12 ${className}`}>
            <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="45" fill="#9370DB" stroke="#4B0082" strokeWidth="4" />
              <rect x="25" y="25" width="50" height="50" rx="8" fill="#4B0082" />
              <rect x="35" y="30" width="30" height="35" rx="5" fill="white" />
              <rect x="40" y="25" width="20" height="8" rx="3" fill="white" />
              <text x="50" y="85" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">7</text>
            </svg>
          </div>
        );
      case '8': // Frutos secos - Marrón oscuro con nuez
        return (
          <div className={`relative w-12 h-12 ${className}`}>
            <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="45" fill="#8B4513" stroke="#654321" strokeWidth="4" />
              <rect x="25" y="25" width="50" height="50" rx="8" fill="#654321" />
              <circle cx="45" cy="45" r="12" fill="white" />
              <path d="M45 33C45 30 42 30 42 33S39 36 42 36S45 39 48 39S51 36 54 36S57 39 60 39S63 36 66 36S63 39 69 39S57 42 54 42S51 45 48 45S45 48 42 48S39 51 42 51S42 54 39 54S45 57 48 57S48 60 51 60S51 63 54 63S54 66 57 66S57 69 60 69S60 72 63 72S63 75 66 75S66 78 69 78S69 81 72 81S72 84 75 84S75 87 78 87" 
                    stroke="white" strokeWidth="2" fill="none" />
              <text x="50" y="85" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">8</text>
            </svg>
          </div>
        );
      case '9': // Apio - Verde lima con tallo de apio
        return (
          <div className={`relative w-12 h-12 ${className}`}>
            <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="45" fill="#32CD32" stroke="#228B22" strokeWidth="4" />
              <rect x="25" y="25" width="50" height="50" rx="8" fill="#228B22" />
              <rect x="45" y="30" width="10" height="30" rx="5" fill="white" />
              <rect x="40" y="35" width="20" height="20" rx="3" fill="white" />
              <text x="50" y="85" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">9</text>
            </svg>
          </div>
        );
      case '10': // Mostaza - Amarillo brillante con botella
        return (
          <div className={`relative w-12 h-12 ${className}`}>
            <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="45" fill="#FFD700" stroke="#DAA520" strokeWidth="4" />
              <rect x="25" y="25" width="50" height="50" rx="8" fill="#DAA520" />
              <rect x="38" y="30" width="24" height="35" rx="6" fill="white" />
              <rect x="45" y="25" width="10" height="8" rx="2" fill="white" />
              <text x="50" y="85" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">10</text>
            </svg>
          </div>
        );
      case '11': // Sésamo - Marrón claro con semillas
        return (
          <div className={`relative w-12 h-12 ${className}`}>
            <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="45" fill="#DEB887" stroke="#8B4513" strokeWidth="4" />
              <rect x="25" y="25" width="50" height="50" rx="8" fill="#8B4513" />
              <ellipse cx="40" cy="45" rx="4" ry="6" fill="white" />
              <ellipse cx="50" cy="50" rx="4" ry="6" fill="white" />
              <ellipse cx="60" cy="55" rx="4" ry="6" fill="white" />
              <text x="50" y="85" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">11</text>
            </svg>
          </div>
        );
      case '12': // Sulfitos - Azul con SO2
        return (
          <div className={`relative w-12 h-12 ${className}`}>
            <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="45" fill="#4169E1" stroke="#191970" strokeWidth="4" />
              <rect x="25" y="25" width="50" height="50" rx="8" fill="#191970" />
              <text x="50" y="55" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">SO₂</text>
            </svg>
          </div>
        );
      case '13': // Altramuz - Naranja con habas
        return (
          <div className={`relative w-12 h-12 ${className}`}>
            <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="45" fill="#FF8C00" stroke="#FF6347" strokeWidth="4" />
              <rect x="25" y="25" width="50" height="50" rx="8" fill="#FF6347" />
              <ellipse cx="40" cy="45" rx="8" ry="12" fill="white" />
              <ellipse cx="60" cy="55" rx="8" ry="12" fill="white" />
              <text x="50" y="85" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">13</text>
            </svg>
          </div>
        );
      case '14': // Moluscos - Gris con concha
        return (
          <div className={`relative w-12 h-12 ${className}`}>
            <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="45" fill="#808080" stroke="#696969" strokeWidth="4" />
              <rect x="25" y="25" width="50" height="50" rx="8" fill="#696969" />
              <path d="M30 50C30 45 35 45 35 50S40 55 45 55S50 45 55 45S60 35 65 35S65 45 65 45S70 55 70 55S65 65 60 65S55 70 50 70S45 65 40 65S35 55 30 55S40 50 45 50S50 55 55 55S60 50 65 50S65 55 70 55S70 50 75 50" 
                    stroke="white" strokeWidth="3" fill="none" />
              <circle cx="45" cy="45" r="4" fill="white" />
              <text x="50" y="85" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">14</text>
            </svg>
          </div>
        );
      default:
        return null;
    }
  };

  return getIcon(code);
};

export default AllergenIcon;
