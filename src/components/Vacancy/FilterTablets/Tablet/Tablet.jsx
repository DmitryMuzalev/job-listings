import classes from './Tablet.module.scss';

function Tablet({ children }) {
  return <span className={classes.tablet}>{children}</span>;
}
export { Tablet };
