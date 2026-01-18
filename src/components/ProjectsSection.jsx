import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
   {
    id: 1,
    title: "Task Manager Application",
    description:
      "A full-stack task management application that allows users to create, update, and track tasks efficiently, with a clean UI and structured backend architecture.",
    image: "/projects/project1.png",
    tags: ["React", "Tailwind CSS", "Node.js", "JavaScript"],
    githubUrl: "https://github.com/gopaldamani07/Task-Manager.git",
  },
   {
    id: 2,
    title: "Portfolio Website",
    description:
      "A responsive and modern personal portfolio website designed to showcase projects, skills, and experience with smooth UI interactions.",
    image: "/projects/project2.png",
    tags: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
    githubUrl: "https://github.com/gopaldamani07/portfolio-website.git",
  },
  {
  id: 3,
  title: "WebRTC Video Communication App",
  description:
    "A real-time browser-based video and audio communication application using WebRTC with peer-to-peer connectivity and low latency.",
  image: "/projects/project3.png",
  tags: ["WebRTC", "JavaScript", "TypeScript", "HTML", "CSS", "Node.js"],
  githubUrl: "https://github.com/gopaldamani07/WebRTC-Project.git",
},
 {
  id: 4,
  title: "Employee Management System",
  description:
    "A full-stack employee management system that enables efficient handling of employee records with CRUD operations, a structured backend, and a clean, responsive user interface.",
  image: "/projects/project4.png",
  tags: ["React", "Node.js", "Express", "MongoDB", "JavaScript", "Tailwind CSS"],
  githubUrl: "https://github.com/gopaldamani07/Employee-Management.git",
}

];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-7xl px-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        {/* FIXED SPACING + LEFT/RIGHT ALIGNMENT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-32 gap-y-16 justify-between">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/gopaldamani07"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
