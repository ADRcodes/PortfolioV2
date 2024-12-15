import Project from '../project/Project';
import './projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Spiritual Retreat Centre",
      description: "Paid WordPress project for a client running a retreat center.",
      link: "https://clients-live-site.com",
      badges: ["Paid Project", "WordPress"],
      techStack: ["WordPress", "PHP"],
      image: "src/assets/images/TOLscreenshot.png"
    },
    {
      title: "ERCO Homes Clone",
      description: "A multi-page site with carousel, built without frameworks or external libraries, all in one file.",
      link: "https://adrcodes.github.io/erco-homes-copy/",
      githubLink: "https://github.com/ADRcodes/erco-homes-copy",
      badges: ["Personal", "No Frameworks"],
      techStack: ["HTML", "CSS", "JavaScript"],
      image: "src/assets/images/ErcoWebsitePic.png"
    },
    {
      title: "Movie Night",
      description: "A passion project for organizing watchlists and discovering new films. Currently WIP.",
      badges: ["In Progress", "React"],
      techStack: ["React", "Vite", "Tailwind"],
      image: "src/assets/images/movie-site-screenshot.png"
    },
    {
      title: "Portfolio Site",
      description: "This site! A personal project to showcase my work and skills.",
      link: "",
      githubLink: "",
      badges: ["Personal", "React"],
      techStack: ["React", "Tailwind"],
      image: "src/assets/images/portfolio-screenshot.png"
    }
  ];

  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Projects</h2>

        {/* 
          The .projects-grid class uses CSS nth-child selectors (in Projects.css) 
          to apply staggered fade-up animations to each Project card.
        */}
        <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              description={project.description}
              link={project.link}
              githubLink={project.githubLink}
              badges={project.badges}
              techStack={project.techStack}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
