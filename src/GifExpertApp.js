import React, {useState} from 'react'
import { CategoryAdd } from './components/CategoryAdd'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Ghost in the shell'])

 /*    const handleAdd = () => {
        //setCategories( [...categories, "HunterXHunter"] );
        setCategories( cats => [...cats, 'HunterXHunter'] );
    } */

    return (
        <>
            <h1>GifExpertApp</h1>
            <CategoryAdd setCategories={ setCategories }/>
            <hr />

            <ol>
                {
                    categories.map( category => 
                        <GifGrid 
                            key={ category }
                            category={ category }
                        />)
                }
            </ol>
        </>
    )
}

