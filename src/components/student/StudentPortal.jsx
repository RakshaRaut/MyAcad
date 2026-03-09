import { navItems, pageTitles, pageUrls } from "../../data/portalData";
import AcademicsPage from "./pages/AcademicsPage";
import AchievementsPage from "./pages/AchievementsPage";
import CertificatesPage from "./pages/CertificatesPage";
import DocumentsPage from "./pages/DocumentsPage";
import ProfilePage from "./pages/ProfilePage";
import ProjectsPage from "./pages/ProjectsPage";
import ResumePage from "./pages/ResumePage";

const pageComponents = {
  profile: ProfilePage,
  academics: AcademicsPage,
  certificates: CertificatesPage,
  projects: ProjectsPage,
  achievements: AchievementsPage,
  resume: ResumePage,
  documents: DocumentsPage,
};

export default function StudentPortal({
  studentData,
  page,
  setPage,
  onBack,
  backLabel = "Home",
  onHome,
}) {
  const ActivePage = pageComponents[page];

  return (
    <div className="student-shell">
      <div className="student-sidebar">
        <div className="sidebar-header">
          <div className="sidebar-logo">
            Academic<span>ID</span>
          </div>
          <div className="sidebar-college">Pokhara University</div>
        </div>

        <div className="sidebar-profile">
          <div className="avatar">R</div>
          <div>
            <div className="sidebar-name">{studentData.name}</div>
            <div className="sidebar-id">{studentData.id}</div>
          </div>
        </div>

        <div className="sidebar-nav">
          {navItems.map((item) => (
            <div
              key={item.id}
              className={`nav-item ${page === item.id ? "active" : ""}`}
              onClick={() => setPage(item.id)}
            >
              <span className="nav-icon">{item.icon}</span>
              {item.label}
            </div>
          ))}
        </div>

        <div className="sidebar-footer sidebar-footer-actions">
          <div className="back-btn" onClick={onBack}>
            ← Back to {backLabel}
          </div>
          <div className="home-btn" onClick={onHome}>
            ⌂ Home
          </div>
        </div>
      </div>

      <div className="student-main">
        <div className="page-header">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div>
              <div className="page-title">{pageTitles[page]}</div>
              <div className="page-url">student.pu.edu.np/raksha-raut{pageUrls[page]}</div>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <button className="dl-btn" style={{ marginTop: 0 }}>
                🔗 Share Profile
              </button>
            </div>
          </div>
        </div>

        {ActivePage ? <ActivePage student={studentData} /> : null}
      </div>
    </div>
  );
}
