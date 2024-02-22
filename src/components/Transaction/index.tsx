import { Pressable, PressableProps, Text } from "react-native"

import { styles } from "./styles"
import { currencyFormat } from "@/utils/currencyFormat"

export type TransactionProps = {
  created_at: string
  amount: number
}

type Props = PressableProps & {
  transaction: TransactionProps
}

export function Transaction({ transaction, ...rest }: Props) {
  return (
    <Pressable style={styles.container} {...rest}>
      <Text style={[styles.value, styles.up]}>
        {currencyFormat(transaction.amount)}
      </Text>

      <Text style={styles.date}>{transaction.created_at}</Text>
    </Pressable>
  )
}
