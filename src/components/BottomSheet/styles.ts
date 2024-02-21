import { theme } from "@/theme"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  background: {
    backgroundColor: theme.colors.gray_700,
    borderWidth: 1,
    borderColor: theme.colors.gray_400,
  },
  content: {
    padding: 32,
    gap: 16,
  },
  header: {
    flexDirection: "row",
  },
  title: {
    flex: 1,
    color: theme.colors.white,
    fontFamily: theme.fonts.family.semiBold,
    fontSize: theme.fonts.size.heading.md,
  },
})
