import { TextInput, TextInputProps } from "react-native"

import { colors } from "@/styles/colors"

export function Input({ ...rest }: TextInputProps) {
  return (
    <TextInput
      placeholderTextColor={colors.gray[300]}
      className="w-full h-14 border border-gray-400 rounded p-4 text-white font-regular text-base"
      {...rest}
    />
  )
}
