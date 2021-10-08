import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
import 'animate.css';

export const GifGrid = ({ category }) => {

    const {data:images, loading} = useFetchGifs(category);

    return (
        <>
        <h3> { category } </h3>
        {/* loading ? 'Cargando...' : '' */}
        {loading && <p className="animate_animated animate_flash">Cargando ....</p>}
        <div className="card-grid">
            {
                images.map( img => (
                        <GifGridItem
                        key={img.id} 
                        { ...img}
                        />
                    ))
                }
        </div>
        </>
    )
}
