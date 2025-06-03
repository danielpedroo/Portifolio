'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { BadgeCheck } from 'lucide-react'
import { hardSkills, softSkills } from '@/components/Skills/data-skills'

export default function AboutMe() {
  return (
    <section id="about" className="py-20 px-6 sm:px-10 md:px-16 lg:px-24 bg-black text-white font-inter">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Título */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold tracking-tight">Sobre Mim</h2>

          {/* Carrossel de hard skills com layout controlado */}
          <div className="w-full overflow-hidden pt-6">
            <motion.div
              className="inline-flex gap-6 min-w-full"
              animate={{ x: ['100%', '-100%'] }}
              transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
            >
              {hardSkills.map((skill, i) => (
                <span
                  key={i}
                  className="flex items-center gap-2 text-sm sm:text-base font-medium whitespace-nowrap"
                  style={{ color: skill.color }}
                >
                  <span className="text-xl">{skill.icon}</span>
                  {skill.name}
                </span>
              ))}
            </motion.div>
          </div>

        </div>

        {/* Conteúdo */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
          {/* Imagem */}
          <div className="w-full lg:w-1/3">
            <div className="rounded-3xl overflow-hidden shadow-md">
              <Image
                src="/your-image.jpg"
                width={500}
                height={600}
                alt="Daniel Pedro"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Texto e ação */}
          <div className="w-full lg:w-2/3 space-y-6 text-center lg:text-left">
            <p className="text-gray-300 text-base leading-relaxed font-sans">
              👋 Olá! Me chamo <strong className="text-white">Daniel Pedro</strong>, sou desenvolvedor júnior e estudante de <strong>Análise e Desenvolvimento de Sistemas</strong> na <strong>Universidade de Mogi das Cruzes (UMC)</strong>, com foco em desenvolvimento de aplicações web modernas e eficientes.
            </p>

            <p className="text-gray-300 text-base leading-relaxed font-sans">
              💻 Minha principal habilidade está no <strong>front-end</strong>, onde construo interfaces que não apenas funcionam — mas que entregam fluidez, acessibilidade e valor real para quem usa. Cada componente, cada linha de código, carrega propósito técnico e preocupação com a experiência final.
            </p>

            <p className="text-gray-300 text-base leading-relaxed font-sans">
              🚀 Tenho perfil autodidata e sou movido por evolução contínua. Estou sempre estudando e experimentando tecnologias que tornam meus projetos mais sólidos e escaláveis. Entre elas, destaco <strong>React, Next.js, Tailwind CSS e TypeScript</strong>, ferramentas que uso com frequência no meu dia a dia.
            </p>

            <p className="text-gray-300 text-base leading-relaxed font-sans">
              🌱 Além da parte técnica, valorizo muito o lado humano da profissão. Gosto de trocar ideias, colaborar em equipe, praticar escuta ativa e manter a organização — habilidades que acredito serem tão importantes quanto dominar uma stack.
            </p>

            <p className="text-gray-300 text-base leading-relaxed font-sans">
              🤝 Se você está construindo algo que precisa de um desenvolvedor júnior comprometido com qualidade, aprendizado e entrega, estou pronto para somar. Me conta: <strong className="text-white">como posso ajudar você a evoluir seu projeto?</strong>
            </p>


            {/* Lista vertical de soft skills sem scroll */}
            <div className="w-full pt-6">
              <div className="grid grid-cols-2 gap-3">
                {softSkills.map((skill, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-2 text-sm sm:text-base font-medium"
                    style={{ color: skill.color }}
                  >
                    <span className="text-lg">{skill.icon}</span>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>


            {/* Botão de contato */}
            <div className="pt-6">
              <a
                href="https://www.linkedin.com/in/daniel-pedro-12b306209/" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-2xl text-sm font-semibold transition hover:bg-gray-200"
              >
                <BadgeCheck className="w-4 h-4" />
                Vamos conversar
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
