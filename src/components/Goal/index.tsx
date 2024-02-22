import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native"

import { styles } from "./styles"
import { Progress } from "@/components/Progress"
import { currencyFormat } from "@/utils/currencyFormat"

export type GoalProps = {
  name: string
  current: number
  total: number
}

type Props = TouchableOpacityProps & {
  goal: GoalProps
}

export function Goal({ goal, ...rest }: Props) {
  const percentage = (goal.current / goal.total) * 100

  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7} {...rest}>
      <Text style={styles.name}>{goal.name}</Text>
      <Text style={styles.current}>{currencyFormat(goal.current)}</Text>
      <Text style={styles.goal}>{currencyFormat(goal.total)}</Text>

      <Progress percentage={percentage} />
    </TouchableOpacity>
  )
}
