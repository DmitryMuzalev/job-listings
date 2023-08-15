import { useAppContext } from '../../hook/useContext';
import { Vacancy } from '../Vacancy/Vacancy';

function VacanciesList() {
  const { vacancies } = useAppContext();
  return (
    <ul>
      {vacancies.map((vacancy) => (
        <li key={vacancy.id}>
          <Vacancy data={vacancy} />
        </li>
      ))}
    </ul>
  );
}
export { VacanciesList };