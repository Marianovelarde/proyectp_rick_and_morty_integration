
import React from 'react'
import { useState, useEffect } from 'react'
import { useParams,useNavigate } from 'react-router-dom'


const Detail = (props) => { 

  const navigate = useNavigate()
  const {detailId} = useParams()
  const [character, setCharacter] = useState({})
  console.log(detailId)
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);
  return (
    
    <div>
          <button onClick={()=> navigate("/")}>Regresar</button>

    <div>

      <h1>Name: {character.name}</h1>

      <h1>Status: {character.status}</h1>

      <h1>Species: {character.species}</h1>

      <h1>Gender: {character.gender}</h1>

      <h1>Origin:{character.origin?.name}</h1>

      <h1>Location: {character.location?.name}</h1>

      </div>
      <img src={character.image}/>
      
      
      </div>

  )
  }

export default Detail