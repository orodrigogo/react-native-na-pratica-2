import { TextInput, TextInputProps } from "react-native"

import { styles } from "./styles"
import { theme } from "@/theme"

export function Input({ ...rest }: TextInputProps) {
  return (
    <TextInput
      style={styles.input}
      placeholderTextColor={theme.colors.gray_300}
      {...rest}
    />
  )
}
