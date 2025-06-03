'use client'

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Modal from "../../components/Modal";

const categories = ["All", "Web", "API"];

const portfolioProjects = [
  {
    name: "Sistema de Reservas de Quadras",
    category: "Web",
    image: "/images/quadras.png",
  },
  {
    name: "Supermercado Interativo com Descontos",
    category: "Web",
    image: "/images/supermercado.png",
  },
  {
    name: "API de Trânsito Inteligente",
    category: "API",
    image: "/images/transito.png",
  },
];

export default function PortfolioSection() {
  const [category, setCategory] = useState("All");
  const filteredProjects =
    category === "All"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === category);

  const [selectedProject, setSelectedProject] = useState<any>(null);
  const openModal = (project: any) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <section id="portifolio" className="bg-zinc-900 py-20 px-6 sm:px-10 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-white text-3xl sm:text-4xl font-bold mb-12">Portifolio</h2>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10">
          {categories.map((cat) => (
            <button
              type="button"
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors text-sm sm:text-base ${
                category === cat
                  ? "bg-orange-500 text-white"
                  : "bg-zinc-700 text-gray-300 hover:bg-orange-500 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Lista de Projetos com rolagem horizontal */}
        <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-zinc-700">
          <div className="flex gap-6 w-max px-1 sm:px-0">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.name}
                  onClick={() => openModal(project)}
                  className="cursor-pointer min-w-[260px] sm:min-w-[300px] max-w-[300px] bg-zinc-800 rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300"
                >
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-48 sm:h-52 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-white text-lg font-semibold">{project.name}</h3>
                    <p className="text-gray-400 text-sm">{project.category}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Modal de Projeto */}
      <Modal isOpen={!!selectedProject} onClose={closeModal}>
        {selectedProject && (
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-2">{selectedProject.name}</h2>
            <p className="text-sm text-gray-400 mb-4">Categoria: {selectedProject.category}</p>
            <img
              src={selectedProject.image}
              alt={selectedProject.name}
              className="w-full h-56 sm:h-64 object-cover rounded-lg mb-4"
            />
            <p className="text-gray-300 text-sm leading-relaxed">
              Aqui você pode adicionar uma descrição detalhada do projeto, tecnologias utilizadas,
              desafios resolvidos, links para GitHub ou deploy...
            </p>
          </div>
        )}
      </Modal>
    </section>
  );
}

