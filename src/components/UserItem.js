import classes from './UserItem.module.css';

const UserItem = () => {
  return (
    <div className={classes.userItem}>
      <p className={classes.name}>Name</p>
      <p>Age</p>
    </div>
  );
};

export default UserItem;
