import React from 'react';

interface AllergenIconProps {
  code: string;
  className?: string;
}

const AllergenIcon: React.FC<AllergenIconProps> = ({ code, className = "" }) => {
  const getIcon = (code: string) => {
    switch (code) {
      case '1': // Cereales con gluten - Espiga de trigo
        return (
          <div className={`relative w-7 h-7 ${className}`}>
            <div className="absolute inset-0 bg-orange-500 rounded-full flex items-center justify-center border-2 border-orange-600">
              <span className="text-white text-lg font-bold">🌾</span>
            </div>
          </div>
        );
      case '2': // Crustáceos - Camarón
        return (
          <div className={`relative w-7 h-7 ${className}`}>
            <div className="absolute inset-0 bg-orange-700 rounded-full flex items-center justify-center border-2 border-orange-800">
              <span className="text-white text-lg font-bold">🦐</span>
            </div>
          </div>
        );
      case '3': // Huevos - Huevo
        return (
          <div className={`relative w-7 h-7 ${className}`}>
            <div className="absolute inset-0 bg-yellow-400 rounded-full flex items-center justify-center border-2 border-yellow-500">
              <span className="text-white text-lg font-bold">🥚</span>
            </div>
          </div>
        );
      case '4': // Pescado - Pez
        return (
          <div className={`relative w-7 h-7 ${className}`}>
            <div className="absolute inset-0 bg-blue-400 rounded-full flex items-center justify-center border-2 border-blue-500">
              <span className="text-white text-lg font-bold">🐟</span>
            </div>
          </div>
        );
      case '5': // Cacahuetes - Cacahuete
        return (
          <div className={`relative w-7 h-7 ${className}`}>
            <div className="absolute inset-0 bg-amber-600 rounded-full flex items-center justify-center border-2 border-amber-700">
              <span className="text-white text-lg font-bold">🥜</span>
            </div>
          </div>
        );
      case '6': // Soja - Vaina de soja
        return (
          <div className={`relative w-7 h-7 ${className}`}>
            <div className="absolute inset-0 bg-green-500 rounded-full flex items-center justify-center border-2 border-green-600">
              <span className="text-white text-lg font-bold">🫘</span>
            </div>
          </div>
        );
      case '7': // Lácteos - Botella de leche
        return (
          <div className={`relative w-7 h-7 ${className}`}>
            <div className="absolute inset-0 bg-purple-500 rounded-full flex items-center justify-center border-2 border-purple-600">
              <span className="text-white text-lg font-bold">🥛</span>
            </div>
          </div>
        );
      case '8': // Frutos secos - Nuez
        return (
          <div className={`relative w-7 h-7 ${className}`}>
            <div className="absolute inset-0 bg-amber-800 rounded-full flex items-center justify-center border-2 border-amber-900">
              <span className="text-white text-lg font-bold">🌰</span>
            </div>
          </div>
        );
      case '9': // Apio - Tallo de apio
        return (
          <div className={`relative w-7 h-7 ${className}`}>
            <div className="absolute inset-0 bg-lime-500 rounded-full flex items-center justify-center border-2 border-lime-600">
              <span className="text-white text-lg font-bold">🌿</span>
            </div>
          </div>
        );
      case '10': // Mostaza - Botella de mostaza
        return (
          <div className={`relative w-7 h-7 ${className}`}>
            <div className="absolute inset-0 bg-yellow-300 rounded-full flex items-center justify-center border-2 border-yellow-400">
              <span className="text-white text-lg font-bold">🌾</span>
            </div>
          </div>
        );
      case '11': // Sésamo - Semillas de sésamo
        return (
          <div className={`relative w-7 h-7 ${className}`}>
            <div className="absolute inset-0 bg-amber-600 rounded-full flex items-center justify-center border-2 border-amber-700">
              <span className="text-white text-lg font-bold">🫘</span>
            </div>
          </div>
        );
      case '12': // Sulfitos - SO2
        return (
          <div className={`relative w-7 h-7 ${className}`}>
            <div className="absolute inset-0 bg-blue-500 rounded-full flex items-center justify-center border-2 border-blue-600">
              <span className="text-white text-lg font-bold">SO₂</span>
            </div>
          </div>
        );
      case '13': // Altramuz - Habas
        return (
          <div className={`relative w-7 h-7 ${className}`}>
            <div className="absolute inset-0 bg-orange-500 rounded-full flex items-center justify-center border-2 border-orange-600">
              <span className="text-white text-lg font-bold">🌿</span>
            </div>
          </div>
        );
      case '14': // Moluscos - Concha
        return (
          <div className={`relative w-7 h-7 ${className}`}>
            <div className="absolute inset-0 bg-gray-500 rounded-full flex items-center justify-center border-2 border-gray-600">
              <span className="text-white text-lg font-bold">🐚</span>
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
