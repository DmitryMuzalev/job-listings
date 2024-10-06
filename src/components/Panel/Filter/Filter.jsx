import { FilterItem } from './FilterItem/FilterItem';
import { motion } from 'framer-motion';
import styles from './Filter.module.scss';
import { useAppContext } from '../../../hook/useAppContext';

function Filter() {
  const { filters, setFilters } = useAppContext();
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      className={styles.filter}
    >
      <div>
        {filters.map((item, index) => (
          <FilterItem key={index}>{item}</FilterItem>
        ))}
      </div>
      <button onClick={() => setFilters([])}>Clear</button>
    </motion.div>
  );
}
export { Filter };
