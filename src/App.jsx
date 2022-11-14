
import axios from 'axios';
import { useEffect, useState } from 'react'
import './App.css'
import UsersForm from './components/UsersForm';
import UsersList from './components/UsersList';

function App() {

  const [usersList,setUsersList] = useState([]);
  const [userSelected,setUserSelected] = useState(null);

  useEffect(() => {
      axios.get('https://users-crud1.herokuapp.com/users/')
        .then(res => setUsersList(res.data));
  },[])

  const getUsers = () => {
    axios.get('https://users-crud1.herokuapp.com/users/')
        .then(res => setUsersList(res.data));
  }

  const selectUser = (user) => {
    setUserSelected(user);
  }

  const deselectUser = () =>{
    setUserSelected (null);
  }

  const deleteUser = (id) =>{
    axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
    .then(() => getUsers());
  }

  return (
    <div className="App">      
      <UsersList usersList={usersList} selectUser={selectUser} deleteUser={deleteUser}/>  
      <UsersForm getUsers={getUsers} userSelected={userSelected} deselectUser={deselectUser}/>    
    </div>
  )
}

export default App
