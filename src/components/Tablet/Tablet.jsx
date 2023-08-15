import classes from './Tablet.module.scss';

function Tablet({ children }) {
  return <div className={classes.tablet}>{children}</div>;
}
export { Tablet };
