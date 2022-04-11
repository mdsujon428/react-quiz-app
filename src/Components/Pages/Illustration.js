import classes from '../../styles/Illustration.module.css';

const Illustration = ({IllustrationImage,alt}) => {
  return (
    <div className={classes.illustration}>
      <img src={IllustrationImage} alt={alt} />
    </div>
  );
};

export default Illustration;
