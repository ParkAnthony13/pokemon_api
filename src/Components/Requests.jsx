/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
//                  THIS IS FOR POKEMON API (NON AXIOS)
//                      MUST CHANGE COMPONENT IN APP
//                            IN ORDER TO SEE
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////

import React, { useState, useEffect } from 'react'

const Requests = (props) => {
    const [pokeList, setPokeList] = useState(0);
    const [search, setSearch] = useState(20)
    const [submitNum,setSubmitNum] = useState("")
    const [click, setClick] = useState(false);

    const handleClick = () => {
        if (click === false) {
            setClick(true)
        } else {
            setClick(false)
        }
        console.log(click)
    }

    const handleChange = (e) => {
        setSearch(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitNum(search)
    }

    useEffect(() => {
        console.log("start")
        fetch(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=${submitNum}`)
            .then(response => {
                return response.json();
            }).then(response => {
                setPokeList({pokemon:response.results});
            }).catch(err=>{
                console.log(err);
            });
    },[click,submitNum])

    return (
        <div>
            <form onSubmit={ handleSubmit }>
                <h3>Set Search Range</h3>
                <input onChange={ handleChange } type="number" name="nums"/>
                <button type="submit">Search</button>
            </form>
                <button onClick={ handleClick }>PLEASE</button>
            {pokeList.pokemon ? pokeList.pokemon.map( (poke, index) => {
                return(<div key={index}>{poke.name}</div>)
                }):<p>nothing is printing</p>}
        </div>
    )
}

export default Requests;