import React, { ReactNode, forwardRef } from "react"
import { Text, View } from "react-native"
import MaterialIcons from "@expo/vector-icons/MaterialIcons"
import Bottom from "@gorhom/bottom-sheet"

import { theme } from "@/theme"
import { styles } from "./styles"

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
        backgroundStyle={styles.background}
        handleComponent={() => null}
      >
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>

            <MaterialIcons
              name="close"
              size={24}
              color={theme.colors.gray_300}
              onPress={onClose}
            />
          </View>

          {children}
        </View>
      </Bottom>
    )
  }
)
