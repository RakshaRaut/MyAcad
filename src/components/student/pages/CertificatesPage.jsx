export default function CertificatesPage({ student }) {
  return (
    <div className="content-area">
      <div className="cert-grid">
        {student.certificates.map((certificate) => (
          <div key={`${certificate.title}-${certificate.date}`} className="cert-card">
            {certificate.verified && <div className="cert-verified">✓ Verified</div>}
            <div className="cert-icon">🏅</div>
            <div className="cert-title">{certificate.title}</div>
            <div className="cert-issuer">{certificate.issuer}</div>
            <div className="cert-date">{certificate.date}</div>
            <button className="dl-btn">⬇ Download PDF</button>
          </div>
        ))}
      </div>
    </div>
  );
}
