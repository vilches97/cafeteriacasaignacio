import React from 'react';

interface AllergenIconProps {
  code: string;
  className?: string;
}

const AllergenIcon: React.FC<AllergenIconProps> = ({ code, className = "" }) => {
  const getIcon = (code: string) => {
    switch (code) {
      case '1': // Cereales con gluten - Naranja
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <circle cx="12" cy="12" r="12" fill="#FF8C00"/>
            <rect x="6" y="6" width="12" height="12" fill="#8B4513"/>
            <path d="M9 9h6v6H9z" fill="#D2691E"/>
            <path d="M10 11h4v2h-4z" fill="#FFD700"/>
            <path d="M11 10h2v4h-2z" fill="#FFD700"/>
          </svg>
        );
      case '2': // Crustáceos - Marrón rojizo
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <circle cx="12" cy="12" r="12" fill="#CD853F"/>
            <rect x="6" y="6" width="12" height="12" fill="#8B4513"/>
            <path d="M10 10h4v4h-4z" fill="#FF6347"/>
            <path d="M11 11h2v2h-2z" fill="#FFA500"/>
          </svg>
        );
      case '3': // Huevos - Amarillo
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <circle cx="12" cy="12" r="12" fill="#FFD700"/>
            <rect x="6" y="6" width="12" height="12" fill="#FFA500"/>
            <path d="M10 10h4v4h-4z" fill="#FFFFE0"/>
            <path d="M11 11h2v2h-2z" fill="#FFD700"/>
          </svg>
        );
      case '4': // Pescado - Azul
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <circle cx="12" cy="12" r="12" fill="#87CEEB"/>
            <rect x="6" y="6" width="12" height="12" fill="#4682B4"/>
            <path d="M10 10h4v4h-4z" fill="#B0E0E6"/>
            <path d="M11 11h2v2h-2z" fill="#1E90FF"/>
          </svg>
        );
      case '5': // Cacahuetes - Marrón claro
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <circle cx="12" cy="12" r="12" fill="#DEB887"/>
            <rect x="6" y="6" width="12" height="12" fill="#8B4513"/>
            <path d="M10 10h4v4h-4z" fill="#F4A460"/>
            <path d="M11 11h2v2h-2z" fill="#D2691E"/>
          </svg>
        );
      case '6': // Soja - Verde
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <circle cx="12" cy="12" r="12" fill="#90EE90"/>
            <rect x="6" y="6" width="12" height="12" fill="#228B22"/>
            <path d="M10 10h4v4h-4z" fill="#98FB98"/>
            <path d="M11 11h2v2h-2z" fill="#32CD32"/>
          </svg>
        );
      case '7': // Lácteos - Púrpura
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <circle cx="12" cy="12" r="12" fill="#9370DB"/>
            <rect x="6" y="6" width="12" height="12" fill="#4B0082"/>
            <path d="M10 10h4v4h-4z" fill="#DDA0DD"/>
            <path d="M11 11h2v2h-2z" fill="#8A2BE2"/>
          </svg>
        );
      case '8': // Frutos secos - Marrón oscuro
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <circle cx="12" cy="12" r="12" fill="#8B4513"/>
            <rect x="6" y="6" width="12" height="12" fill="#654321"/>
            <path d="M10 10h4v4h-4z" fill="#A0522D"/>
            <path d="M11 11h2v2h-2z" fill="#D2691E"/>
          </svg>
        );
      case '9': // Apio - Verde lima
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <circle cx="12" cy="12" r="12" fill="#32CD32"/>
            <rect x="6" y="6" width="12" height="12" fill="#228B22"/>
            <path d="M10 10h4v4h-4z" fill="#90EE90"/>
            <path d="M11 11h2v2h-2z" fill="#00FF00"/>
          </svg>
        );
      case '10': // Mostaza - Amarillo brillante
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <circle cx="12" cy="12" r="12" fill="#FFD700"/>
            <rect x="6" y="6" width="12" height="12" fill="#DAA520"/>
            <path d="M10 10h4v4h-4z" fill="#FFFFE0"/>
            <path d="M11 11h2v2h-2z" fill="#FFA500"/>
          </svg>
        );
      case '11': // Sésamo - Marrón claro
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <circle cx="12" cy="12" r="12" fill="#DEB887"/>
            <rect x="6" y="6" width="12" height="12" fill="#8B4513"/>
            <path d="M10 10h4v4h-4z" fill="#F4A460"/>
            <path d="M11 11h2v2h-2z" fill="#D2691E"/>
          </svg>
        );
      case '12': // Sulfitos - Azul
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <circle cx="12" cy="12" r="12" fill="#4169E1"/>
            <rect x="6" y="6" width="12" height="12" fill="#191970"/>
            <path d="M10 10h4v4h-4z" fill="#87CEEB"/>
            <path d="M11 11h2v2h-2z" fill="#0000CD"/>
          </svg>
        );
      case '13': // Altramuz - Naranja
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <circle cx="12" cy="12" r="12" fill="#FF8C00"/>
            <rect x="6" y="6" width="12" height="12" fill="#FF6347"/>
            <path d="M10 10h4v4h-4z" fill="#FFA500"/>
            <path d="M11 11h2v2h-2z" fill="#FF4500"/>
          </svg>
        );
      case '14': // Moluscos - Gris
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <circle cx="12" cy="12" r="12" fill="#808080"/>
            <rect x="6" y="6" width="12" height="12" fill="#696969"/>
            <path d="M10 10h4v4h-4z" fill="#D3D3D3"/>
            <path d="M11 11h2v2h-2z" fill="#A9A9A9"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return getIcon(code);
};

export default AllergenIcon;
