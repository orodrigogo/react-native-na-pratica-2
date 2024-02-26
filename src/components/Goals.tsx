import { ScrollView, TouchableOpacity } from "react-native"
import MaterialIcons from "@expo/vector-icons/MaterialIcons"

import { Goal } from "@/components/Goal"
import { colors } from "@/styles/colors"

export type GoalsProps = {
  id: string
  name: string
  current: number
  total: number
}[]

type Props = {
  goals: GoalsProps
  onPress: (id: string) => void
  onAdd: () => void
}

export function Goals({ goals, onAdd, onPress }: Props) {
  return (
    <ScrollView
      horizontal
      contentContainerClassName="gap-4"
      showsHorizontalScrollIndicator={false}
      className="w-full max-h-44"
    >
      <TouchableOpacity
        activeOpacity={0.7}
        className="bg-green-500 w-16 max-h-44 items-center justify-center rounded-lg"
        onPress={onAdd}
      >
        <MaterialIcons name="add" size={36} color={colors.black} />
      </TouchableOpacity>

      {goals.map(({ id, name, current, total }) => (
        <Goal
          key={id}
          goal={{ name, current, total }}
          onPress={() => onPress(id)}
        />
      ))}
    </ScrollView>
  )
}
