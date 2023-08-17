import { useAppContext } from '../../hook/useAppContext';
import { Filter } from '../Filter/Filter';
import '../../index.scss';

function Panel() {
  const { filters } = useAppContext();
  return <div className="panel">{!!filters.length && <Filter />}</div>;
}
export { Panel };
