import type { SkillProps } from "@/@types/skill-props"
import { FaHandsHelping, FaUserTie, FaStopwatch, FaComments, FaBalanceScale } from "react-icons/fa"
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiReact,
  SiSpringboot,
  SiDocker,
  SiJavascript,
  SiGit,
  SiFigma,
  SiPostman,
} from "react-icons/si"

export const hardSkills: SkillProps[] = [
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
    color: "#FFFFFF",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    color: "#3178c6",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    color: "#38bdf8",
  },
  {
    name: "React",
    icon: <SiReact />,
    color: "#61dafb",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
    color: "#f7df1e",
  },
  {
    name: "API\u00A0REST", 
    icon: <SiPostman />, 
    color: "#FF6C37",
  },
  {
    name: "Git",
    icon: <SiGit />,
    color: "#f1502f",
  },
  {
    name: "Figma",
    icon: <SiFigma />,
    color: "#A259FF",
  },
  {
    name: "Spring\u00A0Boot",
    icon: <SiSpringboot />,
    color: "#6DB33F",
  },
  {
    name: "Docker",
    icon: <SiDocker />,
    color: "#2496ED",
  },
]


/**
 * Lista de soft skills com ícones e cores específicas para uso em carrossel ou grid.
 */
export const softSkills: SkillProps[] = [
  {
    name: "Trabalho em equipe",
    icon: <FaHandsHelping />,
    color: "#22c55e", // verde
  },
  {
    name: "Liderança",
    icon: <FaUserTie />,
    color: "#3b82f6", // azul
  },
  {
    name: "Gestão do tempo",
    icon: <FaStopwatch />,
    color: "#eab308", // amarelo ouro
  },
  {
    name: "Comunicação assertiva",
    icon: <FaComments />,
    color: "#6366f1", // violeta
  },
  {
    name: "Ética profissional",
    icon: <FaBalanceScale />,
    color: "#f43f5e", // vermelho rosado
  },
]
