import { Box } from "../../UI/Box";
import { List } from "../../UI/List";
import { Tag } from "../../UI/Tag";

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
    <Box classes={[!!featured && "box_featured"]}>
      <div className="job-item">
        <div className={"job-item__info job-item-info"}>
          <div className="job-item-info__logo">
            <img src={logo} alt={company} />
          </div>

          <div className="job-item-info__content">
            <List classes={["job-item-info__company"]}>
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
            </List>

            <a href="#position">{position}</a>

            <List classes={["job-item__markers"]}>
              {postedAt} &#8226; {contract} &#8226; {location}
            </List>
          </div>
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
