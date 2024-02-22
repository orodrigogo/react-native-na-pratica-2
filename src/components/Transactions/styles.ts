import { StyleSheet } from "react-native"
import { theme } from "@/theme"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 42,
  },
  header: {
    color: theme.colors.white,
    fontFamily: theme.fonts.family.semiBold,
    fontSize: theme.fonts.size.heading.xs,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.gray_400,
    paddingBottom: 12,
  },
  content: {
    paddingVertical: 24,
    gap: 16,
  },
  emptyList: {
    color: theme.colors.gray_300,
    fontFamily: theme.fonts.family.regular,
    fontSize: theme.fonts.size.body.sm,
  },
})
