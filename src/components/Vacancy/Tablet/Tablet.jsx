import { useAppContext } from '../../../hook/useAppContext';
import classes from './Tablet.module.scss';

function Tablet({ children }) {
  const { addFilterItem } = useAppContext();
  return (
    <div className={classes.tablet} onClick={() => addFilterItem(children)}>
      {children}
    </div>
  );
}
export { Tablet };
