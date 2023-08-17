import { FilterItem } from './FilterItem/FilterItem';
import { AnimatePresence, motion } from 'framer-motion';
import classes from './Filter.module.scss';
import { useAppContext } from '../../../hook/useAppContext';

function Filter() {
  const { filters, setFilters } = useAppContext();
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      className={classes.filter}
    >
      <div>
        <AnimatePresence initial={false}>
          {filters.map((item, index) => (
            <FilterItem key={index}>{item}</FilterItem>
          ))}
        </AnimatePresence>
      </div>
      <button onClick={() => setFilters([])}>Clear</button>
    </motion.div>
  );
}
export { Filter };
