import { StyleSheet } from "react-native"
import { theme } from "@/theme"

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 24,
    borderRadius: theme.borderRadius.full,
    backgroundColor: theme.colors.gray_400,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
  },
  bar: {
    height: 24,
    alignItems: "flex-end",
    justifyContent: "center",
    borderRadius: theme.borderRadius.full,
    backgroundColor: theme.colors.green_500,
  },
  percentage: {
    fontSize: theme.fonts.size.body.xs,
    fontFamily: theme.fonts.family.semiBold,
    marginHorizontal: 5,
  },
})
