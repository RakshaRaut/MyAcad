import {
  adminNavItems,
  dashboardActivity,
  dashboardStats,
} from "../../data/portalData";

export default function AdminPortal({
  adminPage,
  setAdminPage,
  onBack,
  backLabel = "Home",
  onHome,
  searchQuery,
  setSearchQuery,
  adminStudents,
  onViewStudentProfile,
}) {
  const filteredStudents = adminStudents.filter(
    (student) =>
      searchQuery === "" ||
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.program.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="admin-shell">
      <div className="admin-sidebar">
        <div className="admin-sidebar-header">
          <div className="admin-logo">AcademicID</div>
          <div className="admin-badge">ADMIN PORTAL</div>
        </div>

        <div className="admin-nav">
          {adminNavItems.map((item) => (
            <div
              key={item.id}
              className={`admin-nav-item ${adminPage === item.id ? "active" : ""}`}
              onClick={() => setAdminPage(item.id)}
            >
              <span>{item.icon}</span>
              {item.label}
            </div>
          ))}

          <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", marginTop: "16px", paddingTop: "16px" }}>
            <div
              className="admin-nav-item"
              onClick={onBack}
              style={{ color: "rgba(255,255,255,0.3)", fontSize: "12px" }}
            >
              ← Back to {backLabel}
            </div>
            <div
              className="admin-nav-item"
              onClick={onHome}
              style={{ color: "rgba(255,255,255,0.3)", fontSize: "12px" }}
            >
              ⌂ Home
            </div>
          </div>
        </div>
      </div>

      <div className="admin-main">
        <div className="admin-topbar">
          <div className="admin-page-title">
            {adminPage === "dashboard"
              ? "Dashboard"
              : adminPage === "students"
                ? "Student Management"
                : adminPage === "search"
                  ? "Global Talent Search"
                  : adminPage.charAt(0).toUpperCase() + adminPage.slice(1)}
          </div>

          <div className="topbar-actions">
            {adminPage === "students" && (
              <>
                <div className="search-bar">
                  <span>🔍</span>
                  <input
                    className="search-input"
                    placeholder="Search students..."
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                  />
                </div>
                <button className="add-btn">+ Add Student</button>
              </>
            )}
          </div>
        </div>

        <div className="admin-content">
          {adminPage === "dashboard" && (
            <>
              <div className="stat-cards">
                {dashboardStats.map(([number, label, change]) => (
                  <div key={label} className="stat-card">
                    <div className="stat-num">{number}</div>
                    <div className="stat-label">{label}</div>
                    <div className="stat-change">{change}</div>
                  </div>
                ))}
              </div>

              <div className="admin-table">
                <div
                  style={{
                    padding: "20px 20px 0",
                    fontWeight: "700",
                    fontSize: "14px",
                    borderBottom: "1px solid #e0ddd6",
                    paddingBottom: "16px",
                  }}
                >
                  Recent Activity
                </div>
                {dashboardActivity.map(([name, action, detail, time], index) => (
                  <div
                    key={`${name}-${time}`}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                      padding: "16px 20px",
                      borderBottom: index < dashboardActivity.length - 1 ? "1px solid #e0ddd6" : "none",
                      fontSize: "13px",
                    }}
                  >
                    <div
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "50%",
                        background: "linear-gradient(135deg, #c9963a, #e8533f)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        fontWeight: "800",
                        fontSize: "14px",
                        flexShrink: 0,
                      }}
                    >
                      {name[0]}
                    </div>
                    <div style={{ flex: 1 }}>
                      <span style={{ fontWeight: "700" }}>{name}</span>
                      <span style={{ color: "var(--muted)", margin: "0 8px" }}>·</span>
                      <span style={{ color: "var(--muted)" }}>{action}</span>
                    </div>
                    <div style={{ color: "var(--muted)", fontSize: "12px" }}>{detail}</div>
                    <div
                      style={{
                        color: "var(--muted)",
                        fontSize: "11px",
                        fontFamily: "'DM Mono',monospace",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {time}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {adminPage === "students" && (
            <div className="admin-table">
              <div className="admin-table-head">
                <span>Student ID</span>
                <span>Name</span>
                <span>Program</span>
                <span>Semester</span>
                <span>GPA</span>
                <span>Actions</span>
              </div>
              {filteredStudents.map((student) => (
                <div key={student.id} className="admin-table-row">
                  <span className="mono" style={{ fontSize: "11px", color: "var(--muted)" }}>
                    {student.id}
                  </span>
                  <span style={{ fontWeight: "700" }}>{student.name}</span>
                  <span>{student.program}</span>
                  <span>{student.sem}</span>
                  <span className="mono" style={{ fontWeight: "700" }}>
                    {student.gpa}
                  </span>
                  <span style={{ display: "flex", gap: "8px" }}>
                    <span className="view-link" onClick={onViewStudentProfile}>
                      View Profile
                    </span>
                  </span>
                </div>
              ))}
            </div>
          )}

          {adminPage === "search" && (
            <div className="search-page" style={{ padding: 0 }}>
              <div style={{ marginBottom: "24px" }}>
                <div style={{ fontSize: "14px", color: "var(--muted)", marginBottom: "12px", fontWeight: "500" }}>
                  Search verified students across programs, skills, and graduation year
                </div>
                <input
                  className="search-hero-input"
                  placeholder='Try: "React developer BCT 2027" or "Machine Learning 2024"'
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                />
              </div>
              <div className="search-results">
                {filteredStudents.map((student) => (
                  <div
                    key={`search-${student.id}`}
                    className="search-result-card"
                    onClick={onViewStudentProfile}
                  >
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "50%",
                        background: "linear-gradient(135deg, var(--gold), var(--accent))",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        fontWeight: "800",
                        fontSize: "18px",
                        flexShrink: 0,
                      }}
                    >
                      {student.name[0]}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: "800", fontSize: "15px" }}>{student.name}</div>
                      <div style={{ fontSize: "12px", color: "var(--muted)", marginTop: "2px" }}>
                        {student.program} · {student.sem} Semester · GPA: {student.gpa}
                      </div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <span
                        style={{
                          background: "rgba(45,122,79,0.1)",
                          color: "var(--verified)",
                          border: "1px solid rgba(45,122,79,0.3)",
                          padding: "4px 10px",
                          borderRadius: "100px",
                          fontSize: "10px",
                          fontWeight: "700",
                        }}
                      >
                        ✓ Verified
                      </span>
                      <span style={{ color: "var(--blue)", fontWeight: "700", fontSize: "13px" }}>→</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {(adminPage === "results" || adminPage === "certificates" || adminPage === "documents") && (
            <div
              style={{
                background: "white",
                border: "1px solid #e0ddd6",
                borderRadius: "14px",
                padding: "48px",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "48px", marginBottom: "16px" }}>
                {adminPage === "results" ? "📝" : adminPage === "certificates" ? "🏅" : "🗂"}
              </div>
              <div style={{ fontSize: "18px", fontWeight: "800", marginBottom: "8px" }}>
                {adminPage === "results"
                  ? "Results Management"
                  : adminPage === "certificates"
                    ? "Certificate Management"
                    : "Document Management"}
              </div>
              <div style={{ fontSize: "14px", color: "var(--muted)", marginBottom: "24px" }}>
                Upload and manage {adminPage} for all students from this panel.
              </div>
              <button className="add-btn">
                + Upload {adminPage === "results" ? "Results" : adminPage === "certificates" ? "Certificate" : "Document"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
