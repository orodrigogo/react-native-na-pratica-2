import { useRef, useState } from "react"
import { Link } from "expo-router"
import { View } from "react-native"
import BottomS from "@gorhom/bottom-sheet"
import { MaterialIcons } from "@expo/vector-icons"

import { theme } from "@/theme"

import { Input } from "@/components/Input"
import { Button } from "@/components/Button"
import { Header } from "@/components/Header"
import { Progress } from "@/components/Progress"
import { BottomSheet } from "@/components/BottomSheet"
import { Transactions } from "@/components/Transactions"
import { TransactionType } from "@/components/TransactionType"

export default function Details() {
  const [type, setType] = useState<"up" | "down">("up")
  const bottomSheetRef = useRef<BottomS>(null)

  const handleBottomSheetOpen = () => bottomSheetRef.current?.expand()
  const handleBottomSheetClose = () => bottomSheetRef.current?.snapToIndex(0)

  return (
    <View style={{ flex: 1, padding: 32 }}>
      <Link asChild href="/">
        <MaterialIcons name="arrow-back" size={36} color={theme.colors.white} />
      </Link>
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
        <View style={{ flexDirection: "row", gap: 16 }}>
          <TransactionType
            type={{
              icon: "add",
              title: "Depósito",
              color: theme.colors.green_500,
              selected: type === "up",
            }}
            onPress={() => setType("up")}
          />
          <TransactionType
            type={{
              icon: "remove",
              title: "Saque",
              color: theme.colors.red_500,
              selected: type === "down",
            }}
            onPress={() => setType("down")}
          />
        </View>

        <Input placeholder="Valor" keyboardType="numeric" />
        <Button title="Criar" onPress={() => {}} />
      </BottomSheet>
    </View>
  )
}
