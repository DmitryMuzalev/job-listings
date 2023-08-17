import { useAppContext } from '../../../hook/useAppContext';
import classes from '../Filter.module.scss';

function FilterItem({ children }) {
  const { removeFilterItem } = useAppContext();
  return (
    <div className={classes.filter__item}>
      <p>{children}</p>
      <span onClick={() => removeFilterItem(children)}>
        <img src="./images/icon-remove.svg" alt="remove" />
      </span>
    </div>
  );
}
export { FilterItem };
