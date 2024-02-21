import { theme } from "@/theme"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  list: {
    width: "100%",
    maxHeight: 164,
    marginBottom: 42,
  },
  add: {
    backgroundColor: theme.colors.green_500,
    width: 64,
    height: 164,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: theme.borderRadius.md,
  },
  content: {
    gap: 16,
  },
})
