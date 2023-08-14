import classes from './Marker.module.scss';
import { clsx } from 'clsx';

function Marker({ text }) {
  const styles = clsx(
    classes.marker,
    text === 'new' && classes.new,
    text === 'featured' && classes.featured
  );

  return (
    <span className={styles}>
      {text}
      {text === 'new' ? '!' : ''}
    </span>
  );
}
export { Marker };
