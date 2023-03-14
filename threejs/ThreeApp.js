import React, { useRef, useEffect } from "react";
import * as THREE from "three";

function BinaryNetworkSimulator() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  // Store the state of whether the command key is being held down
  const [commandDown, setCommandDown] = React.useState(false);

  useEffect(() => {
    // Create a WebGL renderer and add it to the DOM
    const container = containerRef.current;
    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setClearColor(0x000000, 1);

    // Create a camera and a scene
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Create a scene
    const scene = new THREE.Scene();

    // Add a mesh for a white, 3D circle
    const geometry = new THREE.CircleGeometry(1, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Resize the canvas to fill browser window dynamically
    function onWindowResize() {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    }

    // Add the resize listener
    window.addEventListener("resize", onWindowResize);

    // Pain and zoom based on mouse wheel events
    function onMouseWheel(event) {
      // If the command key is being held down, zoom
      if (commandDown) {
        camera.position.z += event.deltaY * 0.01;
        return;
      }

      // Otherwise, pan
      camera.position.x += event.deltaX * 0.01;
      camera.position.y -= event.deltaY * 0.01;
    }

    // Add the mouse wheel listener
    canvas.addEventListener("wheel", onMouseWheel);

    // Set the command key state based on key presses
    function onKeyDown(event) {
      if (event.key === "Meta") {
        setCommandDown(true);
      }
    }

    // Set the command key state based on key releases
    function onKeyUp(event) {
      if (event.key === "Meta") {
        setCommandDown(false);
      }
    }

    // Add the key listeners
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);

    // Render the scene
    function render() {
      renderer.render(scene, camera);
      requestAnimationFrame(render);
    }

    // Call the resize listener and render the scene
    onWindowResize();
    render();

    // Clean up
    return () => {
      window.removeEventListener("resize", onWindowResize);
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ width: "100%", height: "100%", position: "fixed" }}
    >
      <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />
    </div>
  );
}

export default BinaryNetworkSimulator;
