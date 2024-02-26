import React, { ReactNode, forwardRef } from "react"
import { Text, View } from "react-native"
import Bottom from "@gorhom/bottom-sheet"
import MaterialIcons from "@expo/vector-icons/MaterialIcons"

import { colors } from "@/styles/colors"

export type Props = {
  onClose: () => void
  title: string
  children: ReactNode
  snapPoints: number[]
}

export const BottomSheet = forwardRef<Bottom, Props>(
  ({ onClose, children, snapPoints, title }, ref) => {
    return (
      <Bottom
        ref={ref}
        index={0}
        snapPoints={snapPoints}
        backgroundStyle={{
          borderWidth: 1,
          borderColor: colors.gray[400],
          backgroundColor: colors.gray[700],
        }}
        handleComponent={() => null}
      >
        <View className="p-8 gap-4">
          <View className="flex-row">
            <Text className="flex-1 text-white font-semiBold text-base">
              {title}
            </Text>

            <MaterialIcons
              name="close"
              size={24}
              color={colors.gray[300]}
              onPress={onClose}
            />
          </View>

          {children}
        </View>
      </Bottom>
    )
  }
)
