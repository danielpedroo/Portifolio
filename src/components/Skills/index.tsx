import type { SkillProps } from "@/@types/skill-props";

export const StackSkill = ({ name, percent, icon, color }: SkillProps) => {
  const radius = 44;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - percent / 100);

  return (
    <div className="flex flex-col items-center group cursor-pointer">
      <div className="relative w-24 h-24">
        <svg className="w-full h-full rotate-[-90deg]">
          <circle
            cx="48"
            cy="48"
            r={radius}
            stroke="#333"
            strokeWidth="8"
            fill="none"
          />
          <circle
            cx="48"
            cy="48"
            r={radius}
            stroke={color}
            strokeWidth="8"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            fill="none"
            className="transition-all duration-700 ease-out"
          />
        </svg>
        <div
          className="absolute inset-0 flex items-center justify-center text-4xl text-white group-hover:scale-110 transition-transform"
          style={{ color }}
        >
          {icon}
        </div>
      </div>
      <p className="text-orange-500 font-semibold mt-2">{percent}%</p>
      <p className="text-white text-sm">{name}</p>
    </div>
  );
};