'use client';

import React from 'react';
import { List, Tag } from 'antd';
import { projects } from 'data/Projects';
import Item from 'antd/es/list/Item';
import { categories } from './skill-list';

const App: React.FC = () => (
  <section>
    <h1 className="mb-8 text-2xl font-semibold tracking-tighter">Projects</h1>
    <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px' }}>
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 4,
        }}
        dataSource={projects}
        renderItem={(item) => (
          <List.Item style={{ fontSize: '20px' }}
            key={item.name}
            extra={
              item.cover != "" ?
                <img
                  width={272}
                  alt="logo"
                  src={item.cover}
                /> : ""
            }
          >
            <List.Item.Meta style={{ fontSize: '24px', fontWeight: 'bold' }}
              title={item.name}
            />
            <div key={item.name}>
              {item.tecnologies.map(techItem =>
                <Tag key={techItem.name} color={categories.get(techItem.type)}>
                  {techItem.name}
                </Tag>
              )}
            </div>
            {item.description}
            <div style={{ fontSize: '16px' }}>
              {item.links && item.links.length > 0 && (
                <ul>
                  {item.links.map((link, index) => (
                    <li key={index}>
                      <a href={link} target="_blank" rel="noopener noreferrer">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </List.Item>
        )}
      />
    </div>
  </section>
);

export default App;
