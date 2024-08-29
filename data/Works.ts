export type Work = {
    id: number,
    label: string,
    children: string
    color: string
  }

export const works: Work[] = [
    {
      id: 1,
      label: "2020/10 - GFT Intern training camp",
      children: "Intern at GFT, Java ecossistem training, TDD, QA, Angular",
      color: "white"
    },{
      id: 2,
      label: "2021/1 - GFT - Banco Original",
      children: "First project ",
      color: "green"
    },{
      id: 3,
      label: "2021/06 - GFT - Rabobank",
      children: "https://avatars.githubusercontent.com/u/80468144?s=200&v=4",
      color: "orange"
    },{
      id: 4,
      label: "2023/07 - GFT - Rabobank",
      children: "Exit",
      color: "blue"
    }
  ];