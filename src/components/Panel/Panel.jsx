import { useAppContext } from '../../hook/useAppContext';
import { Filter } from './Filter/Filter';

function Panel() {
  const { filters } = useAppContext();
  return <div className="panel">{!!filters.length && <Filter />}</div>;
}
export { Panel };
