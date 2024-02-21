import { useSQLiteContext, SQLiteDatabase } from "expo-sqlite/next"

type GoalDatabase = {
  id: number
  name: string
  total: number
  goal_id: number
  created_at: number
}

export function useTransactionRepository() {
  const database = useSQLiteContext()

  function totalByGoalId(id: number) {
    const statement = database.prepareSync(
      "SELECT SUM(amount) as total FROM transactions WHERE goal_id = $id"
    )

    const result = statement.executeSync<{ total: number }>({ $id: id })
    const response = result.getFirstSync()

    return response?.total ?? 0
  }

  return {
    totalByGoalId,
  }
}
