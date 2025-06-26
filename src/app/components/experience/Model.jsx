import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/models/nike_adapt.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fabric_Big.geometry}
        material={materials.Fabric_Big}
        position={[0.048, 0.079, 0.004]}
        rotation={[0, -0.087, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SOLE_LED.geometry}
        material={materials.SOLE_LED}
        position={[-0.002, 0.013, 0.042]}
        rotation={[0, -0.087, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BACK_Lether.geometry}
        material={materials.BACK_Lether}
        position={[-0.061, 0.093, -0.007]}
        rotation={[0, -0.087, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BACK_Fabric.geometry}
        material={materials.BACK_Fabric}
        position={[-0.065, 0.086, -0.007]}
        rotation={[0, -0.087, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fabric_Top.geometry}
        material={materials.Fabric_Top}
        position={[0.017, 0.126, 0]}
        rotation={[0, -0.087, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fabric_Stripe.geometry}
        material={materials.Fabric_Stripe}
        position={[-0.043, 0.096, -0.005]}
        rotation={[0, -0.087, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SOLE_BOTTOM.geometry}
        material={materials.SOLE_BOTTOM}
        position={[0.021, 0.027, 0.004]}
        rotation={[0, -0.087, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fabric_Logo.geometry}
        material={materials.Fabric_Logo}
        position={[0.019, 0.045, 0.002]}
        rotation={[0, -0.087, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fabric_Inner.geometry}
        material={materials['BACK_Fabric.1']}
        position={[0.021, 0.065, 0.005]}
        rotation={[0, -0.087, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tongue_Inner.geometry}
        material={materials['BACK_Fabric.2']}
        position={[0.011, 0.102, 0.001]}
        rotation={[0, -0.087, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tongue_Outher.geometry}
        material={materials.Tongue_Outher}
        position={[0.012, 0.104, 0.002]}
        rotation={[0, -0.087, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SOLE_HOLES.geometry}
        material={materials.SOLE_BACK}
        position={[-0.002, 0.013, 0.043]}
        rotation={[0, -0.087, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SOLE_WHITE.geometry}
        material={materials.SOLE_WHITE}
        position={[0.018, 0.03, 0.006]}
        rotation={[0, -0.087, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SOLE_INNER.geometry}
        material={materials.SOLE_INNER}
        position={[0.02, 0.027, 0.004]}
        rotation={[0, -0.087, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BUTTON_1.geometry}
        material={materials.BUTTON}
        position={[0.006, 0.013, 0.045]}
        rotation={[0, -0.087, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BUTTON_2.geometry}
        material={materials['BUTTON.1']}
        position={[-0.01, 0.013, 0.041]}
        rotation={[0, -0.087, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fabric_Between.geometry}
        material={materials.Fabric_Between}
        position={[0.049, 0.078, 0.004]}
        rotation={[0, -0.087, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SOLE_BACK.geometry}
        material={materials['SOLE_BACK.1']}
        position={[-0.098, 0.055, -0.01]}
        rotation={[0, -0.087, 0]}
        scale={0.01}
      />
    </group>
  )
}

useGLTF.preload('/models/nike_adapt.glb')

