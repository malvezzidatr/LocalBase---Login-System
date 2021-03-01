import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { RegisterContexts } from "../contexts/RegisterContexts";
import styles from "../styles/components/Formulary.module.css";

export default function Formulary() {
  const { register, handleSubmit, errors } = useForm();
  const { dataLogin, checkLogin } = useContext(RegisterContexts);

  const onSubmit = (data) => {
    dataLogin.email = data.email;
    dataLogin.password = data.password;
    checkLogin();
    
  };

  return (
    
      <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
        <input name="email" defaultValue="login" ref={register} />

        <input name="password" ref={register({ required: true })} />

        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" />
        <Link to="/register">Não possui conta? Clique aqui </Link>
      </form>
    
  );
}
