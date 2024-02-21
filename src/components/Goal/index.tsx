import { Text, View } from "react-native"

import { styles } from "./styles"
import { Progress } from "@/components/Progress"
import { currencyFormat } from "@/utils/currencyFormat"

type GoalProps = {
  title: string
  current: number
  total: number
}

type Props = {
  goal: GoalProps
}

export function Goal({ goal }: Props) {
  const percentage = (goal.current / goal.total) * 100

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{goal.title}</Text>
      <Text style={styles.current}>{currencyFormat(goal.current)}</Text>
      <Text style={styles.goal}>{currencyFormat(goal.total)}</Text>

      <Progress percentage={percentage} />
    </View>
  )
}
