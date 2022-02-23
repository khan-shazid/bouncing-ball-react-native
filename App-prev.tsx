import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Dimensions } from "react-native";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

import {
  GestureHandlerRootView,
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";

const SIZE = 60;
const CIRCLE_RADIUS = SIZE * 2;
const image = {
  uri: "https://bestanimations.com/media/water/920370318endless-ocean-gif.gif",
};

type ContextType = {
  translateX: number;
  translateY: number;
};
type ContextTypeo = {
  translateoX: number;
  translateoY: number;
};
type ContextTypet = {
  translatetX: number;
  translatetY: number;
};
type ContextTypeth = {
  translatethX: number;
  translatethY: number;
};

export default function App() {
  const [heightToBounce, setHeightToBounce] = useState(0);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const translateoX = useSharedValue(0);
  const translateoY = useSharedValue(0);
  const translatetX = useSharedValue(0);
  const translatetY = useSharedValue(0);
  const translatethX = useSharedValue(0);
  const translatethY = useSharedValue(0);

  const panGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    ContextType
  >({
    onStart: (event, context) => {
      context.translateX = translateX.value;
      context.translateY = translateY.value;
    },
    onActive: (event, context) => {
      translateX.value = event.translationX + context.translateX;
      translateY.value = event.translationY + context.translateY;
      console.log("translateX.value", translateX.value, "translateY.value", translateY.value)
    },
    onEnd: () => {
      const distance = Math.sqrt(translateX.value ** 2 + translateY.value ** 2);
      console.log("on End distance ===>", distance, CIRCLE_RADIUS + SIZE / 2);
      // if (distance > CIRCLE_RADIUS + SIZE / 2) {
        translateX.value = withSpring(0);
        translateY.value = withSpring(0);
      // }
    }
  });
  const panGestureEvent1 = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    ContextTypeo
  >({
    onStart: (event, context) => {
      context.translateoX = translateoX.value;
      context.translateoY = translateoY.value;
    },
    onActive: (event, context) => {
      translateoX.value = event.translationX + context.translateoX;
      translateoY.value = event.translationY + context.translateoY;
      console.log("from event 2", translateoX.value, translateoX.value)
    },
    onEnd: () => {
      const distance = Math.sqrt(
        translateoX.value ** 2 + translateoY.value ** 2
      );

      // if (distance < CIRCLE_RADIUS + SIZE / 2) {
        translateoX.value = withSpring(0);
        translateoY.value = withSpring(0);
      // }
    }
  });
  const panGestureEvent2 = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    ContextTypet
  >({
    onStart: (event, context) => {
      context.translatetX = translatetX.value;
      context.translatetY = translatetY.value;
    },
    onActive: (event, context) => {
      translatetX.value = event.translationX + context.translatetX;
      translatetY.value = event.translationY + context.translatetY;
    },
    onEnd: () => {
      const distance = Math.sqrt(
        translatetX.value ** 2 + translatetY.value ** 2
      );

      // if (distance < CIRCLE_RADIUS + SIZE / 2) {
        translatetX.value = withSpring(0);
        translatetY.value = withSpring(0);
      // }
    },
  });
  const panGestureEvent3 = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    ContextTypeth
  >({
    onStart: (event, context) => {
      context.translatethX = translatethX.value;
      context.translatethY = translatethY.value;
    },
    onActive: (event, context) => {
      translatethX.value = event.translationX + context.translatethX;
      translatethY.value = event.translationY + context.translatethY;
    },
    onEnd: () => {
      const distance = Math.sqrt(
        translatethX.value ** 2 + translatethY.value ** 2
      );

      // if (distance > CIRCLE_RADIUS + SIZE / 2) {
        translatethX.value = withSpring(0);
        translatethY.value = withSpring(0);
      // }
    },
  });

  const cStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
        {
          translateY: translateY.value,
        },
      ],
    };
  });
  const cStyle1 = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateoX.value,
        },
        {
          translateY: translateoY.value,
        },
      ],
    };
  });
  const cStyle2 = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translatetX.value,
        },
        {
          translateY: translatetY.value,
        },
      ],
    };
  });
  const cStyle3 = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translatethX.value,
        },
        {
          translateY: translatethY.value,
        },
      ],
    };
  });

  const onLayout = (e) => {
    const {x, y, height, width} = e.nativeEvent.layout;
    setHeightToBounce((150 + (SIZE * 2.5)) - Dimensions.get('window').height);
  }

  const onPressHandler = (index) => {
      switch (index) {
        case 0:
          translateX.value = withSpring(0);
          translateY.value = withSpring(heightToBounce);
          setTimeout(() => {
            translateY.value = withSpring(0);
          }, 500);
          break;
        case 1:
          translateoX.value = withSpring(0);
          translateoY.value = withSpring(heightToBounce);
          setTimeout(() => {
            translateoY.value = withSpring(0);
          }, 500);
          break;
        case 2:
          translatetX.value = withSpring(0);
          translatetY.value = withSpring(heightToBounce);
          setTimeout(() => {
            translatetY.value = withSpring(0);
          }, 500);
          break;
        case 3:
          translatethX.value = withSpring(0);
          translatethY.value = withSpring(heightToBounce);
          setTimeout(() => {
            translatethY.value = withSpring(0);
          }, 500);
          break;
        default:
          break;
      }
  }

  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <GestureHandlerRootView style={{ flex: 1, marginTop: "60%", justifyContent: 'flex-end' }}>
        <View style={styles.container}>
          <TouchableOpacity style={{borderRadius: 30}} onLayout={onLayout} onPress={() => onPressHandler(0)}>
            <PanGestureHandler onGestureEvent={panGestureEvent}>
              <Animated.View style={[styles.circle, cStyle]} onPress={() => onPressHandler(0)}/>
            </PanGestureHandler>
          </TouchableOpacity>
          <TouchableOpacity style={{borderRadius: 30}} onPress={() => onPressHandler(1)}>
            <PanGestureHandler onGestureEvent={panGestureEvent1}>
              <Animated.View style={[styles.circle1, cStyle1]} />
            </PanGestureHandler>
          </TouchableOpacity>
          <TouchableOpacity style={{borderRadius: 30}} onPress={() => onPressHandler(2)}>
            <PanGestureHandler onGestureEvent={panGestureEvent2}>
              <Animated.View style={[styles.circle2, cStyle2]} />
            </PanGestureHandler>
          </TouchableOpacity>
          <TouchableOpacity style={{borderRadius: 30}} onPress={() => onPressHandler(3)}>
            <PanGestureHandler onGestureEvent={panGestureEvent3}>
              <Animated.View style={[styles.circle3, cStyle3]} />
            </PanGestureHandler>
          </TouchableOpacity>
        </View>
      </GestureHandlerRootView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    // marginTop: "100%",
    marginBottom: 150,
  },
  circle: {
    width: SIZE,
    height: SIZE,
    backgroundColor: "red",
    borderRadius: 30,
  },
  circle1: {
    width: SIZE,
    height: SIZE,
    backgroundColor: "#fff",
    borderRadius: 30,
  },
  circle2: {
    width: SIZE,
    height: SIZE,
    backgroundColor: "orange",
    borderRadius: 30,
  },
  circle3: {
    width: SIZE,
    height: SIZE,
    backgroundColor: "green",
    borderRadius: 30,
  },
  image: {
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
});
