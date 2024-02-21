import { FlatList, Text, View } from "react-native"

import { styles } from "./styles"

import { Transaction } from "@/components/Transaction"

type Props = {
  onPress?: (id: string) => void
}

export function Transactions({ onPress = () => {} }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Últimas transações</Text>

      <FlatList
        data={[
          {
            id: "1",
            title: "Notebook",
            date: "16/03/2024",
            value: 334.3,
          },
        ]}
        renderItem={({ item }) => (
          <Transaction transaction={item} onPress={() => onPress(item.id)} />
        )}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}
