import { View } from "react-native"

import { theme } from "@/theme"
import { styles } from "./styles"

import { TransactionType } from "@/components/TransactionType"

type TransactionType = "up" | "down"

type Props = {
  selected: TransactionType
  onChange: (type: TransactionType) => void
}

export function TransactionTypeSelect({ selected, onChange }: Props) {
  return (
    <View style={styles.container}>
      <TransactionType
        type={{
          icon: "add",
          title: "Depósito",
          color: theme.colors.green_500,
          selected: selected === "up",
        }}
        onPress={() => onChange("up")}
      />

      <TransactionType
        type={{
          icon: "remove",
          title: "Saque",
          color: theme.colors.red_500,
          selected: selected === "down",
        }}
        onPress={() => onChange("down")}
      />
    </View>
  )
}
