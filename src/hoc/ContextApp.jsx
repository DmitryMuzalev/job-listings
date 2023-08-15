import { createContext, useEffect, useState } from 'react';
import data from '../data.json';

export const ContextApp = createContext(null);

function Context({ children }) {
  const [vacancies, setVacancies] = useState(data);
  const [filters, setFilters] = useState(['Frontend']);

  useEffect(() => {
    if (!filters.length) setVacancies(data);
    else {
      const selectedVacancy = data.filter((vacancy) => {
        const { role, level, languages, tools } = vacancy;
        const tags = [role, level, ...languages, ...tools];
        return filters.every((filter) => tags.includes(filter));
      });
      setVacancies(selectedVacancy);
    }
  }, [filters]);

  const addFilter = (filter) => {
    if (!filters.includes(filter)) setFilters([...filters, filter]);
  };
  const removeFilter = (filter) =>
    setFilters(filters.filter((item) => item !== filter));

  const value = { vacancies, filters, addFilter, removeFilter, setFilters };
  return <ContextApp.Provider value={value}>{children}</ContextApp.Provider>;
}

export { Context };
