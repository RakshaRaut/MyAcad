export default function ProfilePage({ student }) {
  return (
    <div className="content-area">
      <div className="profile-hero">
        <div className="profile-avatar-lg">R</div>
        <div className="profile-info">
          <div className="profile-name">{student.name}</div>
          <div className="profile-program">{student.program}</div>
          <div className="profile-tags">
            <span className="tag tag-gold">{student.batch}</span>
            <span className="tag tag-blue">{student.college}</span>
            <span className="tag tag-blue">{student.semester} Semester</span>
          </div>
        </div>
        <div className="profile-gpa">
          <div className="gpa-num">{student.gpa}</div>
          <div className="gpa-label">Current GPA</div>
        </div>
      </div>

      <div className="info-grid">
        <div className="info-card">
          <div className="info-card-title">Personal Information</div>
          {[
            ["Student ID", student.id],
            ["Program", student.program],
            ["Batch", student.batch],
            ["Semester", student.semester],
            ["College", student.college],
          ].map(([label, value]) => (
            <div key={label} className="info-row">
              <span className="info-key">{label}</span>
              <span className="info-val">{value}</span>
            </div>
          ))}
        </div>

        <div className="info-card">
          <div className="info-card-title">Contact Details</div>
          {[
            ["Email", student.email],
            ["Phone", student.phone],
            ["Location", student.location],
          ].map(([label, value]) => (
            <div key={label} className="info-row">
              <span className="info-key">{label}</span>
              <span className="info-val" style={{ fontSize: "12px" }}>
                {value}
              </span>
            </div>
          ))}

          <div style={{ marginTop: "20px" }}>
            <div className="info-card-title">Technical Skills</div>
            <div className="skills-wrap" style={{ marginTop: "12px" }}>
              {student.skills.map((skill) => (
                <span key={skill} className="skill-chip">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="info-card">
        <div className="info-card-title">About</div>
        <p style={{ fontSize: "14px", lineHeight: "1.7", color: "var(--muted)", marginTop: "12px" }}>
          {student.about}
        </p>
      </div>
    </div>
  );
}
