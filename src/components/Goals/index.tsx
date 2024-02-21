import { ScrollView, TouchableOpacity } from "react-native"
import MaterialIcons from "@expo/vector-icons/MaterialIcons"

import { theme } from "@/theme"
import { styles } from "./styles"

import { Goal } from "@/components/Goal"

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
      contentContainerStyle={styles.content}
      showsHorizontalScrollIndicator={false}
      style={styles.list}
    >
      <TouchableOpacity activeOpacity={0.7} style={styles.add} onPress={onAdd}>
        <MaterialIcons name="add" size={36} color={theme.colors.black} />
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
