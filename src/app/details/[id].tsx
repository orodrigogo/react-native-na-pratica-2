import { View } from "react-native"
import { Link } from "expo-router"
import { MaterialIcons } from "@expo/vector-icons"

import { theme } from "@/theme"

import { Header } from "@/components/Header"
import { Button } from "@/components/Button"
import { Progress } from "@/components/Progress"
import { Transactions } from "@/components/Transactions"

export default function Details() {
  return (
    <View style={{ flex: 1, padding: 32 }}>
      <Link asChild href="/">
        <MaterialIcons name="arrow-back" size={36} color={theme.colors.white} />
      </Link>
      <Header title="Notebook" subtitle="R$ 1.342,57 de R$ 5.000,00" />
      <Progress percentage={30} />
      <Transactions />
      <Button title="Nova transação" />
    </View>
  )
}
