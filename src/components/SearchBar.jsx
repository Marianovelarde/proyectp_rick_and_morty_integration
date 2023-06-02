import { useState } from "react";
import styles from "./card.module.css"



export default function SearchBar(props) {
   const [character, setCharacter] = useState("")

   const handleInputChange = (event) => {
     
      const {value} = event.target
      setCharacter(value)
   
      // setCharacter(value.target.value  )                                                                       
   }
   // const handleAddClick = () => {
   //    // const example = {
   //    //    name: 'Morty Smith',
   //    //    species: 'Human',
   //    //    gender: 'Male',
   //    //    image: 'https://rickanddmortyapi.com/api/character/avatar/2.jpeg',
   //    // };
   //    // const inputValue = document.querySelector('input[type="search"]').value;
   //    // props.onSearch(inputValue);
   // }
   return (
      
      <div className={styles.divBoton}>
      
          <input className={styles.inputt} type='search' onChange={handleInputChange} />
      <button className={styles.botonSearch}onClick={() => props.onSearch(character)}>Agregar</button> 
      </div>
   );
}
