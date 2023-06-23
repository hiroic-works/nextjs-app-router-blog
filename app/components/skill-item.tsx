import { Skill } from "@/app/types/about";

type Props = {
  skill: Skill;
};
export default function SkillItem({ skill }: Props) {
  return (
    <div key={skill.name} className="p-4 md:w-1/3 sm:w-1/2 w-full">
      <div className="border border-gray-200 px-4 py-4 sm:py-6 rounded">
        <h2 className="mb-2 text-lg tracking-wider">{skill.name}</h2>
        <div className="mb-2 flex items-center justify-center">
          {[1, 2, 3, 4, 5].map((val) => {
            return (
              <svg
                key={val}
                aria-hidden="true"
                className={`${
                  val <= skill.rate ? "text-yellow-400" : "text-gray-300"
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          illo cum
        </p>
      </div>
    </div>
  );
}
