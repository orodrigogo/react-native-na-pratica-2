import { StyleSheet } from "react-native"

import { theme } from "@/theme"

export const styles = StyleSheet.create({
  container: {
    marginTop: 52,
    marginBottom: 44,
  },
  title: {
    color: theme.colors.white,
    fontFamily: theme.fonts.family.bold,
    fontSize: theme.fonts.size.heading.xl,
  },
  subtitle: {
    color: theme.colors.white,
    fontFamily: theme.fonts.family.regular,
    fontSize: theme.fonts.size.body.md,
  },
})
