import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native"

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
    <TouchableOpacity
      className="h-44 w-40 bg-gray-500 rounded-lg p-4"
      activeOpacity={0.7}
      {...rest}
    >
      <Text className="text-white font-bold text-lg mb-3">{goal.name}</Text>

      <Text className="text-white font-semiBold text-sm">
        {currencyFormat(goal.current)}
      </Text>

      <Text className="text-gray-300 font-regular text-sm flex-1">
        {currencyFormat(goal.total)}
      </Text>

      <Progress percentage={percentage} />
    </TouchableOpacity>
  )
}
