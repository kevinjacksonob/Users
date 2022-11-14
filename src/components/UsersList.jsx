import React from 'react';

const UsersList = ({usersList , selectUser, deleteUser}) => {
  return (
    <ul>
      {
        usersList.map (user => (
          <li key={user.id}>
              <h2>Nombre: {user.first_name} {user.last_name}</h2>
              <div><b>Correo: </b>{user.email}</div>
              <div><b>Cumpleaños: </b>{user.birthday}</div>
              <button onClick={() => deleteUser(user.id)}>Borrar</button>
              <button onClick={() => selectUser(user)}>Editar</button>
          </li>
        ))
      }
    </ul>
  );
};

export default UsersList;