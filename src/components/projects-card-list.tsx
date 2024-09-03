"use client";

import { Card, Image } from "antd";
import { Project } from "data/Projects";

type Props = {
  projects: Project[];
};

const gridStyle: React.CSSProperties = {
  width: "100%",
  textAlign: "center",
};

export default function ProjectCardList({ projects }: Props) {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">Projects</h1>

      <Card>
        {projects.map((project) => (
          <Card.Grid style={gridStyle} key={project.id}>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              <Image width={200} src={project.cover} />
              <p style={{ padding: "20px" }}>{project.name}</p>
            </div>
          </Card.Grid>
        ))}
      </Card>
    </section>
  );
}
