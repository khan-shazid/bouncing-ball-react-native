import { StatusBar } from "expo-status-bar";
import React, { useState, useRef, useEffect } from "react";
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

import Matter from "matter-js";
import { GameEngine } from "react-native-game-engine";

import entities from "./entities";
import Physics from "./physics";

const SIZE = 60;
const CIRCLE_RADIUS = SIZE * 2;
const image = {
  uri: "https://bestanimations.com/media/water/920370318endless-ocean-gif.gif",
};


export default function App() {
  const [running, setRunning] = useState(false);
  const gameEngineRef = useRef(null)

  useEffect(() => {
      setRunning(true)
  }, []);

  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <GameEngine
          ref={gameEngineRef}
          style={styles.gameContainer}
          systems={[Physics]}
          // running={running}
          // onEvent={this.onEvent}
          entities={entities(gameEngineRef)}>
      </GameEngine>
      <StatusBar hidden={true} />
    </ImageBackground>
  )
}


const styles = StyleSheet.create({
  gameContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  image: {
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
});
