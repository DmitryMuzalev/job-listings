import { Header } from "./components/Header/Header";
import { FilterPanel } from "./components/FilterPanel/FilterPanel";
import { JobList } from "./components/JobList/JobList";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="container">
        <FilterPanel />
        <JobList />
      </main>
    </div>
  );
}

export default App;
