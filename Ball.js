import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

export default function Ball({}) {
    <View style={{borderRadius: 30}}>
        <Animated.View style={{
          width: 80,
          height: 80,
          backgroundColor: "red",
          borderRadius: 30,
        }} />
    </View>
}
