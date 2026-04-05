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
          <div className={`relative w-7 h-7 ${className}`}>
            <div className="absolute inset-0 bg-orange-500 rounded-full flex items-center justify-center border-2 border-orange-600">
              <span className="text-white text-xs font-bold">1</span>
            </div>
          </div>
        );
      case '2': // Crustáceos - Marrón rojizo
        return (
          <div className={`relative w-7 h-7 ${className}`}>
            <div className="absolute inset-0 bg-orange-700 rounded-full flex items-center justify-center border-2 border-orange-800">
              <span className="text-white text-xs font-bold">2</span>
            </div>
          </div>
        );
      case '3': // Huevos - Amarillo
        return (
          <div className={`relative w-7 h-7 ${className}`}>
            <div className="absolute inset-0 bg-yellow-400 rounded-full flex items-center justify-center border-2 border-yellow-500">
              <span className="text-white text-xs font-bold">3</span>
            </div>
          </div>
        );
      case '4': // Pescado - Azul
        return (
          <div className={`relative w-7 h-7 ${className}`}>
            <div className="absolute inset-0 bg-blue-400 rounded-full flex items-center justify-center border-2 border-blue-500">
              <span className="text-white text-xs font-bold">4</span>
            </div>
          </div>
        );
      case '5': // Cacahuetes - Marrón claro
        return (
          <div className={`relative w-7 h-7 ${className}`}>
            <div className="absolute inset-0 bg-amber-600 rounded-full flex items-center justify-center border-2 border-amber-700">
              <span className="text-white text-xs font-bold">5</span>
            </div>
          </div>
        );
      case '6': // Soja - Verde
        return (
          <div className={`relative w-7 h-7 ${className}`}>
            <div className="absolute inset-0 bg-green-500 rounded-full flex items-center justify-center border-2 border-green-600">
              <span className="text-white text-xs font-bold">6</span>
            </div>
          </div>
        );
      case '7': // Lácteos - Púrpura
        return (
          <div className={`relative w-7 h-7 ${className}`}>
            <div className="absolute inset-0 bg-purple-500 rounded-full flex items-center justify-center border-2 border-purple-600">
              <span className="text-white text-xs font-bold">7</span>
            </div>
          </div>
        );
      case '8': // Frutos secos - Marrón oscuro
        return (
          <div className={`relative w-7 h-7 ${className}`}>
            <div className="absolute inset-0 bg-amber-800 rounded-full flex items-center justify-center border-2 border-amber-900">
              <span className="text-white text-xs font-bold">8</span>
            </div>
          </div>
        );
      case '9': // Apio - Verde lima
        return (
          <div className={`relative w-7 h-7 ${className}`}>
            <div className="absolute inset-0 bg-lime-500 rounded-full flex items-center justify-center border-2 border-lime-600">
              <span className="text-white text-xs font-bold">9</span>
            </div>
          </div>
        );
      case '10': // Mostaza - Amarillo brillante
        return (
          <div className={`relative w-7 h-7 ${className}`}>
            <div className="absolute inset-0 bg-yellow-300 rounded-full flex items-center justify-center border-2 border-yellow-400">
              <span className="text-white text-xs font-bold">10</span>
            </div>
          </div>
        );
      case '11': // Sésamo - Marrón claro
        return (
          <div className={`relative w-7 h-7 ${className}`}>
            <div className="absolute inset-0 bg-amber-600 rounded-full flex items-center justify-center border-2 border-amber-700">
              <span className="text-white text-xs font-bold">11</span>
            </div>
          </div>
        );
      case '12': // Sulfitos - Azul
        return (
          <div className={`relative w-7 h-7 ${className}`}>
            <div className="absolute inset-0 bg-blue-500 rounded-full flex items-center justify-center border-2 border-blue-600">
              <span className="text-white text-xs font-bold">12</span>
            </div>
          </div>
        );
      case '13': // Altramuz - Naranja
        return (
          <div className={`relative w-7 h-7 ${className}`}>
            <div className="absolute inset-0 bg-orange-500 rounded-full flex items-center justify-center border-2 border-orange-600">
              <span className="text-white text-xs font-bold">13</span>
            </div>
          </div>
        );
      case '14': // Moluscos - Gris
        return (
          <div className={`relative w-7 h-7 ${className}`}>
            <div className="absolute inset-0 bg-gray-500 rounded-full flex items-center justify-center border-2 border-gray-600">
              <span className="text-white text-xs font-bold">14</span>
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
