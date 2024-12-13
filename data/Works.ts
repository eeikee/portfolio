export type Work = {
  id: number;
  children: string;
  color: string;
};

export const works: Work[] = [
  {
    id: 1,
    children: "2020/10: Internship at GFT Group (IT Consulting services)",
    color: "blue",
  },
  {
    id: 2,
    children: "Starter training - Java ecossistem training, MVC, Rest, TDD, BDD,  Angular",
    color: "blue",
  },
  {
    id: 3,
    children: "2021/1: Banco Original (GFT Group's Client) - legacy Java systems, on-premises databases, Java Schedulers, maintenance and enhancement of legacy code",
    color: "green",
  },
  {
    id: 4,
    children: "2021/4: Hired as fulltime Backend Engineer",
    color: "blue",
  },
  {
    id: 5,
    children: "2021/6: Rabobank (GFT Group's Client)",
    color: "orange",
  },
  {
    id: 6,
    children: "2024/7: Start freelancing",
    color: "red",
  },
];
