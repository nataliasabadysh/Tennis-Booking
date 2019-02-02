import React from 'react';
import Button from '../common/Button/Button';
import classes from './UserProfile.module.css';

const UserProfile = ({ user: { name }, onSignOut = () => null }) => (
  <div className={classes.container}>
    <img
      className={classes.image}
      src="http://icons.iconarchive.com/icons/aha-soft/people/256/check-user-icon.png"
      widt="40"
      height="40"
      alt=""
    />
    <span className={classes.name}>{name}</span>

    <Button label="Sign out" onClick={onSignOut} />
  </div>
);

export default UserProfile;
