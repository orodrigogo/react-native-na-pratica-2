import { StyleSheet } from "react-native"
import { theme } from "@/theme"

export const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: 48,
    borderWidth: 1,
    borderColor: theme.colors.gray_400,
    borderRadius: theme.borderRadius.sm,
    padding: 16,
    color: theme.colors.white,
    fontFamily: theme.fonts.family.regular,
    fontSize: theme.fonts.size.body.md,
  },
})
