import React from "react";
import { View, TouchableOpacity } from "react-native";
import Matter from "matter-js";

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

const Circle = props => {
    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);
    const { engine, circleId } = props;

    const panGestureEvent = useAnimatedGestureHandler({
      onStart: (event, context) => {
        context.translateX = translateX.value;
        context.translateY = translateY.value;
      },
      onActive: (event, context) => {
        translateX.value = event.translationX + context.translateX;
        translateY.value = event.translationY + context.translateY;
      },
      onEnd: (event, context) => {
      }
    });

    const _onHandlerStateChange = (evt) => {
      let { nativeEvent } = evt;
      if (nativeEvent.state === 5) {
        engine.current.dispatch({type: 'on-end-gesture', payload: {nativeEvent, circleId}})
      }
    }

    const widthBody = props.body.bounds.max.x - props.body.bounds.min.x
    const heightBody = props.body.bounds.max.y - props.body.bounds.min.y

    const xBody = props.body.position.x - widthBody /2
    const yBody = props.body.position.y - heightBody /2

    const color = props.color;
    const animatedStyle = useAnimatedStyle(() => {
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
    return (
      <GestureHandlerRootView>
        <PanGestureHandler onHandlerStateChange={_onHandlerStateChange} onGestureEvent={panGestureEvent}>
          <Animated.View style={[{
              borderWidth: 1,
              borderColor: color,
              borderStyle: 'solid',
              position: 'absolute',
              left: xBody,
              top: yBody,
              width: widthBody,
              height: heightBody,
              borderRadius: 20,
              backgroundColor: color,
          }, animatedStyle]}/>
        </PanGestureHandler>
      </GestureHandlerRootView>
    );
}

export default (world, engine, color, pos, size, circleId) => {
   const initialCircle = Matter.Bodies.circle(
       pos.x,
       pos.y,
       size.radius,
       {
           label: 'Circle',
           inertia: 0,
           friction: 0,
           frictionStatic: 1,
           frictionAir: 0,
           restitution: .8,
           inertia: Number.POSITIVE_INFINITY,
       }
   )
   // initialCircle.friction = .8;
   // initialCircle.frictionAir = 0.001;
   // initialCircle.restitution = .8;
   // initialCircle.density = 1000;

   Matter.World.add(world, initialCircle)

   return {
       engine,
       body: initialCircle,
       color,
       pos,
       circleId,
       renderer: <Circle/>
   }
}
