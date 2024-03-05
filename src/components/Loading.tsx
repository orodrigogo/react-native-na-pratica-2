import { ActivityIndicator } from "react-native"

import { colors } from "@/styles/colors"

export function Loading() {
  return (
    <ActivityIndicator
      className="flex-1 items-center justify-center bg-gray-600"
      color={colors.green[500]}
    />
  )
}
