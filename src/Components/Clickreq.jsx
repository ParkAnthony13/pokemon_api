import React, { useState, useEffect } from 'react'
import axios from "axios"


const Clickreq = (props) => {

    const [pokeList, setPokeList] = useState([])

    const handleClick = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
            .then(response => {
                const {results} = response.data
                console.log(response.data.results)
                setPokeList(results)
            })    // what to do when you get a successful response // axios puts response inside data, so you have to response.data to accesss it
            .catch(err => console.log(`Encountered Error: ${err}`))    // what to do when you get unsuccessful response (error)
    }

    return (
        <div>
                <button onClick={ handleClick }>PLEASE</button>
                {pokeList ? pokeList.map( (poke, index) => {
                return(<div key={index}>{poke.name}</div>)
                }):<p>nothing is printing</p>}
        </div>
    )
}

export default Clickreq;