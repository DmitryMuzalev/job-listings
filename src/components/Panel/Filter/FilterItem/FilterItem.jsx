import { useAppContext } from '../../../../hook/useAppContext';
import classes from '../Filter.module.scss';
import { motion } from 'framer-motion';

function FilterItem({ children }) {
  const { removeFilterItem } = useAppContext();
  const variants = {
    start: { scale: 1, opacity: 1 },
    end: { scale: 0.8, opacity: 0 },
  };

  return (
    <motion.div
      className={classes.filter__item}
      layout
      variants={variants}
      initial={'end'}
      animate={'start'}
      exit={'end'}
    >
      <p>{children}</p>
      <span onClick={() => removeFilterItem(children)}>
        <img src="./images/icon-remove.svg" alt="remove" />
      </span>
    </motion.div>
  );
}
export { FilterItem };
