import { useEffect, useState } from "react";

// Hacemos un hook para recibir peticiones a url
export const useFetch = (url) => {
  // creamos el useState para saber el estado
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  });
  

  // Creamos una función para mandar a llamar el url
  const getFetch = async () => {
    // Ponemos el isLoading en true para que avise que esta cargando
    setState({
      ...state,
      isLoading: true,
    });

    // mandamos a buscar la url
    const resp = await fetch(url);
    // extraemos la data
    const data = await resp.json();
    // // Vemos que hay
    // console.log(data);
    // si la respuesta sale bien y tenemos data la guardamos en el estado
    setState({
      data,
      isLoading: false,
      hasError: null,
    });
  };

  // Mandamos un useEffect para que se lance la busqueda de la pag cada vez que viene una nueva
  useEffect(() => {
    getFetch();
  }, [url]);

  // Retornamos el objeto
  return {
    data:      state.data,
    isLoading: state.isLoading,
    hasError:  state.hasError,
    getFetch,
  };
};
