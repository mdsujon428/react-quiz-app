import classes from '../styles/TextInput.module.css';

const TextInput = ({icon,onChange,...rest}) => {
    return (
        <div className={classes.textInput}>
            <input onChange={onChange} {...rest} />
            <span className="material-icons-outlined"> {icon} </span>
       </div>
    );
};

export default TextInput;