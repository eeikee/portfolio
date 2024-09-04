'use client';

import { Card } from 'antd';
import React from 'react';

const gridStyle: React.CSSProperties = {
  width: '25%',
  textAlign: 'center',
};

export default function SkillList() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">Skills</h1>

      <Card title="Backend">
        <Card.Grid style={gridStyle}>Java</Card.Grid>
        <Card.Grid style={gridStyle}>Spring Framework</Card.Grid>
        <Card.Grid style={gridStyle}>Golang</Card.Grid>
      </Card>
      <Card title="Frontend">
        <Card.Grid style={gridStyle}>Javascript</Card.Grid>
        <Card.Grid style={gridStyle}>Typescript</Card.Grid>
        <Card.Grid style={gridStyle}>React</Card.Grid>
        <Card.Grid style={gridStyle}>Next Js</Card.Grid>
      </Card>
      <Card title="Cloud">
        <Card.Grid style={gridStyle}>Azure</Card.Grid>
        <Card.Grid style={gridStyle}>Azure DevOps</Card.Grid>
        <Card.Grid style={gridStyle}>AWS</Card.Grid>
      </Card>
      <Card title="Infra and others">
        <Card.Grid style={gridStyle}>Docker</Card.Grid>
        <Card.Grid style={gridStyle}>Kubernetes </Card.Grid>
        <Card.Grid style={gridStyle}>Github</Card.Grid>
      </Card>
    </section >
  )
}
