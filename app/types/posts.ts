import type { MicroCMSImage, MicroCMSDate } from "microcms-js-sdk";

export type Posts = {
  id: string;
  title: string;
  category: Category | null;
  toc_visible: boolean;
  body: string;
  description: string;
  ogimage?: MicroCMSImage;
  writer: Author | null;
} & MicroCMSDate;

export type Category = {
  id: string;
  name: string;
} & MicroCMSDate;

export type Author = {
  id: string;
  name: string;
  text: string;
  image: MicroCMSImage;
} & MicroCMSDate;
