
import './App.css';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddUserForm from './AddUserForm';
 

const App = () => {
  
   const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error(error));
  }, []);
  const handleUserAdded = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };


  return (
    <div>
      <h1>User List</h1>
      
       <ul>
        

         
         { users.map(user => (
          <li key={user.id}>{user.name} ({user.email})</li>
        ))/* users.map((user, index) => (
        
       <li key={user.id ? user.id : index}>{user.name} ({user.email})</li>
         ))} */}
     
      </ul>
     
      <AddUserForm onUserAdded={handleUserAdded} />
      
    </div>
  );
}


export default App;


