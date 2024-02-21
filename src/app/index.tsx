import { useRef } from "react"
import { router } from "expo-router"
import { Text, View } from "react-native"
import BottomS from "@gorhom/bottom-sheet"

import { Goals } from "@/components/Goals"
import { Header } from "@/components/Header"
import { Button } from "@/components/Button"
import { BottomSheet } from "@/components/BottomSheet"
import { Transactions } from "@/components/Transactions"
import { Input } from "@/components/Input"

export default function Home() {
  const bottomSheetRef = useRef<BottomS>(null)

  const handleBottomSheetOpen = () => bottomSheetRef.current?.expand()
  const handleBottomSheetClose = () => bottomSheetRef.current?.snapToIndex(0)

  function handleOpenDetails(id: string) {
    router.navigate("/details/" + id)
  }

  return (
    <View style={{ flex: 1, padding: 32 }}>
      <Header
        title="Suas metas"
        subtitle="Poupe hoje para colher os frutos amanhã."
      />

      <Goals />
      <Transactions onPress={(id) => handleOpenDetails(id)} />
      <Button title="Criar meta" onPress={handleBottomSheetOpen} />

      <BottomSheet
        ref={bottomSheetRef}
        title="Nova meta"
        snapPoints={[0.01, 284]}
        onClose={handleBottomSheetClose}
      >
        <Input placeholder="Nome da meta" />
        <Input placeholder="Valor" keyboardType="numeric" />
        <Button title="Criar" onPress={() => {}} />
      </BottomSheet>
    </View>
  )
}
