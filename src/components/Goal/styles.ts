import { StyleSheet } from "react-native"

import { theme } from "@/theme"

export const styles = StyleSheet.create({
  container: {
    width: 148,
    height: 164,
    backgroundColor: theme.colors.gray_500,
    borderRadius: theme.borderRadius.md,
    padding: 16,
  },
  title: {
    color: theme.colors.white,
    fontFamily: theme.fonts.family.bold,
    fontSize: theme.fonts.size.body.md,
    marginBottom: 16,
  },
  current: {
    color: theme.colors.white,
    fontFamily: theme.fonts.family.semiBold,
    fontSize: theme.fonts.size.body.sm,
  },
  goal: {
    color: theme.colors.gray_300,
    fontFamily: theme.fonts.family.regular,
    fontSize: theme.fonts.size.body.sm,
    flex: 1,
  },
})
