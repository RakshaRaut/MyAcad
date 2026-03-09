export default function AchievementsPage({ student }) {
  return (
    <div className="content-area">
      <div className="ach-grid">
        {student.achievements.map((achievement) => (
          <div key={achievement.title} className="ach-card">
            <span className="ach-icon">{achievement.icon}</span>
            <div className="ach-title">{achievement.title}</div>
            <div className="ach-cat">{achievement.category}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
