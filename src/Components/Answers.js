import Checkbox from '../Components/Checkbox';
import classes from '../styles//Answers.module.css';

const Answers = () => {
    return (
        <div className={classes.answers}>
            <Checkbox className={classes.answer} text="Answer component"/>
        </div>
    )
};

export default Answers;