import { Progress } from '@/components/ui/progress';

interface SkillProgressProps {
  name: string;
  level: number;
  index: number;
}

export function SkillProgress({ name, level, index }: SkillProgressProps) {
  return (
    <div
      className="space-y-2"
    >
      <div className="flex justify-between">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm text-muted-foreground">{level}%</span>
      </div>
      <Progress value={level} className="h-2" />
    </div>
  );
}