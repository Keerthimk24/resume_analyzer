import './SkillChip.css';

export default function SkillChip({ skill, variant = 'matched', index = 0 }) {
  const displayName = skill.displayName || skill.skill || skill;
  const category = skill.category || '';

  return (
    <span 
      className={`skill-chip skill-chip--${variant}`}
      style={{ animationDelay: `${index * 30}ms` }}
      title={category ? `Category: ${category}` : ''}
    >
      <span className="skill-chip__dot" />
      <span className="skill-chip__name">{displayName}</span>
    </span>
  );
}
