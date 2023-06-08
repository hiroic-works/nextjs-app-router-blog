import { Metadata } from "next";
import Image from "next/image";

type Job = {
  name: string;
  period: string;
  description: string;
};

type Skill = {
  name: string;
  rate: 1 | 2 | 3 | 4 | 5;
};

const siteUrl = process.env.SITE_URL || "";

const jobs: Job[] = [
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

const skills: Skill[] = [
  {
    name: "HTML",
    rate: 5,
  },
  {
    name: "CSS",
    rate: 4,
  },
  {
    name: "JavaScript",
    rate: 3,
  },
  {
    name: "React",
    rate: 2,
  },
  {
    name: "Vue.js",
    rate: 1,
  },
];

export const metadata: Metadata = {
  title: "About",
  openGraph: {
    title: "About",
    url: `${siteUrl}/about`,
  },
  alternates: {
    canonical: `${siteUrl}/about`,
  },
};

export default function About() {
  return (
    <section className="text-gray-700">
      <div className="hidden sm:block h-80 overflow-hidden">
        <Image
          className="w-full object-cover object-center"
          src="/about-header.jpg"
          width={2048}
          height={1051}
          alt=""
        />
      </div>
      <div className="container px-5 py-12 sm:py-16 mx-auto flex flex-col">
        <div className="lg:w-5/6 mb-8 sm:mb-16 mx-auto">
          <div className="flex flex-col sm:flex-row">
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div className="w-28 h-28 rounded-full inline-flex items-center justify-center overflow-hidden">
                <Image
                  src="/about-icon.png"
                  width={120}
                  height={120}
                  alt="HW"
                />
              </div>
              <div className="flex flex-col items-center text-center justify-center">
                <div className="font-medium mt-2 text-lg">Hiroic Works</div>
                <div className="w-12 h-1 bg-black rounded mt-2 mb-4"></div>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos illo cum, nam mollitia illum quidem sit facilis
                  doloremque tempora voluptates ea ab amet sint quasi?
                </p>
              </div>
            </div>
            <div className="sm:w-2/3 sm:pl-8 sm:py-4 sm:border-l mt-4 pt-4 sm:mt-0 sm:text-left">
              <div className="">
                <h1 className="flex flex-col text-center w-full sm:text-4xl text-3xl font-medium mb-6">
                  Jobs
                </h1>
                {jobs.map((job, index, arr) => {
                  return (
                    <div
                      key={index}
                      className={`flex relative ${
                        index + 1 !== arr.length && "pb-8"
                      }`}
                    >
                      <div className="h-full w-4 absolute inset-0 flex items-center justify-center">
                        <div className="h-full w-1 bg-gray-200"></div>
                      </div>
                      <div className="flex-shrink-0 w-4 h-4 rounded-full bg-black inline-flex items-center justify-center relative z-10"></div>
                      <div className="flex-grow pl-4">
                        <h2 className="mb-3 leading-none tracking-wider">
                          {job.name}
                        </h2>
                        <p className="mb-3 text-xs leading-none">
                          {job.period}
                        </p>
                        <p className="leading-relaxed text-sm">
                          {job.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-5/6 mb-8 sm:mb-16 mx-auto">
          <h1 className="flex flex-col text-center w-full sm:text-4xl text-3xl font-medium mb-6">
            Skills
          </h1>
          <div className="flex flex-wrap -m-4 text-center">
            {skills.map((skill) => {
              return (
                <div key={skill.name} className="p-4 md:w-1/3 sm:w-1/2 w-full">
                  <div className="border border-gray-200 px-4 py-4 sm:py-6 rounded">
                    <h2 className="mb-2 text-lg tracking-wider">
                      {skill.name}
                    </h2>
                    <div className="mb-2 flex items-center justify-center">
                      {[1, 2, 3, 4, 5].map((val) => {
                        return (
                          <svg
                            key={val}
                            aria-hidden="true"
                            className={`${
                              val <= skill.rate
                                ? "text-yellow-400"
                                : "text-gray-300"
                            } w-6 h-6`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                        );
                      })}
                    </div>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dignissimos illo cum
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
