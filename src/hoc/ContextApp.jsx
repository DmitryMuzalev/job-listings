import { createContext } from 'react';
import vacancies from '../data.json';

export const ContextApp = createContext(null);

function Context({ children }) {
  const value = { vacancies };
  return <ContextApp.Provider value={value}>{children}</ContextApp.Provider>;
}

export { Context };
