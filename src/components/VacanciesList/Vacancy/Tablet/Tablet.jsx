import { useAppContext } from '../../../../hook/useAppContext';
import styles from './Tablet.module.scss';

function Tablet({ children }) {
  const { addFilterItem } = useAppContext();
  return (
    <div className={styles.tablet} onClick={() => addFilterItem(children)}>
      {children}
    </div>
  );
}
export { Tablet };
