import React from 'react'

const regexemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/;

const numberAndLetter = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

const Validate = (userData) => {
  const errors = {}

  if(!regexemail.test(userData.username)) {
    errors.username = "Debe ser un Email"
  }
  if(!userData.username){
    errors.username = "Campo obligatorio"
  }
  if(userData.username.length > 35) {
    errors.username = "No puede tener mas de 35 caracteres"
  }
  if(!numberAndLetter.test(userData.password)) {
    errors.password= "Debe contener una mayusculas,minusculas, numeros y simbolos"
  }
  if(userData.password.length < 6 || userData.password > 10) {
      errors.password = "La contraseña debe tener entre 6 y 10 caracteres"
  }
  return errors
}


export default Validate