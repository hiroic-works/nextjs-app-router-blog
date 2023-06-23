export type Job = {
  name: string;
  period: string;
  description: string;
};

export type Skill = {
  name: string;
  rate: 1 | 2 | 3 | 4 | 5;
  text: string;
};
