import { createContext } from "react";
import Localbase from "localbase";

export const RegisterContexts = createContext({});

export function RegisterProvider({ children }) {
  let db = new Localbase("db");

  const dataRegister = {
    email: "",
    password: "",
  };

  const dataLogin = {
    email: "",
    password: "",
  };

  function addToDb() {
    db.collection("register")
      .get()
      .then((users) => {
        for (let i = 0; i < users.length; i++) {
          if (dataRegister.email === users[i].email) {
            alert("Email já cadastrado no nosso sistema");
            return;
          }
        }
        db.collection("register").add({
          id: Math.floor(Math.random() * 1000),
          email: dataRegister.email,
          password: dataRegister.password,
        });

        alert('Usuario cadastrado com sucesso');
      });
  }

  function checkLogin() {
    db.collection("register")
      .get()
      .then((users) => {
        for (let i = 0; i < users.length; i++) {
          if (
            dataLogin.email === users[i].email &&
            dataLogin.password === users[i].password
          ) {
            alert('voce está logado')
            return 
          }
        }
        alert("Email ou senha incorreta");
      });
  }

  return (
    <RegisterContexts.Provider
      value={{
        dataRegister,
        addToDb,
        dataLogin,
        checkLogin,
      }}
    >
      {children}
    </RegisterContexts.Provider>
  );
}
