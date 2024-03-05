import { View } from "react-native"

import { colors } from "@/styles/colors"
import { TransactionType } from "@/components/TransactionType"

type TransactionType = "up" | "down"

type Props = {
  selected: TransactionType
  onChange: (type: TransactionType) => void
}

export function TransactionTypeSelect({ selected, onChange }: Props) {
  return (
    <View className="flex-row gap-4">
      <TransactionType
        type={{
          icon: "add",
          title: "Depósito",
          color: colors.green[500],
          selected: selected === "up",
        }}
        onPress={() => onChange("up")}
      />

      <TransactionType
        type={{
          icon: "remove",
          title: "Saque",
          color: colors.red[500],
          selected: selected === "down",
        }}
        onPress={() => onChange("down")}
      />
    </View>
  )
}
