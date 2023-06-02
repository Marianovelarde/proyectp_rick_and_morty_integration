import Card from './Card';

export default function Cards(props) {
   const { characters, onClose } = props;
   
   return <div>
    {
   characters.map((char, id) => { 
      return (  
      <Card 
      id={char.id}
      key={char.id}
      name={char.name} 
      species={char.species}
      gender={char.gender}
      image={char.image}
      onClose={onClose.bind(null, char.id)}
      />
      
      
      )

    })
   }
   </div>;
}
