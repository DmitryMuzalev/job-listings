import { useAppContext } from '../../hook/useAppContext';
import { Filter } from './Filter/Filter';
import classes from './FilterPanel.module.scss';

function FilterPanel() {
  const { filters, setFilters } = useAppContext();
  return (
    <div className={classes.panel}>
      <div>
        {filters.map((item, index) => (
          <div key={index}>
            <Filter>{item}</Filter>
          </div>
        ))}
      </div>
      <button onClick={() => setFilters([])}>Clear</button>
    </div>
  );
}
export { FilterPanel };
