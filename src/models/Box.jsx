import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Box() {
  // Reference for the mesh
  const meshRef = useRef();

  // Animate the box rotation
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  // Define an array of hex colors for the box sides (light theme)
  const colors = [
    "#FFCDD2", // Light red
    "#F8BBD0", // Light pink
    "#BBDEFB", // Light blue
    "#C8E6C9", // Light green
    "#FFF9C4", // Light yellow
    "#D1C4E9" // Light purple
  ];

  // Create materials for each side of the box
  const materials = colors.map(
    (color) => new THREE.MeshStandardMaterial({ color })
  );

  return (
    <mesh ref={meshRef}>
      {/* Box geometry */}
      <boxGeometry args={[1, 1, 1]} />

      {/* Apply materials to each side */}
      {materials.map((material, index) => (
        <meshStandardMaterial
          attach={`material-${index}`}
          key={index}
          {...material}
        />
      ))}
    </mesh>
  );
}
