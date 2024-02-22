import { FlatList, Text, View } from "react-native"

import { styles } from "./styles"

import { Transaction, TransactionProps } from "@/components/Transaction"

export type TransactionsProps = TransactionProps[]

type Props = {
  transactions: TransactionsProps
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
        ListEmptyComponent={() => (
          <Text style={styles.emptyList}>
            Nenhuma transação registrada ainda.
          </Text>
        )}
      />
    </View>
  )
}
