"use client";

import { Card, Divider, List } from "antd";
import { useTranslations } from "next-intl";
import EmailForm from "../email-form";
import WhatsAppButton from "../whatsapp-btn";

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

const data = [
  {
    title: "Email",
    action: "mailto:",
    content: "ekonuma12@gmail.com",
  },
  {
    title: "Phone",
    action: "tel:",
    content: "+81 (070) 9186-0325",
  },
  {
    title: "Linkedin",
    action: "",
    content: "https://www.linkedin.com/in/ekonuma/",
  },
];

export default function Footer() {
  const t = useTranslations("Footer");
  return (
    <footer className="mb-16">
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter text-left">Contacts</h1>
      <List
        grid={{
          gutter: 10,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 5,
          xxl: 6,
        }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item style={{ display: 'inline-block' }}>
            <Card className="footer-card"
              title={item.title}
              style={{
                width: 'auto',
                minWidth: '200px',
                maxWidth: '300px',
                display: 'inline-block',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <a href={item.action + item.content} style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {item.content}
              </a>
            </Card>
          </List.Item>
        )}
      />
      <div style={{ paddingBottom: "25px" }}>
        <WhatsAppButton />
      </div>
      {<Card>
        <EmailForm />
      </Card>}
      <Divider style={{ borderColor: "#FFFFFF" }} />
      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/ekonuma"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">Github</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/ekonuma/"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">Linkedin</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/ekonuma/portfolio"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">View source</p>
          </a>
        </li>
      </ul>
      <p className="mt-8 text-neutral-600 dark:text-neutral-300 text-center">
        © {new Date().getFullYear()} MIT Licensed
      </p>
    </footer>
  );
}
