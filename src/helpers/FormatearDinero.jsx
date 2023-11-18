import React from 'react';

const FormatoDinero = ({ monto }) => {
  // Convertir el monto a número y verificar si es un número válido
  const montoNumerico = parseFloat(monto)
  const esNumeroValido = !isNaN(montoNumerico) && isFinite(montoNumerico);
  

  // Formatear el monto solo si es un número válido, de lo contrario, mostrar un mensaje de error
  const montoFormateado = esNumeroValido
    ? new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        
      }).format(montoNumerico)
    : '';

  return <span>{montoFormateado}</span>;
};
export default FormatoDinero