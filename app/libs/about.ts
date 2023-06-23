import { Job, Skill } from "@/app/types/about";

export const getAllJob = (): Job[] => {
  return [
    {
      name: "StartUp Inc.",
      period: "2014 1/1 - 2017 12/31",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos illo cum, nam mollitia illum quidem sit facilis doloremque tempora voluptates ea ab amet sint quasi?",
    },
    {
      name: "Amazon.com, Inc.",
      period: "2018 1/1 - 2020 12/31",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos illo cum, nam mollitia illum quidem sit facilis doloremque tempora voluptates ea ab amet sint quasi?",
    },
    {
      name: "Google Inc.",
      period: "2021 1/1 - Now",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos illo cum, nam mollitia illum quidem sit facilis doloremque tempora voluptates ea ab amet sint quasi?",
    },
  ];
};

export const getAllSkill = (): Skill[] => {
  return [
    {
      name: "HTML",
      rate: 5,
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos illo cum HTML`,
    },
    {
      name: "CSS",
      rate: 4,
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos illo cum CSS`,
    },
    {
      name: "JavaScript",
      rate: 3,
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos illo cum JavaScript`,
    },
    {
      name: "React",
      rate: 2,
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos illo cum React`,
    },
    {
      name: "Vue.js",
      rate: 1,
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos illo cum Vue.js`,
    },
  ];
};
