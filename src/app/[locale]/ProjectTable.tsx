import React from 'react';
import { Table } from 'antd';
import TechnologyTags from './TechnologyTags'; // Ajuste o caminho conforme necessário

// Dados dos projetos (pode ser substituído por uma API ou banco de dados)
const projects = [
  {
    key: '1',
    title: 'Projeto 1',
    description: 'Descrição do projeto 1.',
    technologies: ['React', 'Next.js', 'Node.js'],
    links: ['https://github.com/user/project1', 'https://project1.com']
  },
  {
    key: '2',
    title: 'Projeto 2',
    description: 'Descrição do projeto 2.',
    technologies: ['JavaScript', 'CSS', 'HTML'],
    links: ['https://github.com/user/project2', 'https://project2.com']
  },
  {
    key: '3',
    title: 'Projeto 3',
    description: 'Descrição do projeto 3.',
    technologies: ['Python', 'Django', 'PostgreSQL'],
    links: ['https://github.com/user/project3', 'https://project3.com']
  },
];

const columns = [
  {
    title: 'Título',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Descrição',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Tecnologias',
    dataIndex: 'technologies',
    key: 'technologies',
  },
  {
    title: 'Links',
    dataIndex: 'links',
    key: 'links',
  },
];

const ProjectTable = () => {
  const dataSource = projects.map((project) => ({
    ...project,
    technologies: <TechnologyTags technologies={project.technologies} />,
    links: (
      <ul>
        {project.links.map((link, index) => (
          <li key={index}><a href={link} target="_blank" rel="noopener noreferrer">{link}</a></li>
        ))}
      </ul>
    )
  }));

  return (
    <div>
      <h1>Meus Projetos</h1>
      <Table columns={columns} dataSource={dataSource} pagination={false} />
    </div>
  );
};

export default ProjectTable;
  