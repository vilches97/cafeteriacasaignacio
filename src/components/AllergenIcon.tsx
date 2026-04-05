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
          <div className={`relative w-7 h-7 ${className}`}>
            <div className="absolute inset-0 bg-orange-500 rounded-full flex items-center justify-center">
              <div className="w-5 h-5 bg-orange-700 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">🌾</span>
              </div>
            </div>
          </div>
        );
      case '2': // Crustáceos - Marrón rojizo con camarón
        return (
          <div className={`relative w-7 h-7 ${className}`}>
            <div className="absolute inset-0 bg-orange-700 rounded-full flex items-center justify-center">
              <div className="w-5 h-5 bg-orange-900 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">🦐</span>
              </div>
            </div>
          </div>
        );
      case '3': // Huevos - Amarillo con huevo roto
        return (
          <div className={`relative w-7 h-7 ${className}`}>
            <div className="absolute inset-0 bg-yellow-400 rounded-full flex items-center justify-center">
              <div className="w-5 h-5 bg-yellow-600 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">🥚</span>
              </div>
            </div>
          </div>
        );
      case '4': // Pescado - Azul con pez
        return (
          <div className={`relative w-7 h-7 ${className}`}>
            <div className="absolute inset-0 bg-blue-400 rounded-full flex items-center justify-center">
              <div className="w-5 h-5 bg-blue-700 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">🐟</span>
              </div>
            </div>
          </div>
        );
      case '5': // Cacahuetes - Marrón claro con cacahuete
        return (
          <div className={`relative w-7 h-7 ${className}`}>
            <div className="absolute inset-0 bg-amber-600 rounded-full flex items-center justify-center">
              <div className="w-5 h-5 bg-amber-800 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">🥜</span>
              </div>
            </div>
          </div>
        );
      case '6': // Soja - Verde con vaina de soja
        return (
          <div className={`relative w-7 h-7 ${className}`}>
            <div className="absolute inset-0 bg-green-500 rounded-full flex items-center justify-center">
              <div className="w-5 h-5 bg-green-700 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">🫘</span>
              </div>
            </div>
          </div>
        );
      case '7': // Lácteos - Púrpura con botella de leche
        return (
          <div className={`relative w-7 h-7 ${className}`}>
            <div className="absolute inset-0 bg-purple-500 rounded-full flex items-center justify-center">
              <div className="w-5 h-5 bg-purple-700 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">🥛</span>
              </div>
            </div>
          </div>
        );
      case '8': // Frutos secos - Marrón oscuro con nuez
        return (
          <div className={`relative w-7 h-7 ${className}`}>
            <div className="absolute inset-0 bg-amber-800 rounded-full flex items-center justify-center">
              <div className="w-5 h-5 bg-amber-900 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">🌰</span>
              </div>
            </div>
          </div>
        );
      case '9': // Apio - Verde lima con tallo de apio
        return (
          <div className={`relative w-7 h-7 ${className}`}>
            <div className="absolute inset-0 bg-lime-500 rounded-full flex items-center justify-center">
              <div className="w-5 h-5 bg-lime-700 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">🌿</span>
              </div>
            </div>
          </div>
        );
      case '10': // Mostaza - Amarillo brillante con botella
        return (
          <div className={`relative w-7 h-7 ${className}`}>
            <div className="absolute inset-0 bg-yellow-300 rounded-full flex items-center justify-center">
              <div className="w-5 h-5 bg-yellow-600 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">🌾</span>
              </div>
            </div>
          </div>
        );
      case '11': // Sésamo - Marrón claro con semillas
        return (
          <div className={`relative w-7 h-7 ${className}`}>
            <div className="absolute inset-0 bg-amber-600 rounded-full flex items-center justify-center">
              <div className="w-5 h-5 bg-amber-800 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">🫘</span>
              </div>
            </div>
          </div>
        );
      case '12': // Sulfitos - Azul con SO2
        return (
          <div className={`relative w-7 h-7 ${className}`}>
            <div className="absolute inset-0 bg-blue-500 rounded-full flex items-center justify-center">
              <div className="w-5 h-5 bg-blue-800 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">SO₂</span>
              </div>
            </div>
          </div>
        );
      case '13': // Altramuz - Naranja con habas
        return (
          <div className={`relative w-7 h-7 ${className}`}>
            <div className="absolute inset-0 bg-orange-500 rounded-full flex items-center justify-center">
              <div className="w-5 h-5 bg-orange-700 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">🌿</span>
              </div>
            </div>
          </div>
        );
      case '14': // Moluscos - Gris con concha
        return (
          <div className={`relative w-7 h-7 ${className}`}>
            <div className="absolute inset-0 bg-gray-500 rounded-full flex items-center justify-center">
              <div className="w-5 h-5 bg-gray-700 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">🐚</span>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return getIcon(code);
};

export default AllergenIcon;
