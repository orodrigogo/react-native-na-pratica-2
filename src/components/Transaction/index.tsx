import { Pressable, PressableProps, Text } from "react-native"

import { styles } from "./styles"
import { currencyFormat } from "@/utils/currencyFormat"

export type TransactionProps = {
  date: string
  amount: number
}

type Props = PressableProps & {
  transaction: TransactionProps
}

export function Transaction({ transaction, ...rest }: Props) {
  return (
    <Pressable style={styles.container} {...rest}>
      <Text
        style={[styles.value, transaction.amount < 0 ? styles.down : styles.up]}
      >
        {currencyFormat(transaction.amount)}
      </Text>

      <Text style={styles.date}>{transaction.date}</Text>
    </Pressable>
  )
}
