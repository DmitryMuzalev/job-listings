import classes from './FilterTablet.module.scss';

function FilterTablet({ children }) {
  return <span className={classes.filterTablet}>{children}</span>;
}
export { FilterTablet };
