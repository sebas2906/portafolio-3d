import React, { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import HomeInfo from '../components/HomeInfo'
import Island from "../models/Island";
import Desk from "../models/Desk";
import Sky from "../models/Sky";
import Bird from "../models/Bird";
import Plane from "../models/Plane";

const Home = () => {

  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [isComputerSelected, setComputerSelection] = useState(false);

  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, 0, -5];
    let rotation = [0.4, 0, 0]
    if (window.innerWidth < 768) {
      screenScale = [0.0005, 0.0005, 0.0005];
    } else {
      screenScale = [0.005, 0.005, 0.005];
    }
    return [screenScale, screenPosition, rotation]
  } 

  const adjustDeskForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -3.5, 0];
    let rotation = [0.4, 0, 0]
    if (window.innerWidth < 768) {
      screenScale = [0.3, 0.3, 0.3];
    } else {
      screenScale = [0.3, 0.3, 0.3];
    }
    return [screenScale, screenPosition, rotation]
  }

  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;
    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }
    return [screenScale, screenPosition]
  }

  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
  const [planeScale, planePosition] = adjustPlaneForScreenSize();
  const [deskScale, deskPosition, deskRotation] = adjustDeskForScreenSize();

  return (
    <section className='w-full h-screen relative'>
        <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} isComputerSelected={isComputerSelected} setComputerSelection = {setComputerSelection} setCurrentStage={setCurrentStage}/>}
      </div>
      <Canvas className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`} camera={{ near: 0.1, far: 1000 }} style={{ background: "white" }}>
        <Suspense fallback={<Loader />}>
          <directionalLight position={[0.5, 0.5, 1]} intensity={2} />
          <ambientLight intensity={1} />
          <hemisphereLight skyColor="#b1e1ff" groundColor={"#000000"} intensity={1} />
        {/*   <Bird /> */}
          {/*  <Sky 
            isRotating={isRotating}
          /> */}
          {/* <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage = {setCurrentStage}
          /> */}
          <Desk
            position={deskPosition}
            scale={deskScale}
            rotation={deskRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage = {setCurrentStage}
            setComputerSelection = {setComputerSelection}
          />
         {/*  <Plane
            isRotating={isRotating}
            planeScale={planeScale}
            planePosition={planePosition}
            rotation={[0, 20, 0]}
          /> */}
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home