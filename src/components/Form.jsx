
import React from 'react'
import styles  from "./form.module.css"
import Validate from './Validate';



const Form = (props) => {
  
 
  const [userData, setUserData] = React.useState({
     username: '',
     password: '' 
    });
    const [errors, setErrors] = React.useState({
      username: '',
      password: '' 
    })

    const handleInputChange = (event) => {
      const property = event.target.name
      const value = event.target.value

      setUserData({...userData, [property]: value})
      setErrors(Validate({
        ...userData, [property]: value
      }))
    }
    const handleSubmit = (event) => {
      event.preventDefault()
      props.login(userData)
    }
    const handleLogOut = () => {
      props.logOut()
    }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
    
    <label className={styles.text} htmlFor='username'>Username: </label><br/>
    <input type='text'
    name="username"
    value={userData.username}
    onChange={handleInputChange}
    />    
    <span className={styles.text}>{errors.username}</span>

    
    <label className={styles.text} htmlFor='password'>Password: </label><br/>
    <input
    type='password'
    name='password'
    value={userData.password}
    onChange={handleInputChange}
    />
    <span className={styles.text}>{errors.password}</span>
    <button type='submit'>Login
    </button>
    <button onClick={handleLogOut}>logOut</button>
    </form>
  )
}

export default Form