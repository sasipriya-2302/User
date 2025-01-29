import React, { useState } from 'react';
import axios from 'axios';
const AddUserForm = ({ onUserAdded }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Sending data to backend:", { name, email });
      axios.post('http://localhost:8080/api/users', { name, email })
        .then(response => {
          onUserAdded(response.data);
          console.log("User added successfully:", response.data);
          setName('');
          setEmail('');
        })
        .catch(error => console.error(error));
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Add User</button>
    </form>
  );
};
export default AddUserForm;
