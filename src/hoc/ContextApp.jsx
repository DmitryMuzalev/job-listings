//_Data:
import data from "../data.json";

//_Hooks:
import { createContext, useEffect, useState } from "react";

export const ContextApp = createContext(null);

function Context({ children }) {
  const [jobList, setJobList] = useState(data);
  const [filters, setFilters] = useState(["Frontend"]);

  //_Load data:
  useEffect(() => {
    if (!filters.length) setJobList(data);
    else {
      const selectedVacancy = data.filter((vacancy) => {
        const { role, level, languages, tools } = vacancy;
        const tags = [role, level, ...languages, ...tools];
        return filters.every((filter) => tags.includes(filter));
      });
      setJobList(selectedVacancy);
    }
  }, [filters]);

  //_Actions:
  const addFilter = (filter) => {
    if (!filters.includes(filter)) setFilters([...filters, filter]);
  };

  const removeFilter = (filter) =>
    setFilters(filters.filter((item) => item !== filter));

  const value = {
    jobList,
    filters,
    addFilter,
    removeFilter,
  };
  return <ContextApp.Provider value={value}>{children}</ContextApp.Provider>;
}

export { Context };
