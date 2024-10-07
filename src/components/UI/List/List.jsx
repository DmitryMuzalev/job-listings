import styles from "./List.module.scss";

function List({ children }) {
  return <div className={styles.list}>{children}</div>;
}
export { List };
