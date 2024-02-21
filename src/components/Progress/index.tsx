import { Text, View } from "react-native"

import { theme } from "@/theme"
import { styles } from "./styles"

type Props = {
  percentage: number
}

export function Progress({ percentage }: Props) {
  const value = percentage.toFixed(0) + "%"

  return (
    <View style={styles.container}>
      <View style={[styles.bar, { width: `${percentage}%` }]}>
        {percentage > 30 && (
          <Text style={[styles.percentage, { color: theme.colors.black }]}>
            {value}
          </Text>
        )}
      </View>

      {percentage <= 30 && (
        <Text style={[styles.percentage, { color: theme.colors.white }]}>
          {value}
        </Text>
      )}
    </View>
  )
}
