import { useSQLiteContext } from "expo-sqlite/next"

export type GoalResponseDatabase = {
  id: number
  name: string
  total: number
  goal_id: number
  created_at: number
}

export type GoalCreateDatabase = {
  name: string
  total: number
}

export function useGoalRepository() {
  const database = useSQLiteContext()

  function all() {
    return database.getAllSync<GoalResponseDatabase>("SELECT * FROM goals")
  }

  function create(goal: GoalCreateDatabase) {
    const statement = database.prepareSync(
      "INSERT INTO goals (name, total) VALUES ($name, $total)"
    )

    statement.executeSync({
      $name: goal.name,
      $total: goal.total,
    })
  }

  function show(id: number) {
    const statement = database.prepareSync("SELECT * FROM goals WHERE id = $id")

    const result = statement.executeSync<GoalResponseDatabase>({ $id: id })

    return result.getFirstSync()
  }

  return {
    all,
    show,
    create,
  }
}
