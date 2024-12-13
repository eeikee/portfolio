import React from 'react';
import { Tag } from 'antd';

const TechnologyTags = ({ technologies }) => (
  <>
    {technologies.map((tech) => (
      <Tag color="blue" key={tech}>
        {tech}
      </Tag>
    ))}
  </>
);

export default TechnologyTags;
