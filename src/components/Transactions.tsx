import { FlatList, Text, View } from "react-native"

import { Transaction, TransactionProps } from "@/components/Transaction"

export type TransactionsProps = TransactionProps[]

type Props = {
  transactions: TransactionsProps
}

export function Transactions({ transactions }: Props) {
  return (
    <View className="flex-1 mt-10">
      <Text className="text-white font-semiBold text-base border-b border-b-gray-400 pb-3">
        Últimas transações
      </Text>

      <FlatList
        data={transactions}
        renderItem={({ item }) => <Transaction transaction={item} />}
        contentContainerClassName="py-6 gap-4"
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text className="text-gray-300 font-regular text-sm">
            Nenhuma transação registrada ainda.
          </Text>
        )}
      />
    </View>
  )
}
