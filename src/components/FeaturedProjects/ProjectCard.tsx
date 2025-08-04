import { projects } from "@/lib/projects";
import { ExternalLink, Eye, GitFork, Github, Star } from "lucide-react";
import Image from "next/image";

const ProjectCard = () => {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <div className="text-foreground mb-20 px-4 pt-8 sm:px-6 lg:px-8">
      <div
        className="grid auto-rows-auto grid-cols-[repeat(auto-fit,380px)] justify-center gap-8"
        style={{ overflowX: "auto" }}
      >
        {featuredProjects.map((project, index) => (
          <div
            key={project.id}
            className="group border-border bg-background1 hover:from-background1 hover:to-background2 w-full transform overflow-hidden rounded-2xl border shadow-xl backdrop-blur-sm transition-all duration-500 hover:bg-gradient-to-br hover:shadow-2xl sm:w-[380px]"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Capa */}
            <div className="relative overflow-hidden">
              <Image
                src={project.imageSrc || "/placeholder.svg"}
                alt={project.title}
                width={640}
                height={360}
                className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-52 md:h-56 lg:h-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
              <div className="absolute top-4 right-4">
                <span className="from-chart-1 to-chart-2 rounded-full bg-gradient-to-l px-3 py-1 text-xs font-bold text-white">
                  DESTAQUE
                </span>
              </div>
            </div>

            {/* Conteúdo */}
            <div className="relative z-10 p-6">
              <h3 className="hover:from-chart-1 hover:to-chart-2 mb-3 text-xl font-bold transition-all duration-300 hover:bg-gradient-to-r hover:bg-clip-text hover:text-transparent sm:text-2xl">
                {project.title}
              </h3>

              <p className="mb-4 text-sm leading-relaxed sm:text-base">
                {project.description}
              </p>

              {/* Estatísticas */}
              <div className="mb-4 flex flex-wrap items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4" />
                  <span>{project.stats.stars}</span>
                </div>
                <div className="flex items-center gap-1">
                  <GitFork className="h-4 w-4" />
                  <span>{project.stats.forks}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Eye className="h-4 w-4" />
                  <span>{project.stats.views}</span>
                </div>
              </div>

              {/* Tecnologias */}
              <div className="mb-6 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="border-border bg-chart-4 rounded-full border px-3 py-1 text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-gray-700 to-gray-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-gray-600 hover:to-gray-500 hover:shadow-xl"
                >
                  <Github size={16} />
                  GitHub
                </a>
                {project.links.external && (
                  <a
                    href={project.links.external}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="from-chart-4 to-chart-1 hover:shadow-chart-1/50 inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:scale-105 hover:from-yellow-300 hover:to-orange-600 hover:shadow-xl dark:hover:from-purple-600 dark:hover:to-blue-600"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
