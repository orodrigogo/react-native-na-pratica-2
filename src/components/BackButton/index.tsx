import { Link } from "expo-router"
import MaterialIcons from "@expo/vector-icons/MaterialIcons"

import { theme } from "@/theme"

export function BackButton() {
  return (
    <Link asChild href="/">
      <MaterialIcons name="arrow-back" size={36} color={theme.colors.white} />
    </Link>
  )
}
