
import React, { Component } from "react";
import { View, Image } from "react-native";

export default function Floor ({x, y, width, height}) {
    return (
      <View
          style={{
              position: "absolute",
              left: x,
              top: y,
              width: width,
              height: height,
              overflow: 'hidden',
              flexDirection: 'row',
              backgroundColor: '#fff'
          }}>

      </View>
    )
}
