import React, { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { Environment, PerspectiveCamera, OrbitControls } from '@react-three/drei'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Model } from './Model'

gsap.registerPlugin(ScrollTrigger);


function Scene(props) {	
    const cameraRef = useRef(null);
    useFrame(() => {
        // console.log('camera position: ', cameraRef.current.position);
        cameraRef.current.lookAt(0, 0, 0);
    })

    useEffect(() => {
        const updatecamPosition = () => {
            const positions = [
                [0, 0, 10],
                [3.65, 9.51, 0.16],
                [-0.13, 3.19, -9.47],
                [-9.78, 1.77, -1],
                [0, 0, 10],
            ];
            if(props.progress >=  1){
                gsap.to(cameraRef.current.position, {
                    x: 0,
                    y: 0,
                    z: 10,
                    duration: 0.5,
                    ease: 'power1.out',
                });
            } else {

                const segmentProgress = 1 / 4;
                const segmentIndex = Math.floor(props.progress / segmentProgress);
                const percentage = (props.progress % segmentProgress) / segmentProgress;
    
                const [startX, startY, startZ] = positions[segmentIndex];
                const [endX, endY, endZ] = positions[segmentIndex + 1];
    
                const x = startX + (endX-startX) * percentage;
                const y = startY + (endY-startY) * percentage;
                const z = startZ + (endZ-startZ) * percentage;
    
                gsap.to(cameraRef.current.position, {
                    x,
                    y,
                    z,
                    duration: 0.5,
                    ease: 'power1.out',
                });
    
            }          
        };
        updatecamPosition();    
    }, [props.progress, cameraRef.current])
    
  return (
    <>
        <PerspectiveCamera ref={cameraRef} fov={45} near={0.1} far={10000} makeDefault position={[0, 0, 10]} />
        <Environment preset="city" />
        <Model scale={[props.scale,props.scale,props.scale]} position={[props.x,props.y,props.z]} />
        {/* <axesHelper args={[1000]} /> */}
        {/* <OrbitControls /> */}
    </>
  )
}

export default Scene