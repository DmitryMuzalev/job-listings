import { FilterPanel } from './components/FilterPanel/FilterPanel';
import { VacanciesList } from './components/VacanciesList/VacanciesList';

function App() {
  return (
    <div className="app">
      <FilterPanel />
      <VacanciesList />
    </div>
  );
}

export default App;
