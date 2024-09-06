"use client";

import { Tag } from "antd";
import { PresetColors } from "antd/es/theme/internal";
import React from "react";

const skills = [
  {
    name: "Java",
    type: "backend",
  },
  { name: "Spring", type: "backend" },
  {
    name: "Golang",
    type: "backend",
  },
  {
    name: "Javascript",
    type: "backend",
  },
  { name: "Typescript", type: "frontend" },
  {
    name: "React",
    type: "frontend",
  },
  {
    name: "Next JS",
    type: "frontend",
  },
  {
    name: "Azure",
    type: "cloud",
  },
  {
    name: "AWS",
    type: "cloud",
  },
  {
    name: "Azure DevOps",
    type: "service",
  },
  {
    name: "Github",
    type: "service",
  },
  {
    name: "Gitlab",
    type: "service",
  },
  {
    name: "Docker",
    type: "infra",
  },
  {
    name: "Kubernetes",
    type: "infra",
  },
];

export default function SkillList() {
  const categories = new Map();

  categories.set("backend", PresetColors[7]);
  categories.set("frontend", PresetColors[10]);
  categories.set("cloud", PresetColors[2]);
  categories.set("service", PresetColors[11]);
  categories.set("infra", PresetColors[1]);

  const groupBy = (array, keyGetter) => {
    const map = new Map();
    array.forEach((item) => {
      const key = keyGetter(item);
      if (!map.has(key)) {
        map.set(key, []);
      }
      map.get(key).push(item);
    });
    return map;
  };

  const groupedSkills = groupBy(skills, ({ type }) => type);

  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">Skills</h1>

      <div style={{ paddingBottom: "20px" }}>
        {Array.from(categories.entries()).map(([key, color], _) => (
          <Tag key={key} color={color}>
            {key}
          </Tag>
        ))}
      </div>
      <div>
        {Array.from(groupedSkills.entries()).map(([type, skills]) =>
          skills.map((skill) => (
            <Tag key={skill.name} color={categories.get(type)}>
              {skill.name}
            </Tag>
          ))
        )}
      </div>
    </section>
  );
}
