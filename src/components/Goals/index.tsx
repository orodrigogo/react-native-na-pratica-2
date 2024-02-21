import { ScrollView, TouchableOpacity } from "react-native"

import { theme } from "@/theme"
import { styles } from "./styles"

import { Goal } from "@/components/Goal"
import { MaterialIcons } from "@expo/vector-icons"

export function Goals() {
  return (
    <ScrollView
      horizontal
      contentContainerStyle={styles.content}
      showsHorizontalScrollIndicator={false}
      style={styles.list}
    >
      <TouchableOpacity activeOpacity={0.7} style={styles.add}>
        <MaterialIcons name="add" size={36} color={theme.colors.black} />
      </TouchableOpacity>

      <Goal goal={{ title: "Notebook", current: 70, total: 100 }} />
      <Goal goal={{ title: "Notebook", current: 70, total: 100 }} />
      <Goal goal={{ title: "Notebook", current: 70, total: 100 }} />
    </ScrollView>
  )
}
