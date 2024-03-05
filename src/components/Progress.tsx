import { Text, View } from "react-native"

type Props = {
  percentage: number
}

export function Progress({ percentage }: Props) {
  const width = percentage > 100 ? 100 : percentage
  const value = percentage.toFixed(0) + "%"

  return (
    <View className="w-full h-7 rounded-full bg-gray-400 overflow-hidden flex-row items-center">
      <View
        className="h-7 items-end justify-center rounded-full bg-green-500"
        style={{ width: `${width}%` }}
      >
        {percentage >= 60 && (
          <Text className="text-black text-xs font-semiBold mx-5">{value}</Text>
        )}
      </View>

      {percentage < 60 && (
        <Text className="text-white text-xs font-semiBold mx-5">{value}</Text>
      )}
    </View>
  )
}
