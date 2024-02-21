import { Text, View } from "react-native"

import { styles } from "./styles"
import { currencyFormat } from "@/utils/currencyFormat"

type TransactionProps = {
  title: string
  date: string
  value: number
}

type Props = {
  transaction: TransactionProps
}

export function Transaction({ transaction }: Props) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{transaction.title}</Text>
        <Text style={styles.date}>{transaction.date}</Text>
      </View>

      <Text style={[styles.value, styles.up]}>
        {currencyFormat(transaction.value)}
      </Text>
    </View>
  )
}
