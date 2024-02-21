import { Text, ColorValue, Pressable, PressableProps } from "react-native"
import MaterialIcons from "@expo/vector-icons/MaterialIcons"

import { styles } from "./styles"

type TransactionTypeProps = {
  title: string
  icon: keyof typeof MaterialIcons.glyphMap
  color: ColorValue
  selected: boolean
}

type Props = PressableProps & {
  type: TransactionTypeProps
}

export function TransactionType({ type, ...rest }: Props) {
  return (
    <Pressable
      style={[styles.container, type.selected && styles.selected]}
      {...rest}
    >
      <MaterialIcons name={type.icon} color={type.color} size={16} />
      <Text style={styles.title}>{type.title}</Text>
    </Pressable>
  )
}
