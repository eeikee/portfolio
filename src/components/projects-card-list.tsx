"use client"

import { Card, Image } from 'antd';
import { Project } from 'data/Projects';

type Props = {
  projects: Project[]
}

const gridStyle: React.CSSProperties = {
  width: '100%',
  textAlign: 'center',
};

export default function ProjectCardList({ projects }: Props) {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">Projects</h1>

      <Card title="Card Title">
        {projects.map((project) => (
          <Card.Grid style={gridStyle} key={project.id}><Image
            width={200}
            src={project.cover}
          />{project.name}</Card.Grid>
        )
        )}
      </Card>
    </section >
  )
}
