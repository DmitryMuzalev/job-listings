import styles from "./JobList.module.scss";
import { useAppContext } from "../../hook/useAppContext";
import { JobItem } from "./JobItem/JobItem";

function JobList() {
  const { jobList } = useAppContext();
  return (
    <div className={styles.jobList}>
      <ul>
        {jobList.map((item) => (
          <JobItem key={item.id} data={item} />
        ))}
      </ul>
    </div>
  );
}
export { JobList };
