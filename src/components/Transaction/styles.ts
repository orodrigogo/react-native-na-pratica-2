import { theme } from "@/theme"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 64,
    backgroundColor: theme.colors.gray_500,
    borderRadius: theme.borderRadius.sm,
    borderWidth: 1,
    borderColor: theme.colors.gray_400,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  name: {
    color: theme.colors.white,
    fontFamily: theme.fonts.family.bold,
    fontSize: theme.fonts.size.body.md,
  },
  date: {
    color: theme.colors.gray_300,
    fontFamily: theme.fonts.family.regular,
    fontSize: theme.fonts.size.body.xs,
  },
  value: {
    fontFamily: theme.fonts.family.regular,
    fontSize: theme.fonts.size.body.sm,
  },
  up: {
    color: theme.colors.green_500,
  },
  down: {
    color: theme.colors.red_500,
  },
})
