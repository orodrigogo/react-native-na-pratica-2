import { FlatList, Text, View } from "react-native"

import { styles } from "./styles"

import { Transaction } from "@/components/Transaction"

export function Transactions() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Últimas transações</Text>

      <FlatList
        data={[
          {
            title: "Notebook",
            date: "16/03/2024",
            value: 334.3,
          },
        ]}
        renderItem={({ item }) => <Transaction transaction={item} />}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}
