import { createContext, useState } from 'react';
import vacancies from '../data.json';

export const ContextApp = createContext(null);

function Context({ children }) {
  const [filter, setFilter] = useState([]);
  const value = { vacancies, filter, setFilter };
  return <ContextApp.Provider value={value}>{children}</ContextApp.Provider>;
}

export { Context };
