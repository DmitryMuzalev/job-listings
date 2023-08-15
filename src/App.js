import { FilterPanel } from './components/FilterPanel/FilterPanel';
import { VacanciesList } from './components/VacanciesList/VacanciesList';
import { useAppContext } from './hook/useAppContext';

function App() {
  const { filters } = useAppContext();
  return (
    <div className="app">
      {!!filters.length && <FilterPanel />}
      <VacanciesList />
    </div>
  );
}

export default App;
