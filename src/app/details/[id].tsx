import { useEffect, useRef, useState } from "react"
import { useLocalSearchParams } from "expo-router"
import Bottom from "@gorhom/bottom-sheet"
import { Alert, Keyboard, View } from "react-native"

import { useGoalRepository } from "@/database/repositories/useGoalRepository"

import { Input } from "@/components/Input"
import { Button } from "@/components/Button"
import { Header } from "@/components/Header"
import { Progress } from "@/components/Progress"
import { BackButton } from "@/components/BackButton"
import { BottomSheet } from "@/components/BottomSheet"
import { Transactions } from "@/components/Transactions"
import { TransactionTypeSelect } from "@/components/TransactionTypeSelect"

export default function Details() {
  const [type, setType] = useState<"up" | "down">("up")
  const [transactions, setTransactions] = useState([])
  const [value, setValue] = useState("")
  const [data, setData] = useState({})

  const bottomSheetRef = useRef<Bottom>(null)

  const routeParams = useLocalSearchParams()

  const handleBottomSheetOpen = () => bottomSheetRef.current?.expand()
  const handleBottomSheetClose = () => bottomSheetRef.current?.snapToIndex(0)

  async function fetchGoal() {
    const useGoal = useGoalRepository()

    if (routeParams.id) {
      const data = useGoal.show(Number(routeParams.id))
      console.log("teste =>", data)
      setData(data ?? [])
    }
  }

  async function fetchTransactions() {}

  async function handleNewTransaction() {
    try {
      if (isNaN(Number(value))) {
        return Alert.alert("Erro", "Valor inválido.")
      }

      //await goalsStorage.create({ name, total: totalAsNumber })
      /*
      await database.execAsync(
        `INSERT INTO transactions (goal_id, amount) VALUES (${routeParams.id}, ${value})`
      )

      await fetchTransactions()

      Alert.alert("Sucesso", "Transação registrada!")

      handleBottomSheetClose()
      Keyboard.dismiss()

      setValue("")
       */
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchGoal()
    fetchTransactions()
  }, [])

  return (
    <View style={{ flex: 1, padding: 32 }}>
      <BackButton />

      <Header title={data.name} subtitle={`R$ 1.342,57 de R$ ${data.total}`} />

      <Progress percentage={30} />

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
