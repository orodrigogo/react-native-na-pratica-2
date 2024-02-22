import { useEffect, useRef, useState } from "react"
import { useLocalSearchParams } from "expo-router"
import Bottom from "@gorhom/bottom-sheet"
import { Alert, Keyboard, View } from "react-native"

import { useGoalRepository } from "@/database/useGoalRepository"
import { useTransactionRepository } from "@/database/useTransactionRepository"

import { Input } from "@/components/Input"
import { Button } from "@/components/Button"
import { Header } from "@/components/Header"
import { Progress } from "@/components/Progress"
import { BackButton } from "@/components/BackButton"
import { BottomSheet } from "@/components/BottomSheet"
import { Transactions } from "@/components/Transactions"
import { TransactionProps } from "@/components/Transaction"
import { TransactionTypeSelect } from "@/components/TransactionTypeSelect"
import { currencyFormat } from "@/utils/currencyFormat"

type Status = {
  name: string
  total: string
  current: string
  percentage: number
}

export default function Details() {
  const [value, setValue] = useState("")
  const [type, setType] = useState<"up" | "down">("up")
  const [transactions, setTransactions] = useState<TransactionProps[]>([])
  const [status, setStatus] = useState<Status>({} as Status)
  const [isLoading, setIsLoading] = useState(true)

  const bottomSheetRef = useRef<Bottom>(null)

  const routeParams = useLocalSearchParams()
  const goalId = Number(routeParams.id)

  const useGoal = useGoalRepository()
  const useTransactions = useTransactionRepository()

  const handleBottomSheetOpen = () => bottomSheetRef.current?.expand()
  const handleBottomSheetClose = () => bottomSheetRef.current?.snapToIndex(0)

  async function fetchStatus() {
    const goalsDb = useGoal.show(goalId)

    if (goalsDb) {
      const current = useTransactions.totalByGoalId(goalId)
      const percentage = (current / goalsDb.total) * 100

      setStatus({
        name: goalsDb.name,
        current: currencyFormat(current),
        total: currencyFormat(goalsDb.total),
        percentage,
      })

      setIsLoading(false)
    }
  }

  async function fetchTransactions() {
    const response = useTransactions.findByGoalId(goalId)
    setTransactions(response)
  }

  async function handleNewTransaction() {
    try {
      if (isNaN(Number(value))) {
        return Alert.alert("Erro", "Valor inválido.")
      }

      useTransactions.create({
        goal_id: goalId,
        amount: Number(value),
      })

      await fetchTransactions()

      Alert.alert("Sucesso", "Transação registrada!")

      handleBottomSheetClose()
      Keyboard.dismiss()
      setValue("")
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchStatus()
    fetchTransactions()
  }, [])

  if (isLoading) {
    return
  }

  return (
    <View style={{ flex: 1, padding: 32 }}>
      <BackButton />

      <Header
        title={status.name}
        subtitle={`${status.current} de ${status.total}`}
      />

      <Progress percentage={status.percentage} />

      <Transactions transactions={transactions} />

      <Button title="Nova transação" onPress={handleBottomSheetOpen} />

      <BottomSheet
        ref={bottomSheetRef}
        title="Nova transação"
        snapPoints={[0.01, 284]}
        onClose={handleBottomSheetClose}
      >
        <TransactionTypeSelect onChange={setType} selected={type} />

        <Input
          placeholder="Valor"
          keyboardType="numeric"
          onChangeText={setValue}
          value={value}
        />

        <Button title="Confirmar" onPress={handleNewTransaction} />
      </BottomSheet>
    </View>
  )
}
