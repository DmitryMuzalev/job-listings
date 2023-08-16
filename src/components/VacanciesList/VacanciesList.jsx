import { useAppContext } from '../../hook/useAppContext';
import { Vacancy } from '../Vacancy/Vacancy';
import { AnimatePresence, motion } from 'framer-motion';

function VacanciesList() {
  const { vacancies } = useAppContext();
  return (
    <motion.ul layout transition={{ duration: 0.5 }}>
      <AnimatePresence>
        {vacancies.map((vacancy) => (
          <motion.li
            transition={{ duration: 0.3 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            layout
            key={vacancy.id}
          >
            <Vacancy data={vacancy} />
          </motion.li>
        ))}
      </AnimatePresence>
    </motion.ul>
  );
}
export { VacanciesList };
