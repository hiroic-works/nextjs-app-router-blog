import { Metadata } from "next";
import Image from "next/image";
import BaseContainer from "@/app/components/base-container";
import SkillItem from "@/app/components/skill-item";
import JobItem from "@/app/components/job-item";
import { getAllJob, getAllSkill } from "@/app/libs/about";

const jobs = getAllJob();
const skills = getAllSkill();

export const metadata: Metadata = {
  title: "About",
  description: "当ブログの運営者についてのページです",
  openGraph: {
    title: "About",
    description: "当ブログの運営者についてのページです",
    url: "/about",
  },
  alternates: {
    canonical: "/about",
  },
};

export default function About() {
  return (
    <BaseContainer>
      <div className="lg:w-5/6 mb-8 sm:mb-16 mx-auto">
        <div className="flex flex-col sm:flex-row">
          <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
            <div className="w-28 h-28 rounded-full inline-flex items-center justify-center overflow-hidden">
              <Image src="/about-icon.png" width={120} height={120} alt="HW" />
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
            <h1 className="flex flex-col text-center w-full sm:text-4xl text-3xl font-medium mb-6">
              Jobs
            </h1>
            {jobs.map((job, index, arr) => {
              return (
                <JobItem
                  key={index}
                  job={job}
                  index={index}
                  jobLength={arr.length}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="lg:w-5/6 mb-8 sm:mb-16 mx-auto">
        <h1 className="flex flex-col text-center w-full sm:text-4xl text-3xl font-medium mb-6">
          Skills
        </h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 text-center">
          {skills.map((skill) => {
            return <SkillItem key={skill.name} skill={skill} />;
          })}
        </div>
      </div>
    </BaseContainer>
  );
}
