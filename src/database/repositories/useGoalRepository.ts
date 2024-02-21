import { useSQLiteContext, SQLiteDatabase } from "expo-sqlite/next"

type GoalDatabase = {
  id: number
  name: string
  total: number
  goal_id: number
  created_at: number
}

export function useGoalRepository() {
  const database = useSQLiteContext()

  function all() {
    return database.getAllSync<GoalDatabase>("SELECT * FROM goals")
  }

  function create({ name, total }: Pick<GoalDatabase, "name" | "total">) {
    const statement = database.prepareSync(
      "INSERT INTO goals (name, total) VALUES ($name, $total)"
    )

    statement.executeSync({
      $name: name,
      $total: total,
    })
  }

  function show(id: number) {
    const statement = database.prepareSync("SELECT * FROM goals WHERE id = $id")
    const result = statement.executeSync<GoalDatabase>({ $id: id })
    return result.getFirstSync()
  }

  return {
    all,
    show,
    create,
  }
}
