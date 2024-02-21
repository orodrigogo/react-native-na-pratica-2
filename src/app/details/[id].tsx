import { useRef, useState } from "react"
import { View } from "react-native"
import BottomS from "@gorhom/bottom-sheet"

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
  const bottomSheetRef = useRef<BottomS>(null)

  const handleBottomSheetOpen = () => bottomSheetRef.current?.expand()
  const handleBottomSheetClose = () => bottomSheetRef.current?.snapToIndex(0)

  return (
    <View style={{ flex: 1, padding: 32 }}>
      <BackButton />

      <Header title="Notebook" subtitle="R$ 1.342,57 de R$ 5.000,00" />

      <Progress percentage={30} />

      <Transactions />

      <Button title="Nova transação" onPress={handleBottomSheetOpen} />

      <BottomSheet
        ref={bottomSheetRef}
        title="Nova transação"
        snapPoints={[0.01, 284]}
        onClose={handleBottomSheetClose}
      >
        <TransactionTypeSelect onChange={setType} selected={type} />

        <Input placeholder="Valor" keyboardType="numeric" />

        <Button title="Criar" onPress={() => {}} />
      </BottomSheet>
    </View>
  )
}
