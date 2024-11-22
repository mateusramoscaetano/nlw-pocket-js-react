import { useGetUserExperienceAndLevel } from "../http/generated/api";
import { Progress, ProgressIndicator } from "./ui/progress-bar";

export function UserLevel() {
  const { data } = useGetUserExperienceAndLevel();

  if (!data) {
    return null;
  }

  const experienceRelativeToCurrentLevel =
    data.experience - data.experienceForCurrentLevel;

  const experienceToNextLevel =
    data.experienceToNextLevel - data.experienceForCurrentLevel;

  const percentage = Math.round(
    (experienceRelativeToCurrentLevel * 100) / experienceToNextLevel
  );

  return (
    <div className="max-w-[220px] w-full flex flex-col gap-1">
      <div className="flex items-center w-full px-2 justify-between text-xxs text-zinc-200">
        <span>Lvl {data.level}</span>
        <span className="text-zinc-400">
          {experienceRelativeToCurrentLevel}xp de {experienceToNextLevel}xp
        </span>
        <span>{percentage}%</span>
      </div>
      <Progress
        className="bg-zinc-800"
        value={experienceRelativeToCurrentLevel}
        max={experienceToNextLevel}
      >
        <ProgressIndicator style={{ width: `${percentage}%` }} />
      </Progress>
    </div>
  );
}
