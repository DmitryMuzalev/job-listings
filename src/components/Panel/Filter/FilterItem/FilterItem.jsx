import { useAppContext } from '../../../../hook/useAppContext';
import styles from '../Filter.module.scss';
import { motion } from 'framer-motion';

function FilterItem({ children }) {
  const { removeFilterItem } = useAppContext();

  return (
    <motion.div
      className={styles.filter__item}
      layout
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
    >
      <p>{children}</p>
      <span onClick={() => removeFilterItem(children)}>
        <img src="./images/icon-remove.svg" alt="remove" />
      </span>
    </motion.div>
  );
}
export { FilterItem };
