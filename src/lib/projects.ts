import Consulife from "@/assets/Consulife.png"
import TodoListMockup from "@/assets/ToDoListMockUp.png"
import MemoryCard from "@/assets/MemoryCard.png"
import RockPaperScissor from "@/assets/RockPaperScissor.png"
import Calculator from "@/assets/Calculator.png"
import EtchASketch from "@/assets/EtchASketch.png"
import TicTacToe from "@/assets/TicTacToe.png"
import FormCv from "@/assets/FormCv.png"

export type ProjectCategory = "featured" | "practice"

export interface Project {
  id: string
  title: string
  subtitle: string
  description: string
  image: string
  tech: string[]
  liveUrl?: string
  sourceUrl?: string
  category: ProjectCategory
  problem?: string
  solution?: string
  decision?: string
}

export const projects: Project[] = [
  {
    id: "consulife",
    title: "Consulife",
    subtitle: "Psychology Consultation Platform",
    description:
      "A web-based application for online psychology consultations, where users can schedule chats or video calls with psychologists.",
    image: Consulife,
    tech: ["React", "TypeScript", "Next.js", "CSS3"],
    liveUrl: "https://consulife.humicprototyping.com/",
    category: "featured",
    problem:
      "CoE Humic needed a redesigned consultation platform that felt trustworthy and worked reliably across devices for both patients and psychologists.",
    solution:
      "Rebuilt the UI from Figma designs into a responsive, production React/Next.js frontend, integrating REST APIs for scheduling and an AI-assisted psychological condition detector.",
    decision:
      "Prioritized pixel-accurate, cross-browser layouts over adding extra client-side features, since trust and consistency mattered more than novelty for a mental-health product.",
  },
  {
    id: "todo-list",
    title: "TodoList App",
    subtitle: "Full-stack Task Manager",
    description:
      "A modern, responsive todo application with task categories, priorities, and persistent storage.",
    image: TodoListMockup,
    tech: ["React", "TypeScript", "Next.js", "Node.js", "Supabase", "PostgreSQL", "Railway"],
    liveUrl: "https://to-do-list-rho-ashen.vercel.app",
    category: "featured",
    problem:
      "Wanted a self-directed project to practice a full request/response cycle end to end, not just frontend UI.",
    solution:
      "Built a React/Next.js frontend backed by a Node.js API and PostgreSQL (via Supabase), with the API deployed separately on Railway.",
    decision:
      "Chose Supabase's managed Postgres over a hand-rolled database setup, to spend the practice time on the API and data model instead of infrastructure.",
  },
  {
    id: "memory-card",
    title: "Memory Card",
    subtitle: "Game",
    description:
      "A memory-matching game built with Vite, using the Dragon Ball API to display character cards.",
    image: MemoryCard,
    tech: ["JavaScript", "Vite"],
    liveUrl: "https://memory-card-ten-ruddy.vercel.app/",
    sourceUrl: "https://github.com/SeniorGit/MemoryCard",
    category: "practice",
  },
  {
    id: "rock-paper-scissors",
    title: "Rock Paper Scissors",
    subtitle: "Game",
    description: "Rock Paper Scissors built with vanilla HTML, CSS, and JavaScript, no libraries.",
    image: RockPaperScissor,
    tech: ["JavaScript", "HTML", "CSS"],
    liveUrl: "https://rock-paper-scissor-chi-bice.vercel.app/",
    sourceUrl: "https://github.com/SeniorGit/RockPaperScissor",
    category: "practice",
  },
  {
    id: "calculator",
    title: "Calculator",
    subtitle: "Utility",
    description: "A simple calculator utility built with HTML, CSS, and JavaScript.",
    image: Calculator,
    tech: ["JavaScript", "HTML", "CSS"],
    liveUrl: "https://calculator-ashy-three-6tg06818y1.vercel.app/",
    sourceUrl: "https://github.com/SeniorGit/calculator",
    category: "practice",
  },
  {
    id: "etch-a-sketch",
    title: "Etch-a-Sketch",
    subtitle: "Game",
    description: "A drawing game inspired by the classic Etch A Sketch toy.",
    image: EtchASketch,
    tech: ["JavaScript", "HTML", "CSS"],
    liveUrl: "https://etch-a-sketch-pied.vercel.app/",
    sourceUrl: "https://github.com/SeniorGit/Etch-a-Sketch",
    category: "practice",
  },
  {
    id: "tic-tac-toe",
    title: "Tic-Tac-Toe",
    subtitle: "Game",
    description: "A classic strategy game built with HTML, CSS, and JavaScript.",
    image: TicTacToe,
    tech: ["JavaScript", "HTML", "CSS"],
    liveUrl: "https://tictactoe-gilt-three.vercel.app/",
    sourceUrl: "https://github.com/SeniorGit/tictactoe",
    category: "practice",
  },
  {
    id: "cv-generator",
    title: "CV Generator",
    subtitle: "Utility",
    description:
      "A React + Vite app for building a clean, structured CV from personal details, skills, and experience.",
    image: FormCv,
    tech: ["React", "Vite"],
    liveUrl: "https://form-cv-five.vercel.app/",
    sourceUrl: "https://github.com/SeniorGit/FormCV",
    category: "practice",
  },
]

export const featuredProjects = projects.filter((p) => p.category === "featured")
export const practiceProjects = projects.filter((p) => p.category === "practice")
