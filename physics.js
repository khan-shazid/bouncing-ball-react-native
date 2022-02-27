import Matter, {Vector} from "matter-js";
import { Platform } from 'react-native';

const Physics = (entities, {touches, time, dispatch, events}) => {
    // console.log("initial position", entities['Circle1'].body.position)
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

                let velocity = 6;

                if (velocityX < 0) x = -1 * velocity;
                else if (velocityX > 0) x = velocity;
                if (velocityY < 0) y = -1 * velocity;
                else if (velocityY > 0) y = velocity;

                console.log("circle position", circleEntity.position)
                console.log("circle position", circleEntity.bounds)

                // Matter.Body.set(entities[circleId], "position", {x: circleEntity.position.x, y: circleEntity.position.y})

                // Matter.Body.setVelocity(circleEntity, { x, y })

                let circleEntity1 = entities['Circle1'].body;
                let circleEntity2 = entities['Circle2'].body;

                let circle1 = caclulateCicleCenter(circleEntity1);
                let circle2 = caclulateCicleCenter(circleEntity2);
                
                if (circleIntersect(circle1.x, circle1.y, circle1.radius, circle2.x, circle2.y, circle2.radius)) {
                    console.log("collided from circleIntersect")
                }
            }
        });

    }

    // let circleEntity1 = entities['Circle1'].body;
    // let circleEntity2 = entities['Circle2'].body;

    //caculate center 
    // let circle1 = caclulateCicleCenter(circleEntity1);
    // let circle2 = caclulateCicleCenter(circleEntity2);
    
    // if (circleIntersect(circle1.x, circle1.y, circle1.radius, circle2.x, circle2.y, circle2.radius)) {
    //     console.log("collided from circleIntersect")
    // }


    // if (Matter.Collision.collides(circleEntity1, circleEntity2)) {
        // console.log("circles collided 1 and 2", Matter.Collision.collides(circleEntity1, circleEntity2));
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

const caclulateCicleCenter = (circleEntity) => {
    let x = circleEntity.position.x;
    let y = circleEntity.position.y;
    return ({
      x, y, radius: 20
    })
}

const circleIntersect = (x1, y1, r1, x2, y2, r2) => {

  // Calculate the distance between the two circles
  let squareDistance = (x1-x2)*(x1-x2) + (y1-y2)*(y1-y2);
  console.log("squareDistance", squareDistance, ((r1 + r2) * (r1 + r2)))
  // When the distance is smaller or equal to the sum
  // of the two radius, the circles touch or overlap
  return squareDistance <= ((r1 + r2) * (r1 + r2))
}

export default Physics;
