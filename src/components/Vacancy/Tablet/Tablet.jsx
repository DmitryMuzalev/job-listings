import { useAppContext } from '../../../hook/useAppContext';
import classes from './Tablet.module.scss';

function Tablet({ children }) {
  const { addFilter } = useAppContext();
  return (
    <div className={classes.tablet} onClick={() => addFilter(children)}>
      {children}
    </div>
  );
}
export { Tablet };
