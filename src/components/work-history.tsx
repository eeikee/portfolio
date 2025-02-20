"use client";

import { Timeline } from "antd";
import { Work } from "data/Works";
import React from "react";

const gridStyle: React.CSSProperties = {
  width: "25%",
  textAlign: "center",
};

type Props = {
  works: Work[];
};

export default function WorkHistory({ works }: Props) {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Experiences
      </h1>

      <div
        style={{ width: "100%", display: "flex", justifyContent: "flex-start" }}
      >
        <Timeline
          style={{ color: "white" }}
          mode={"left"}
          reverse={false}
          pending="Coming next..."
          items={works}
        />
      </div>
    </section>
  );
}
