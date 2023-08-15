import { useContext } from 'react';
import { ContextApp } from '../hoc/ContextApp';

export const useAppContext = () => useContext(ContextApp);
