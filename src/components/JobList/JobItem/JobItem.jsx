import { Box } from '../../UI/Box/Box';
import { List } from '../../UI/List/List';
import { Tag } from '../../UI/Tag/Tag';
import styles from './JobItem.module.scss';

function JobItem({ data }) {
  const {
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
    featured,
    new: isNew,
    logo,
    company,
  } = data;

  const tags = [role, level, ...languages, ...tools];

  return (
    <Box>
      <div className={styles.jobItem}>
        <div className={styles.jobItemLogo}>
          <img src={logo} alt={company} />
        </div>
        <div className={styles.jobItemInfo}>
          <div className={styles.jobItemInfoHeader}>
            <h2>{company}</h2>
            {(isNew || featured) && (
              <List>
                {!!isNew && (
                  <Tag bg="primary" type="marker">
                    new!
                  </Tag>
                )}
                {featured && (
                  <Tag bg="dark" type="marker">
                    featured
                  </Tag>
                )}
              </List>
            )}
          </div>
          <a href="#position">{position}</a>
          <List>
            {postedAt} &#8226; {contract} &#8226; {location}
          </List>
        </div>
        <List>
          {tags.map((item, index) => (
            <Tag key={index}>{item}</Tag>
          ))}
        </List>
      </div>
    </Box>
  );
}
export { JobItem };
