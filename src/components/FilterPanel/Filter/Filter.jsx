import { useAppContext } from '../../../hook/useAppContext';
import classes from './Filter.module.scss';

function Filter({ children }) {
  const { removeFilter } = useAppContext();
  return (
    <div className={classes.filter}>
      <p>{children}</p>
      <span onClick={() => removeFilter(children)}>
        <img src="./images/icon-remove.svg" alt="remove" />
      </span>
    </div>
  );
}
export { Filter };
