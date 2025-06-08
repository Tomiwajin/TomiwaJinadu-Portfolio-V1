import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Multithreaded File Transfer System",
    description:
      "A TCP-based Rust application with multithreaded server support to transfer sales data between branches securely.",
    image: "/projects/project1.png",
    tags: ["Rust", "TCP", "Multithreading", "Socket Programming"],
    demoUrl: "https://github.com/ja00069-Git/sysprog_proj2_abwe_917594092.git",
    githubUrl:
      "https://github.com/ja00069-Git/sysprog_proj2_abwe_917594092.git",
  },
  {
    id: 2,
    title: "House Price Prediction ML App",
    description:
      "Built a machine learning model to predict housing prices using Scikit-learn, regression models, and data visualization.",
    image: "/projects/project2.png",
    tags: [
      "Python",
      "Scikit-learn",
      "Machine Learning",
      "Matplotlib",
      "Render",
    ],
    demoUrl: "https://house-price-prediction-gzd4.onrender.com",
    githubUrl: "https://github.com/Tomiwajin/House-price-prediction",
  },
  {
    id: 3,
    title: "Task Manager Desktop App",
    description:
      "A JavaFX-based desktop application that allows users to create, manage, and track tasks efficiently. Built using Maven and packaged for deployment.",
    image: "/projects/project3.png",
    tags: ["Java", "JavaFX", "Maven", "Node.js", "Render"],
    demoUrl: "https://task-manager-nr9n.onrender.com",
    githubUrl: "https://github.com/Tomiwajin/Task-Manager.git",
  },
  {
    id: 4,
    title: "Carpool Web App",
    description:
      "A responsive ride-sharing platform built with HTML, CSS, and JavaScript to connect users going to similar destinations.",
    image: "/projects/project4.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://tomiwajin.github.io/OluwatomiwaJinadu_Project/",
    githubUrl: "https://github.com/Tomiwajin/OluwatomiwaJinadu_Project.git",
  },

  {
    id: 5,
    title: "TomiwaJinadu Portfolio-V1",
    description:
      "A responsive ride-sharing platform built with HTML, CSS, and JavaScript to connect users going to similar destinations.",
    image: "/projects/project5.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "",
    githubUrl: "https://github.com/Tomiwajin/TomiwaJinadu-Portfolio-V1.git",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A few of the software and data-driven projects I’ve worked on. These
          showcase both my systems-level thinking and practical development
          skills.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
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
            href="https://github.com/Tomiwajin"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
