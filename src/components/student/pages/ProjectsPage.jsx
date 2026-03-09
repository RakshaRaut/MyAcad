export default function ProjectsPage({ student }) {
  return (
    <div className="content-area">
      {student.projects.map((project) => (
        <div key={project.title} className="project-card">
          <span
            className={`project-type ${
              project.type === "Final Year"
                ? "type-final"
                : project.type === "Hackathon"
                  ? "type-hack"
                  : "type-research"
            }`}
          >
            {project.type}
          </span>
          <div className="project-title">{project.title}</div>
          <div className="project-desc">{project.desc}</div>
          <div className="tech-chips">
            {project.tech.map((tech) => (
              <span key={tech} className="tech-chip">
                {tech}
              </span>
            ))}
          </div>
          <div className="project-actions">
            <button className="gh-btn">🔗 View on GitHub</button>
          </div>
        </div>
      ))}
    </div>
  );
}
