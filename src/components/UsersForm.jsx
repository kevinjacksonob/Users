import axios from "axios";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const UsersForm = ({ getUsers, userSelected, deselectUser }) => {
  useEffect(() => {
    if (userSelected) {
      reset(userSelected);
    } else {
      reset({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        birthday: "",
      });
    }
  }, [userSelected]);

  const { handleSubmit, register, reset } = useForm();

  const submit = (data) => {
    if (userSelected) {
      axios
        .put(
          `https://users-crud1.herokuapp.com/users/${userSelected.id}/`,
          data
        )
        .then(() => {
          getUsers();
          deselectUser();
        });
    } else {
      axios
        .post("https://users-crud1.herokuapp.com/users/", data)
        .then(() => getUsers())
        .catch((error) => console.log(error.response?.data));
    }
  };

  return (
    <form className="users-form" onSubmit={handleSubmit(submit)}>
      <div className="name">
        <div className="input-container">
          <label htmlFor="first_name">Nombre</label>
          <input {...register("first_name")} type="text" id="first_name" />
        </div>
        <div className="input-container">
          <label htmlFor="last_name">Apellido</label>
          <input {...register("last_name")} type="text" id="last_name" />
        </div>
      </div>
      <div className="date">
      <div className="input-container">
        <label htmlFor="email">Correo</label>
        <input {...register("email")} type="email" id="email" />
      </div>
      <div className="input-container">
        <label htmlFor="password">Contraseña</label>
        <input {...register("password")} type="text" id="password" />
      </div>
      </div>      
      <div className="input-container">
        <label htmlFor="birthday">Cumpleaños</label>
        <input {...register("birthday")} type="date" id="birthday" />
      </div>
      <button>Guardar</button>
    </form>
  );
};

export default UsersForm;
