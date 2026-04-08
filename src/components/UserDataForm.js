import { useState } from 'react';
import classes from './UserDataFrom.module.css';

const UserDataForm = ({ onAddUser }) => {
  const [userData, setUserData] = useState({ name: '', age: '' });

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (userData.name.length === 0) {
      console.log('Please enter user name');
      return;
    }

    if (userData.name.length < 3) {
      console.log('User name must be at least 3 characters long');
      return;
    }

    onAddUser(userData);
  };

  const inputChangeHandler = (fieldId, e) => {
    setUserData(prevUserData => ({ ...prevUserData, [fieldId]: e.target.value }));
  };

  return (
    <form onSubmit={formSubmitHandler} className={classes.userDataForm}>
      <div className={classes.formControls}>
        <div className={classes.formControl}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            value={userData.name}
            onChange={(e) => inputChangeHandler('name', e)}
          />
        </div>
        <div className={classes.formControl}>
          <label htmlFor="age">Age</label>
          <input
            id="age"
            value={userData.age}
            onChange={(e) => inputChangeHandler('age', e)}
          />
        </div>
      </div>
      <div className={classes.formActions}>
        <button>Add</button>
      </div>
    </form>
  );
};

export default UserDataForm;
