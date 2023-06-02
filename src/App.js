import './App.css'

import { useState } from 'react'
import { useEffect } from 'react'
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom'
import Cards from './components/Cards.jsx'
import Nav from "./components/Nav"
import About from './components/About'
import Detail from "./components/Detail"
import Form from './components/Form'


function App () {

  const [characters, setCharacters] = useState([])
  
  function onSearch (character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
         .then((response) => response.json())
         .then((data) => {
          data.name ? setCharacters([...characters, data]): 
          alert("No encontrado")
         });
    
  }

  function closeHandler(key) {
  
    const updatedCharacters = characters.filter((char) => char.id !== key);
    setCharacters(updatedCharacters);
  }
const navigate = useNavigate()
  const [access,setAccess] = useState(false)
  
  
  
  const username = "marianovelarde37@gmail.com"
  const password = "Mariano!1"
  const location = useLocation()

  const login = (userData) => {
    if(userData.username === username && userData.password === password){
      setAccess(true)
      navigate("/Home")
    }
    
  }
useEffect(() => {
   !access && navigate('/');
}, [access]);

const logOut = () => {
  access && setAccess(false)
  navigate("/")
}
  return (
    <div className='App' style={{ padding: '25px' }}>
    
    
    
      <div>
    {location.pathname !== '/' && <Nav onSearch={onSearch} />} 
    </div>
    
    <Routes>
    <Route exact path="/" element={<Form login={login} logOut={logOut}/>} />

    <Route path="/Home"
     element={<Cards characters={characters} onClose={closeHandler}/>} />
    
    <Route path="/About" 
    element={<About/>}/>
    
    
    <Route path='/detail/:detailId'
     element={<Detail/>}/>
    
    </Routes>
    <div>
    
       
      </div>
      
    
    </div>
  )
}

export default App
