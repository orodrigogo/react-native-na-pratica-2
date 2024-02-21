import React, { ReactNode, forwardRef } from "react"
import { Text, View } from "react-native"
import BottomS from "@gorhom/bottom-sheet"

import { styles } from "./styles"
import { MaterialIcons } from "@expo/vector-icons"
import { theme } from "@/theme"

export type Props = {
  onClose: () => void
  title: string
  children: ReactNode
  snapPoints: number[]
}

export const BottomSheet = forwardRef<BottomS, Props>(
  ({ onClose, children, snapPoints, title }, ref) => {
    return (
      <BottomS
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
      </BottomS>
    )
  }
)
