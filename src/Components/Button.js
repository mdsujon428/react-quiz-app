import classes from '../styles/Button.module.css';

const Button = ({className,type,children,...rest}) => {
    return (
        <button type={type} className={`${classes.button} ${className}`} {...rest}>
            {children} 
        </button>
    );
};

export default Button;