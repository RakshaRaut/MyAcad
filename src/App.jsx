import { useMemo, useState } from 'react'
import './App.css'

const initialStudent = {
  did: 'did:stid:np:u-2026-000143',
  name: 'Aarav Karki',
  college: 'Kathmandu Engineering College',
  program: 'B.E. Computer Engineering',
  semester: '8th',
  gpa: '3.72',
  contact: 'aarav.karki@email.com',
  profileLink: 'https://stid.app/u/aarav-karki',
}

const initialRecords = [
  {
    id: 'REC-101',
    type: 'Transcript',
    issuer: 'Kathmandu Engineering College',
    issueDate: '2025-12-12',
    status: 'Verified',
    hash: '0x8ae17c95d4f2f8f1',
  },
  {
    id: 'REC-102',
    type: 'Internship Letter',
    issuer: 'NAXA Pvt. Ltd.',
    issueDate: '2025-09-10',
    status: 'Verified',
    hash: '0x52f08ab77812cd91',
  },
  {
    id: 'REC-103',
    type: 'Recommendation Letter',
    issuer: 'Department of Computer Engineering',
    issueDate: '2026-01-06',
    status: 'Verified',
    hash: '0x9af90b0de9f1c62c',
  },
]

const initialSkills = [
  { name: 'React', level: 'Advanced', endorsedBy: 'Prof. S. Bhatta' },
  { name: 'Node.js', level: 'Intermediate', endorsedBy: 'Mentor, NAXA' },
  { name: 'Data Structures', level: 'Advanced', endorsedBy: 'Prof. R. KC' },
]

const institutions = [
  { name: 'Kathmandu Engineering College', trustScore: 92 },
  { name: 'Pulchowk Campus', trustScore: 95 },
  { name: 'Pokhara University', trustScore: 84 },
]

