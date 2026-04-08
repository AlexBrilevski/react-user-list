import React, { useState } from 'react';
import AddUserForm from './components/AddUserForm';
import Users from './components/Users';

const initUsers = [];

function App() {
  const [users, setUsers] = useState(initUsers);

  const addUser = (userData) => {
    const id = Math.random().toString();

    setUsers(prevUsers => [{ id, ...userData }, ...prevUsers]);
  };

  return (
    <div>
      <AddUserForm onAddUser={addUser} />
      <Users users={users} />
    </div>
  );
}

export default App;
