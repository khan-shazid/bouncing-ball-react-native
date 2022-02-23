import Matter from "matter-js";
import { Platform } from 'react-native';

const Physics = (entities, {touches, time, dispatch, events}) => {
  let engine = entities.physics.engine;
  if (events.length) {
    events.forEach((e) => {
      if (e.type === 'on-end-gesture') {
        let { payload } = e;
        let { circleId, nativeEvent } = payload;
        let circleEntity = entities[circleId].body;
        let { velocityX, velocityY } = nativeEvent;

        let x = 0;
        let y = 0;

        let velocity = Platform.os === 'ios' ? 0.04 : 0.01;

        if (velocityX < 0) x = -1 * velocity;
        else if (velocityX > 0) x = velocity;
        if (velocityY < 0) y = -1 * velocity;
        else if (velocityY > 0) y = velocity;

        Matter.Body.applyForce( circleEntity, {x: circleEntity.position.x, y: circleEntity.position.y}, {x, y});
      }
    });

  }
  touches.filter(t => t.type === 'press').forEach(t => {
    // Matter.Body.setVelocity(entities.Circle1.body, {
    //   x: 0,
    //   y: -8
    // })
  });

  touches.filter(t => t.type === 'move').forEach(t => {
    // Matter.Body.setVelocity(entities.Circle1.body, {
    //   x: 0,
    //   y: -8
    // })
  });

  Matter.Engine.update(engine, time.delta);

  return entities;

}

export default Physics;
