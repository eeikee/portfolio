import { Skill, skills } from "src/components/skill-list";

export type Project = {
    name: string,
    tecnologies: Skill[],
    description: string,
    links: string[],
    cover: string
  }

export const projects: Project[] = [
    {
      name: "ORP",
      tecnologies: [skills.Java, skills.Android],
      description: "ORP ou Organizador Rápido de Pedidos é um aplicativo Android que permite a rápida comunicação entre o pedido em um restaurante e seu processamento na cozinha.",
      links: ["https://github.com/ekonuma/ORP-Organizador-Rapido-de-Pedidos"],
      cover: "",
    }, {
      name: "OGZ",
      description: "OGZ é um programa desktop especialmente criado para facilitar a organização do estoque de materiais utilizados pelo grupo Omega de robótica da Facens (Faculdade de Engenharia de Sorocaba).",
      tecnologies: [skills.Java],
      links: ["https://github.com/Omeganizer"],
      cover: "https://avatars.githubusercontent.com/u/80468144?s=200&v=4",
    }, {
      name: "Smartcash",
      description: "Smartcash é um aplicativo de controle financeiro e e controle de vendas para Android.",
      tecnologies: [skills.Java, skills.Android],
      links: ["https://github.com/JEAM-Team"],
      cover: "",
    }
  ];