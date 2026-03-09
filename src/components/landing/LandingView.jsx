import { landingFeatures } from "../../data/portalData";

export default function LandingView({ onOpenAdmin, onOpenStudent }) {
  return (
    <div className="landing">
      <nav className="landing-nav">
        <div className="logo">
          Academic<span>ID</span>
        </div>
        <div style={{ display: "flex", gap: "12px" }}>
          <button className="btn-outline" style={{ padding: "10px 20px", fontSize: "13px" }} onClick={onOpenAdmin}>
            Admin Portal
          </button>
          <button className="btn-primary" style={{ padding: "10px 20px", fontSize: "13px" }} onClick={onOpenStudent}>
            Student Portal
          </button>
        </div>
      </nav>

      <div className="landing-hero">
        <div className="hero-badge">🎓 Verified Academic Identity Platform</div>
        <h1 className="hero-title">
          Your College.<br />
          <em>Your Digital Identity.</em>
        </h1>
        <p className="hero-sub">
          Every student gets a verified personal website — official academic records, certificates, projects,
          and resume. All in one place. All trusted.
        </p>
        <div className="hero-btns">
          <button className="btn-primary" onClick={onOpenStudent}>
            View Demo Profile →
          </button>
          <button className="btn-outline" onClick={onOpenAdmin}>
            Admin Dashboard
          </button>
        </div>
      </div>

      <div className="features-grid">
        {landingFeatures.map((feature) => (
          <div key={feature.title} className="feature-card">
            <div className="feat-icon">{feature.icon}</div>
            <div className="feat-title">{feature.title}</div>
            <div className="feat-desc">{feature.desc}</div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: "center", padding: "0 60px 60px", position: "relative", zIndex: 10 }}>
        <div
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "12px",
            display: "inline-block",
            padding: "12px 28px",
          }}
        >
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "14px",
              color: "rgba(245,243,238,0.5)",
            }}
          >
            student.university.edu.np/<span style={{ color: "var(--gold-light)" }}>raksha-raut</span>
          </span>
        </div>
      </div>
    </div>
  );
}
