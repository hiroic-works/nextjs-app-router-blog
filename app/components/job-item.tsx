import { Job } from "@/app/types/about";

type Props = {
  job: Job;
  index: number;
  jobLength: number;
};

export default function About({ job, index, jobLength }: Props) {
  return (
    <div
      key={index}
      className={`flex relative ${index + 1 !== jobLength && "pb-8"}`}
    >
      <div className="h-full w-4 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-gray-200"></div>
      </div>
      <div className="flex-shrink-0 w-4 h-4 rounded-full bg-black inline-flex items-center justify-center relative z-10"></div>
      <div className="flex-grow pl-4">
        <h2 className="mb-3 leading-none tracking-wider">{job.name}</h2>
        <p className="mb-3 text-xs leading-none">{job.period}</p>
        <p className="leading-relaxed text-sm">{job.description}</p>
      </div>
    </div>
  );
}
