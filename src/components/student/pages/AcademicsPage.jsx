export default function AcademicsPage({ student }) {
  return (
    <div className="content-area">
      <div className="sem-table">
        <div className="table-head">
          <span>Semester</span>
          <span>Year</span>
          <span>GPA</span>
          <span>Subjects</span>
          <span>Status</span>
        </div>

        {student.academics.map((academic) => (
          <div key={academic.sem} className="table-row">
            <span style={{ fontWeight: "700" }}>{academic.sem}</span>
            <span className="mono" style={{ color: "var(--muted)" }}>
              {academic.year}
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span className="mono" style={{ fontWeight: "700" }}>
                {academic.gpa}
              </span>
              <div className="gpa-bar-wrap">
                <div className="gpa-bar" style={{ width: `${(parseFloat(academic.gpa) / 4) * 100}%` }}></div>
              </div>
            </span>
            <span>{academic.subjects} subjects</span>
            <span>
              <span className={academic.status === "Running" ? "status-running" : "status-passed"}>
                {academic.status}
              </span>
            </span>
          </div>
        ))}
      </div>

      <div
        style={{
          background: "var(--surface)",
          border: "1px solid var(--border)",
          borderRadius: "14px",
          padding: "24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <div
            style={{
              fontSize: "11px",
              color: "var(--muted)",
              textTransform: "uppercase",
              letterSpacing: "1px",
              fontWeight: "700",
              marginBottom: "8px",
            }}
          >
            Cumulative GPA
          </div>
          <div
            style={{
              fontSize: "40px",
              fontWeight: "800",
              fontFamily: "'DM Mono',monospace",
              color: "var(--ink)",
            }}
          >
            {student.gpa}
          </div>
        </div>
        <button className="dl-btn">📄 Download Transcript</button>
      </div>
    </div>
  );
}
