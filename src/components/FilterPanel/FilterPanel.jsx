import { motion, AnimatePresence } from 'framer-motion';
import { useAppContext } from '../../hook/useAppContext';
import { Filter } from './Filter/Filter';
import classes from './FilterPanel.module.scss';

function FilterPanel() {
  const { filters, setFilters } = useAppContext();
  return (
    <div className={classes.panel}>
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
              <Filter>{item}</Filter>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <button onClick={() => setFilters([])}>Clear</button>
    </div>
  );
}
export { FilterPanel };
