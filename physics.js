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

                let velocity = 8;
                // let velocity = Platform.os === 'ios' ? 0.06 : 0.02;

                if (velocityX < 0) x = -1 * velocity;
                else if (velocityX > 0) x = velocity;
                if (velocityY < 0) y = -1 * velocity;
                else if (velocityY > 0) y = velocity;

                console.log("circle position", circleEntity.position)
                console.log("circle position", circleEntity.bounds)
                // console.log("floor position", entities.Floor.body.position)
                // console.log("ceiling position", entities.Ceiling.body.position)

                Matter.Body.setVelocity(circleEntity, { x, y })
                // Matter.Body.applyForce( circleEntity, {x: circleEntity.position.x, y: circleEntity.position.y}, {x, y});
            }
        });

    }

    // if (Matter.SAT.collides(entities.Circle1.body, entities.Floor.body)) {
    //     console.log("collided with floor")
    //     console.log("circle position", entities.Circle1.body.position)
    //     console.log("floor position", entities.Floor.body.position)
    // }

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
