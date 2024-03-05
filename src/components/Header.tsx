import { View, Text } from "react-native"

type Props = {
  title: string
  subtitle: string
}

export function Header({ title, subtitle }: Props) {
  return (
    <View className="mt-14 mb-12">
      <Text className="text-white font-bold text-4xl">{title}</Text>
      <Text className="text-white font-regular text-lg">{subtitle}</Text>
    </View>
  )
}
