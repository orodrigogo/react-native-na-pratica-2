import { useSQLiteContext } from "expo-sqlite/next"

type TransactionCreateDatabase = {
  amount: number
  goal_id: number
}

type TransactionResponseDatabase = {
  id: number
  amount: number
  goal_id: number
  created_at: number
}

export function useTransactionRepository() {
  const database = useSQLiteContext()

  function findByGoalId(id: number) {
    const statement = database.prepareSync(
      "SELECT * FROM transactions WHERE goal_id = $id"
    )

    const result = statement.executeSync<TransactionResponseDatabase>({
      $id: id,
    })

    return result.getAllSync()
  }

  function totalByGoalId(id: number) {
    const statement = database.prepareSync(
      "SELECT SUM(amount) as total FROM transactions WHERE goal_id = $id"
    )

    const result = statement.executeSync<{ total: number }>({ $id: id })
    const response = result.getFirstSync()

    return response?.total ?? 0
  }

  function create(transaction: TransactionCreateDatabase) {
    const statement = database.prepareSync(
      "INSERT INTO transactions (amount, goal_id) VALUES ($amount, $goal_id)"
    )

    statement.executeSync({
      $amount: transaction.amount,
      $goal_id: transaction.goal_id,
    })
  }

  return {
    create,
    totalByGoalId,
    findByGoalId,
  }
}
