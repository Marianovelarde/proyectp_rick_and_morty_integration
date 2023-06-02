
import styles from "./card.module.css"
import { Link } from "react-router-dom";

export default function Card({name,species,gender,image, onClose,character,id}) {
   return (

      <Link to={`/detail/${id}`}>
      <div className={styles.divContainer}>
      
          <button className ={styles.boton} onClick={()=> onClose(id)}>X</button>
         <h2 className={styles.name}>{name}</h2>
         <img  src={image} alt="Not Found" /> 
         <h2 className={styles.subTitulo}>{species}</h2>
         <h2>{gender}</h2>
         
            
      </div>
      </Link>
   );
}
