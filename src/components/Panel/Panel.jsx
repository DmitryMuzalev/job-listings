import { AnimatePresence } from 'framer-motion';
import { useAppContext } from '../../hook/useAppContext';
import { Filter } from './Filter/Filter';

function Panel() {
  const { filters } = useAppContext();
  return (
    <div className="panel">
      {' '}
      <AnimatePresence initial={false}>
        {!!filters.length && <Filter />}
      </AnimatePresence>
    </div>
  );
}
export { Panel };
