import React from 'react';
import UserDataForm from './components/UserDataForm';
import Users from './components/Users';

const initUsers = [
  { id: 'u1', name: 'User 1', age: 29 },
  { id: 'u2', name: 'User 2', age: 30 },
];

function App() {
  return (
    <div>
      <UserDataForm />
      <Users users={initUsers} />
    </div>
  );
}

export default App;
