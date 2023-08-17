import { useAppContext } from '../../hook/useAppContext';
import { AnimatePresence, motion } from 'framer-motion';
import { Vacancy } from './Vacancy/Vacancy';

function VacanciesList() {
  const { vacancies } = useAppContext();
  const variants = {
    start: { opacity: 1 },
    stop: { opacity: 0 },
  };
  return (
    <motion.ul layout transition={{ duration: 0.3 }}>
      <AnimatePresence>
        {vacancies.map((vacancy) => (
          <motion.li
            layout
            variants={variants}
            initial={'stop'}
            animate={'start'}
            exit={'stop'}
            transition={{ duration: 0.3 }}
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
