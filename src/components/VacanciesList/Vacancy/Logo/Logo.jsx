import styles from '../Vacancy.module.scss';

function Logo({ image, alt }) {
  return (
    <div className={styles.vacancy__logo}>
      <img src={image} alt={alt} />
    </div>
  );
}
export { Logo };
