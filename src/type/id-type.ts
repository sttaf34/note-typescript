// https://qiita.com/chimerast/items/1bea8bfb049767570b49

declare class Id<T extends string> {
  private IDENTITY: T
}

type WorkoutId = Id<"Workout"> & number
const WorkoutId = (id: number): WorkoutId => {
  return id as WorkoutId
}

type ExerciseId = Id<"Exercise"> & number
const ExerciseId = (id: number): ExerciseId => {
  return id as ExerciseId
}

{
  const workoutId1 = WorkoutId(1)
  const workoutId2 = WorkoutId(2)
  console.log(workoutId1 === workoutId2) // false
}

{
  const workoutIdA = WorkoutId(3)
  const workoutIdB = WorkoutId(3)
  console.log(workoutIdA === workoutIdB) // true
}

{
  const workoutId = WorkoutId(1)
  const exerciseId = ExerciseId(1)
  console.log(workoutId, exerciseId)
  // エディタ上で指摘してくれる
  // 無視して実行するとエラーになる
  // console.log(workoutId === exerciseId) // エラー
}

{
  const log = (value: number) => {
    console.log(value)
  }

  const workoutId = WorkoutId(1)
  log(workoutId)
}
