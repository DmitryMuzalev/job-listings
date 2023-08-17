import { FilterItem } from './FilterItem/FilterItem';
import { motion, AnimatePresence } from 'framer-motion';
import classes from './Filter.module.scss';
import { useAppContext } from '../../../hook/useAppContext';

function Filter() {
  const { filters, setFilters } = useAppContext();
  return (
    <div className={classes.filter}>
      <div>
        <AnimatePresence initial={false} mode="sync">
          {filters.map((item, index) => (
            <motion.div
              layout
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring' }}
              key={index}
            >
              <FilterItem>{item}</FilterItem>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <button onClick={() => setFilters([])}>Clear</button>
    </div>
  );
}
export { Filter };
