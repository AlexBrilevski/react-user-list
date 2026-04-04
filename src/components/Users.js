import UserItem from "./UserItem";

import classes from './Users.module.css';

const Users = ({ users }) => {
  return (
    <div className={classes.users}>
      <ul className={classes.usersList}>
        {users.map(user => (
          <li key={user.id}>
            <UserItem {...user} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
