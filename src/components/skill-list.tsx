"use client";

import { Tag } from "antd";
import React from "react";

const gridStyle: React.CSSProperties = {
  width: "25%",
  textAlign: "center",
};

const skills = [
  "Java",
  "Spring",
  "Golang",
  "Javascript",
  "Typescript",
  "React",
  "TypeScript",
  "Next JS",
  "Azure",
  "AWS",
  "Azure DevOps",
  "Docker",
  "Kubernetes",
  "Github",
  "Gitlab",
];

const category = [
  {
    name: "Java",
    type: "backend"
  },
  { name: "Spring",
    type: "backed"
  },
{
  name: "Golang",
  type: "backend"
},
{
  name: "Javascript",
  type: "backend"
},
{ name: "Typescript",
  type: "frontend"
},
{
  name: "React",
  type: "frontend"
},
{
name:  "Next JS",
type: "frontend"
},
{
 name:  "Azure",
 type: "cloud"
},
{
 name: "AWS",
type: "cloud"
},
{
  name: "Azure DevOps",
  type: "service"
},
{
  name: "Github",
  type: "service"
},
{
  name: "Gitlab",
  type: "service"
},
{
  name: "Docker",
  type: "Infra"
},
{
  name: "Kubernetes",
  type: "Infra"
}
];

const categories = new Map();

categories.set("backend", "orange");
categories.set("frontend", "  geekblue");
categories.set("infra", "purple");
categories.set("cloud", "cyan");
categories.set("service", "lime");

export default function SkillList() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">Skills</h1>

      <div>
        {categories.entries.map((key,color) => (
          <Tag key={key} color={color|}>
            {skill}
          </Tag>
        ))}
        {skills.map((skill) => (
          <Tag key={skill} color="blue">
            {skill}
          </Tag>
        ))}
      </div>
    </section>
  );
}
