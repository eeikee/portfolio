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
    }, {
      name: "Microservices",
      description: "Criação de microserviços utilizando Spring Framework e Java, orientação a eventos e mensageria.",
      tecnologies: [skills.Java, skills.Spring],
      links: [],
      cover: "",
    }, {
      name: "Upgrade from Java 8 Spring 2 to Java 17 Spring 3",
      description: "Atualização da implementação do Spring 2 para Spring 3 juntamente com a atualização do Java 8 para Java 17.",
      tecnologies: [skills.Java, skills.Spring],
      links: [],
      cover: "",
    }, {
      name: "Upgrade Azure SDK for Java",
      description: "Upgrade das libs do Azure SDK para Java como Eventhub, Cosmos DB, StorageAccount entre outros.",
      tecnologies: [skills.Java, skills.Azure],
      links: [],
      cover: "",
    }, {
      name: "Azure DevOps pipelines",
      description: "Criação de pipelines de CI/CD para os projetos no Azure DevOps.",
      tecnologies: [skills.Azure,skills.AzureDevOps],
      links: [],
      cover: "",
    }, {
      name: "Shell script automation",
      description: "Criação de scripts shell para automatização de tarefas e pipelines.",
      tecnologies: [skills.Shell],
      links: [],
      cover: "",
    }, {	
      name: "Functions",
      description: "Criação de funções serverless utilizando Java e Spring",
      tecnologies: [skills.Java, skills.Spring, skills.Azure],
      links: ["https://github.com/JEAM-Team"],
      cover: "",
    }
  ];