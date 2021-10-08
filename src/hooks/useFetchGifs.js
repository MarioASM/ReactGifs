import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = (category) => {
  const [state, setState] = useState({
      data: [],
      loading: true
  })
  
        //ejecutar 1 vez algo cuando el componente es renderizado
        useEffect(() => {
          getGifs(category)
            .then(resp => {
              setState({
                data: resp,
                loading: false
              });
            })
      // si la categoria cambia hay que añadirla al [] para que se vuelva a hacer la peticion 
      }, [category])

      return state;


}
