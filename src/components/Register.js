import React, { useContext } from "react";
import styles from '../styles/components/Register.module.css';
import { useForm } from "react-hook-form";
import { RegisterContexts } from "../contexts/RegisterContexts";
import { Link } from "react-router-dom";

export default function Register(){
  const { register, handleSubmit, errors } = useForm();
  const { dataRegister, addToDb } = useContext(RegisterContexts);

  const onSubmit = dataForm => {
    dataRegister.email = dataForm.email
    dataRegister.password = dataForm.password
    addToDb()
  };


  return (
    <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
      <input name="email" defaultValue="register" ref={register} />
      
      <input name="password" ref={register({ required: true })} />

      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" />
      <Link to="/login">Fazer Login </Link>
    </form>
  );
};

