export default function ResumePage({ student }) {
  return (
    <div className="content-area">
      <div className="download-bar">
        <button className="dl-bar-btn dl-pdf">⬇ Download PDF Resume</button>
        <button className="dl-bar-btn dl-share">🔗 Copy Share Link</button>
      </div>
      <div className="resume-paper">
        <div className="resume-top">
          <div className="resume-name">{student.name}</div>
          <div className="resume-title">{student.program}</div>
          <div className="resume-contacts">
            <span className="resume-contact">✉ {student.email}</span>
            <span className="resume-contact">📍 {student.location}</span>
            <span className="resume-contact">🏫 {student.college}</span>
          </div>
        </div>

        <div className="resume-section">
          <div className="resume-sec-title">Education</div>
          <div className="resume-exp">
            <span className="resume-exp-title">{student.program}</span>
            <span className="resume-exp-date">{student.batch}</span>
          </div>
          <div className="resume-exp-sub">
            {student.college} · GPA: {student.gpa}
          </div>
        </div>

        <div className="resume-section">
          <div className="resume-sec-title">Projects</div>
          {student.projects.map((project) => (
            <div key={project.title} style={{ marginBottom: "14px" }}>
              <div className="resume-exp">
                <span className="resume-exp-title">{project.title}</span>
                <span className="resume-exp-date">{project.type}</span>
              </div>
              <div className="resume-exp-sub">{project.desc}</div>
            </div>
          ))}
        </div>

        <div className="resume-section">
          <div className="resume-sec-title">Skills</div>
          <div className="skills-wrap">
            {student.skills.map((skill) => (
              <span key={skill} className="skill-chip">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="resume-section">
          <div className="resume-sec-title">Achievements</div>
          {student.achievements.map((achievement) => (
            <div key={achievement.title} style={{ fontSize: "13px", marginBottom: "6px" }}>
              • {achievement.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
