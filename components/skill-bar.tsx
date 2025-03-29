interface SkillBarProps {
  skill: string
  percentage: number
}

export default function SkillBar({ skill, percentage }: SkillBarProps) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm">{skill}</span>
        <span className="text-sm text-muted-foreground">{percentage}%</span>
      </div>
      <div className="skill-bar">
        <div className="skill-progress relative overflow-hidden" style={{ width: `${percentage}%` }}>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}

