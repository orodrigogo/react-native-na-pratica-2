import { StyleSheet } from "react-native"
import { theme } from "@/theme"

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 6,

    backgroundColor: theme.colors.gray_400,
    borderRadius: theme.borderRadius.sm,

    flexDirection: "row",
    alignItems: "center",
    gap: 7,
    opacity: 0.5,
  },
  title: {
    color: theme.colors.white,
    fontSize: theme.fonts.size.body.sm,
    fontFamily: theme.fonts.family.semiBold,
  },
  selected: {
    opacity: 1,
  },
})