function App() {
  const [activeView, setActiveView] = useState('student')
  const [student] = useState(initialStudent)
  const [records, setRecords] = useState(initialRecords)
  const [skills] = useState(initialSkills)
  const [sharing, setSharing] = useState({ gpa: true, contact: false, records: true })
  const [linkHours, setLinkHours] = useState(24)
  const [shareLink, setShareLink] = useState('')
  const [selectedCareer, setSelectedCareer] = useState('Frontend Engineer')
  const [newRecord, setNewRecord] = useState({ type: '', studentDid: '', issuer: '' })
  const [verificationDid, setVerificationDid] = useState('')

  const verifiedCount = useMemo(
    () => records.filter((record) => record.status === 'Verified').length,
    [records],
  )

  const skillGaps = useMemo(() => {
    const map = {
      'Frontend Engineer': ['Testing', 'System Design'],
      'Backend Engineer': ['Distributed Systems', 'DevOps'],
      'Data Engineer': ['SQL Optimization', 'Data Warehousing'],
    }

    return map[selectedCareer]
  }, [selectedCareer])

  const scholarshipEligibility = useMemo(() => Number(student.gpa) >= 3.5, [student.gpa])

  const matchedCandidate = useMemo(
    () => (verificationDid === student.did ? student : null),
    [verificationDid, student],
  )

  const toggleSharing = (key) => {
    setSharing((previous) => ({ ...previous, [key]: !previous[key] }))
  }

  const generateShareLink = () => {
    const expiry = new Date(Date.now() + Number(linkHours) * 60 * 60 * 1000)
    const token = Math.random().toString(36).slice(2, 10)
    setShareLink(`https://stid.app/share/${token}?expires=${expiry.toISOString()}`)
  }

  const addAcademicRecord = (event) => {
    event.preventDefault()

    if (!newRecord.type || !newRecord.studentDid || !newRecord.issuer) {
      return
    }

    const createdRecord = {
      id: `REC-${records.length + 101}`,
      type: newRecord.type,
      issuer: newRecord.issuer,
      issueDate: new Date().toISOString().slice(0, 10),
      status: newRecord.studentDid === student.did ? 'Verified' : 'Pending Verification',
      hash: `0x${Math.random().toString(16).slice(2, 18)}`,
    }

    setRecords((previous) => [createdRecord, ...previous])
    setNewRecord({ type: '', studentDid: '', issuer: '' })
  }

  const resumePreview = useMemo(
    () => `${student.name}\n${student.program} | GPA ${student.gpa}\nVerified Records: ${verifiedCount}\nSkills: ${skills.map((skill) => skill.name).join(', ')}`,
    [skills, student, verifiedCount],
  )

  return (
    <div className="app-shell">
      <header className="header">
        <div>
          <h1>StID · Student-Owned Identity</h1>
          <p>Hybrid digital identity for students, colleges, and employers.</p>
        </div>
        <nav className="tabs">
          {['student', 'college', 'employer'].map((view) => (
            <button
              key={view}
              className={activeView === view ? 'tab active' : 'tab'}
              onClick={() => setActiveView(view)}
            >
              {view}
            </button>
          ))}
        </nav>
      </header>

      {activeView === 'student' && (
        <main className="grid">
          <section className="card">
            <h2>Decentralized Student ID</h2>
            <p><strong>DID:</strong> {student.did}</p>
            <p><strong>Public Profile:</strong> <a href={student.profileLink}>{student.profileLink}</a></p>
            <p><strong>Private Vault:</strong> Encrypted and student-controlled</p>
          </section>

          <section className="card">
            <h2>Verified Academic Records</h2>
            <p>{verifiedCount}/{records.length} records currently verified</p>
            <ul className="list">
              {records.map((record) => (
                <li key={record.id}>
                  <strong>{record.type}</strong> · {record.status}<br />
                  {record.issuer} · {record.issueDate}<br />
                  Hash: <code>{record.hash}</code>
                </li>
              ))}
            </ul>
          </section>

          <section className="card">
            <h2>Permission-Based Sharing</h2>
            <div className="toggles">
              {Object.entries(sharing).map(([key, value]) => (
                <label key={key}>
                  <input type="checkbox" checked={value} onChange={() => toggleSharing(key)} />
                  Allow access to {key}
                </label>
              ))}
            </div>
            <div className="inline-controls">
              <label>
                Access duration (hours)
                <input
                  type="number"
                  min="1"
                  max="168"
                  value={linkHours}
                  onChange={(event) => setLinkHours(event.target.value)}
                />
              </label>
              <button onClick={generateShareLink}>Generate Time-Limited Link</button>
            </div>
            {shareLink && <p className="notice">{shareLink}</p>}
          </section>

          <section className="card">
            <h2>Resume Auto-Builder</h2>
            <pre>{resumePreview}</pre>
            <div className="inline-controls">
              <button>Export PDF</button>
              <button>Share Resume Link</button>
            </div>
          </section>

          <section className="card">
            <h2>Skill Proof Layer</h2>
            <ul className="list">
              {skills.map((skill) => (
                <li key={skill.name}>
                  <strong>{skill.name}</strong> · {skill.level}<br />
                  Endorsed by {skill.endorsedBy}
                </li>
              ))}
            </ul>
          </section>

          <section className="card">
            <h2>AI Career Intelligence</h2>
            <label>
              Target Role
              <select value={selectedCareer} onChange={(event) => setSelectedCareer(event.target.value)}>
                <option>Frontend Engineer</option>
                <option>Backend Engineer</option>
                <option>Data Engineer</option>
              </select>
            </label>
            <p><strong>Suggested Path:</strong> Build 2 verified projects for {selectedCareer}.</p>
            <p><strong>Skill Gaps:</strong> {skillGaps.join(', ')}</p>
            <p><strong>Job Match:</strong> 82% profile relevance score</p>
          </section>

          <section className="card">
            <h2>Scholarship & Loan Readiness</h2>
            <p>{scholarshipEligibility ? 'Eligible for merit-based scholarships.' : 'Improve GPA for merit eligibility.'}</p>
            <p>Loan acceleration: {verifiedCount >= 3 ? 'Ready for fast-track' : 'Need more verified records'}</p>
          </section>

          <section className="card">
            <h2>Cross-College Portability</h2>
            <p>Transfer packet can move DID, transcript history, and endorsements instantly.</p>
            <button>Generate Migration Package</button>
          </section>

          <section className="card">
            <h2>Academic Reputation Graph</h2>
            <ul className="list">
              {institutions.map((institution) => (
                <li key={institution.name}>
                  {institution.name}
                  <div className="bar-wrap">
                    <span className="bar" style={{ width: `${institution.trustScore}%` }} />
                  </div>
                  Trust Score: {institution.trustScore}
                </li>
              ))}
            </ul>
          </section>
        </main>
      )}

      {activeView === 'college' && (
        <main className="grid one-column">
          <section className="card">
            <h2>College Credential Issuance</h2>
            <form className="form" onSubmit={addAcademicRecord}>
              <input
                placeholder="Record Type"
                value={newRecord.type}
                onChange={(event) => setNewRecord((previous) => ({ ...previous, type: event.target.value }))}
              />
              <input
                placeholder="Student DID"
                value={newRecord.studentDid}
                onChange={(event) =>
                  setNewRecord((previous) => ({ ...previous, studentDid: event.target.value }))
                }
              />
              <input
                placeholder="Issuer Name"
                value={newRecord.issuer}
                onChange={(event) => setNewRecord((previous) => ({ ...previous, issuer: event.target.value }))}
              />
              <button type="submit">Digitally Sign & Issue</button>
            </form>
          </section>
          <section className="card">
            <h2>Issued Records Ledger</h2>
            <ul className="list">
              {records.map((record) => (
                <li key={record.id}>
                  {record.id} · {record.type} · {record.status} · {record.hash}
                </li>
              ))}
            </ul>
          </section>
        </main>
      )}

      {activeView === 'employer' && (
        <main className="grid one-column">
          <section className="card">
            <h2>Employer Verification Portal</h2>
            <input
              placeholder="Enter candidate DID"
              value={verificationDid}
              onChange={(event) => setVerificationDid(event.target.value)}
            />
            {matchedCandidate ? (
              <div className="verification-result">
                <p><strong>Candidate:</strong> {matchedCandidate.name}</p>
                <p><strong>Program:</strong> {matchedCandidate.program}</p>
                <p><strong>Verified Records:</strong> {verifiedCount}</p>
                <p><strong>Status:</strong> Identity verified with blockchain-backed hashes</p>
              </div>
            ) : (
              <p className="notice">No verified candidate found for this DID.</p>
            )}
          </section>
          <section className="card">
            <h2>API Preview</h2>
            <pre>{`GET /api/verification/{did}\nGET /api/records/{did}\nPOST /api/access-token`}</pre>
          </section>
        </main>
      )}
    </div>
  )
}

export default App
