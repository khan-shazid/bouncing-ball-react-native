
import Matter from "matter-js"
import Circle from "../components/Circle";
import Floor from "../components/Floor";
// import Obstacle from "../components/Obstacle";

import { Dimensions } from 'react-native'
// import { getPipeSizePosPair } from "../utils/random";

const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width


export default gameEngineRef => {
    let engine = Matter.Engine.create({ enableSleeping: false })

    let world = engine.world

    world.gravity.y = 0;

    return {
        physics: { engine, world },
        Circle1: Circle(world, gameEngineRef, 'green', { x: 10, y: windowHeight - 150 }, { radius: 20 }, 'Circle1'),
        Circle2: Circle(world, gameEngineRef, 'red', { x: 80, y: windowHeight - 150 }, { radius: 20 }, 'Circle2'),
        Circle3: Circle(world, gameEngineRef, 'yellow', { x: 150, y: windowHeight - 150 }, { radius: 20 }, 'Circle3'),
        Circle4: Circle(world, gameEngineRef, 'blue', { x: 240, y: windowHeight - 150 }, { radius: 20 }, 'Circle4'),
        Floor: Floor(world, 'green', { x: windowWidth / 2, y: windowHeight }, { height: 60, width: windowWidth }),
        Ceiling: Floor(world, 'green', { x: windowWidth / 2, y: 0 }, { height: 60, width: windowWidth }),
        leftBar: Floor(world, 'green', { x: 0, y: windowHeight / 2 }, { height: windowHeight, width: 10 }),
        rightBar: Floor(world, 'green', { x: windowWidth, y: windowHeight / 2 }, { height: windowHeight, width: 10 }),
    }
}
