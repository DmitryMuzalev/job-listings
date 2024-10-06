import styles from './Marker.module.scss';
import { clsx } from 'clsx';

function Marker({ text }) {
  const markerStyles = clsx(
    styles.marker,
    text === 'new' && styles.new,
    text === 'featured' && styles.featured
  );

  return (
    <span className={markerStyles}>
      {text}
      {text === 'new' ? '!' : ''}
    </span>
  );
}
export { Marker };
