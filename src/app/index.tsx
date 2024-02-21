import { useEffect, useRef, useState } from "react"
import { Alert, View, Keyboard } from "react-native"
import { router } from "expo-router"
import Bottom from "@gorhom/bottom-sheet"

import { useSQLiteContext } from "expo-sqlite/next"
import { useGoalRepository } from "@/database/repositories/useGoalRepository"
import { useTransactionRepository } from "@/database/repositories/useTransactionRepository"

import { Input } from "@/components/Input"
import { Header } from "@/components/Header"
import { Button } from "@/components/Button"
import { BottomSheet } from "@/components/BottomSheet"
import { Goals, GoalsProps } from "@/components/Goals"
import { Transactions } from "@/components/Transactions"

export default function Home() {
  const [goals, setGoals] = useState<GoalsProps>([])
  const [name, setName] = useState("")
  const [total, setTotal] = useState("")

  const database = useSQLiteContext()
  const useGoal = useGoalRepository()
  const useTransaction = useTransactionRepository()

  const bottomSheetRef = useRef<Bottom>(null)

  const handleBottomSheetOpen = () => bottomSheetRef.current?.expand()
  const handleBottomSheetClose = () => bottomSheetRef.current?.snapToIndex(0)

  function handleOpenDetails(id: string) {
    router.navigate("/details/" + id)
  }

  async function handleCreate() {
    try {
      if (isNaN(Number(total))) {
        return Alert.alert("Erro", "Valor inválido.")
      }

      useGoal.create({ name, total: Number(total) })

      fetchGoals()

      Alert.alert("Sucesso", "Meta cadastrada!")

      handleBottomSheetClose()
      Keyboard.dismiss()

      setName("")
      setTotal("")
    } catch (error) {
      Alert.alert("Erro", "Não foi possível cadastrar.")
      console.log(error)
    }
  }

  async function fetchGoals() {
    try {
      const response: GoalsProps = useGoal.all().map((goal) => {
        const current = useTransaction.totalByGoalId(goal.id)

        return {
          ...goal,
          id: goal.id.toString(),
          current,
        }
      })

      setGoals(response)
      console.log(response)
    } catch (error) {
      Alert.alert("Erro", "Não foi possível listar.")
      console.log(error)
    }
  }

  useEffect(() => {
    fetchGoals()
  }, [])

  return (
    <View style={{ flex: 1, padding: 32 }}>
      <Header
        title="Suas metas"
        subtitle="Poupe hoje para colher os frutos amanhã."
      />

      <Goals
        goals={goals}
        onAdd={handleBottomSheetOpen}
        onPress={handleOpenDetails}
      />

      <Transactions transactions={[]} />

      <BottomSheet
        ref={bottomSheetRef}
        title="Nova meta"
        snapPoints={[0.01, 284]}
        onClose={handleBottomSheetClose}
      >
        <Input placeholder="Nome da meta" onChangeText={setName} value={name} />

        <Input
          placeholder="Valor"
          keyboardType="numeric"
          onChangeText={setTotal}
          value={total}
        />

        <Button title="Criar" onPress={handleCreate} />
      </BottomSheet>
    </View>
  )
}
