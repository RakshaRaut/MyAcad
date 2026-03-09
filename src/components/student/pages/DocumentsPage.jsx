export default function DocumentsPage({ student }) {
  return (
    <div className="content-area">
      <div className="doc-list">
        {student.documents.map((document) => (
          <div key={document.name} className="doc-item">
            <div className="doc-icon">📄</div>
            <div>
              <div className="doc-name">{document.name}</div>
              <div className="doc-meta">
                {document.type} · {document.size}
              </div>
            </div>
            {document.verified && <div className="doc-verified-badge">✓ Verified by College</div>}
            <button className="dl-btn" style={{ marginTop: 0, marginLeft: "16px" }}>
              ⬇ Download
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
