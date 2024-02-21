import { FlatList, Text, View } from "react-native"

import { styles } from "./styles"

import { Transaction } from "@/components/Transaction"

type Props = {
  transactions: any
}

export function Transactions({ transactions }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Últimas transações</Text>

      <FlatList
        data={transactions}
        renderItem={({ item }) => <Transaction transaction={item} />}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}
