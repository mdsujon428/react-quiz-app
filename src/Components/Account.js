import React from "react";
import { Link } from "react-router-dom";
import useFirebase from "../hooks/useFirebase";
import classes from "../styles/Account.module.css";
// import '../styles/App.css';

const Account = () => {
  const { logOut, currentUser } = useFirebase();
  console.log(currentUser?.displayName)
  return (
    <div className={classes.account}>
      <div className={classes.userInfo}>
        <span className="material-icons-outlined" title="Account">
          account_circle
        </span>
        {currentUser?.displayName && <span>{currentUser.displayName}</span>}
      </div>
      {!currentUser?.email && <Link to="/signup">Signup</Link>}
      {currentUser?.email && (
        <span
          className="material-icons-outlined"
          title="Logout"
          onClick={() => logOut()}
        >
          {" "}
          logout{" "}
        </span>
      )}
    </div>
  );
};

export default Account;
