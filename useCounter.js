import { useState } from "react";

// Creamos la función del contador con un valor por defecto de 10
export const useCounter = (initialValue = 10) => {
  // Definimos el estado inicial de nuestro hook
  const [counter, setCounter] = useState(initialValue);

  // Vamos a definir la función para incrementar
  const increment = ( value = 1 ) => {
    // Sumamos
    setCounter( (current) => current + value);
  };

  // Creamos el metedo para decrementar
  const decrement = ( value = 1 ) => {
    // No dejamos que baje de 0
    if (counter === 0) return;

    // Restamos
    setCounter( (current) => current - value);
  };

  // Creamos el método para resetear
  const reset = () => {
    // Reseteamos
    setCounter(initialValue);
  };

  return {
    counter,
    increment,
    decrement,
    reset,
  };
};
