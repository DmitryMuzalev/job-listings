import classes from '../Vacancy.module.scss';

function Logo({ image, alt }) {
  return (
    <div className={classes.vacancy__logo}>
      <img src={image} alt={alt} />
    </div>
  );
}
export { Logo };
