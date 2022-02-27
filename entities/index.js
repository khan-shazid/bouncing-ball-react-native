
import Matter from "matter-js"
import Circle from "../components/Circle";
import Floor from "../components/Floor";

import { Dimensions } from 'react-native'
// import { getPipeSizePosPair } from "../utils/random";

const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width


export default gameEngineRef => {
    let engine = Matter.Engine.create({
      enableSleeping: false
    })

    engine.positionIterations = 1000;
    engine.velocityIterations = 1000;
    engine.constraintIterations = 1000;

    let world = engine.world;

    world.gravity.y = 0;

    const CIRCLE_RADIUS = 20;
    const WALL_DEPTH = 10;
    const WALL_COLOR = 'transparent';

    return {
        physics: { engine, world },
        Circle1: Circle(world, gameEngineRef, 'green', { x: 10, y: windowHeight - 150 }, { radius: CIRCLE_RADIUS }, 'Circle1'),
        Circle2: Circle(world, gameEngineRef, 'red', { x: 80, y: windowHeight - 150 }, { radius: CIRCLE_RADIUS }, 'Circle2'),
        Circle3: Circle(world, gameEngineRef, 'yellow', { x: 150, y: windowHeight - 150 }, { radius: CIRCLE_RADIUS }, 'Circle3'),
        Circle4: Circle(world, gameEngineRef, 'blue', { x: 240, y: windowHeight - 150 }, { radius: CIRCLE_RADIUS }, 'Circle4'),
        Floor: Floor(world, WALL_COLOR, { x: windowWidth / 2, y: windowHeight }, { height: WALL_DEPTH, width: windowWidth }),
        Ceiling: Floor(world, WALL_COLOR, { x: windowWidth / 2, y: 0 }, { height: WALL_DEPTH, width: windowWidth }),
        leftBar: Floor(world, WALL_COLOR, { x: 0, y: windowHeight / 2 }, { height: windowHeight, width: WALL_DEPTH }),
        rightBar: Floor(world, WALL_COLOR, { x: windowWidth, y: windowHeight / 2 }, { height: windowHeight, width: WALL_DEPTH }),
    }
}
