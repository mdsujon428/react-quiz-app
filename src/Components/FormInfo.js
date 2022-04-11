import classes from "../styles/FormInfo.module.css";

const FormInfo = ({children}) => {
  return (
    <div className={classes.info}>
      <span> {children} </span>
    </div>
  );
};

export default FormInfo;
