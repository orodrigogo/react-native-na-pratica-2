import { View } from "react-native"

import { Goals } from "@/components/Goals"
import { Header } from "@/components/Header"
import { Button } from "@/components/Button"
import { Transactions } from "@/components/Transactions"

export default function Home() {
  return (
    <View style={{ flex: 1, padding: 32 }}>
      <Header
        title="Suas metas"
        subtitle="Poupe hoje para colher os frutos amanhã."
      />

      <Goals />
      <Transactions />
      <Button title="Criar meta" />
    </View>
  )
}
