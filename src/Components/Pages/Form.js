import classes from '../../styles//Form.module.css';

const Form = ({children,onSubmit,className,...rest}) => {
    return (
        <form onSubmit={onSubmit} className={`${className} ${classes.form}`} action="#" {...rest}>
            {children}
        </form>
    );
};

export default Form;