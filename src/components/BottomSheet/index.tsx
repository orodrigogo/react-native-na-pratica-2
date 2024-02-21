import React, { ReactNode, forwardRef } from "react"
import { Text, View } from "react-native"
import BottomS from "@gorhom/bottom-sheet"

import { styles } from "./styles"
import { MaterialIcons } from "@expo/vector-icons"
import { theme } from "@/theme"

export type Props = {
  onClose: () => void
  children: ReactNode
  snapPoints: number[]
}

export const BottomSheet = forwardRef<BottomS, Props>(
  ({ onClose, children, snapPoints }, ref) => {
    return (
      <BottomS
        ref={ref}
        index={0}
        snapPoints={snapPoints}
        backgroundStyle={styles.container}
        handleComponent={() => null}
      >
        <View style={styles.header}>
          <MaterialIcons
            name="close"
            size={24}
            color={theme.colors.gray_300}
            onPress={onClose}
          />
          <Text style={styles.title}>Comece a criar agora</Text>
        </View>

        <View style={styles.content}>{children}</View>
      </BottomS>
    )
  }
)
