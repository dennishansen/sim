import React, { useRef, useEffect } from "react";
import * as THREE from "three";


function BinaryNetworkSimulator() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    // Create a WebGL renderer and add it to the DOM
    const container = containerRef.current;
    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({ canvas });

    // Create a time integer
    let time = 0;

    // Set the background color
    renderer.setClearColor(0x000000, 1);
    
    // Set up the command key state
    let commandDown = false;

    // Create an array of nodes
    let nodes = [
      {x: -1, y: -1, on: true, id: 0},
      {x: -1, y: 0, on: true, id: 1},
      {x: -1, y: 1, on: false, id: 2},
      {x: 0, y: -1, on: false, id: 3},
      {x: 0, y: 0, on: true, id: 4},
      {x: 0, y: 1, on: false, id: 5},
      {x: 1, y: -1, on: false, id: 6},
      {x: 1, y: 0, on: false, id: 7},
      {x: 1, y: 1, on: true, id: 8},
    ]

    // Create a scene
    const scene = new THREE.Scene();

    // Create a node in a given position
    function renderNode({x, y, on, id}) {

      // Create a circle mesh that is green if the node is on, and red if it's off
      const geometry = new THREE.CircleGeometry(0.1, 32);
      const material = new THREE.MeshBasicMaterial({
        color: on ? 0x00ff00 : 0xffffff,
      });
      const node = new THREE.Mesh(geometry, material);
      node.position.x = x;
      node.position.y = y;

      // Add an id to the node mesh
      node.userData.id = "node_" + id;

      // Add the mesh to the scene
      scene.add(node);
    }

    // Create a function that creates a line between two nodes
    function renderConnection({node1, node2, id}) {
      node1 = nodes.find((node) => node.id === node1);
      node2 = nodes.find((node) => node.id === node2);
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(6);
      positions[0] = node1.x;
      positions[1] = node1.y;
      positions[2] = 0;
      positions[3] = node2.x;
      positions[4] = node2.y;
      positions[5] = 0;
      geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      const material = new THREE.LineBasicMaterial({ color: 0xffffff });
      const line = new THREE.Line(geometry, material);

      // Add an id to the node mesh
      line.userData.id = "connection_" + id;

      scene.add(line);
    }

    // Create an array of connections between nodes
    const connections = [
      {node1: 0, node2: 1, id: 0},
      {node1: 0, node2: 1, id: 1},
      {node1: 0, node2: 3, id: 2},
      {node1: 1, node2: 2, id: 3},
      {node1: 1, node2: 4, id: 4},
      {node1: 2, node2: 5, id: 5},
      {node1: 3, node2: 4, id: 6},
      {node1: 3, node2: 6, id: 7},
      {node1: 4, node2: 5, id: 8},
      {node1: 4, node2: 7, id: 9},
      {node1: 5, node2: 8, id: 10},
      {node1: 6, node2: 7, id: 11},
      {node1: 7, node2: 8, id: 12}
    ];

    // Render the connections
    connections.forEach(renderConnection);

    // Render the nodes
    nodes.forEach(renderNode);


    // Create a function that determines if a node is on or off on the next tick
    function nextNodeState(node) {
      // Get the number of on neighbors
      const onNeighbors = connections
        .filter((connection) => {
          return connection.node1 === node.id || connection.node2 === node.id;
        })
        .map((connection) => {
          return connection.node1 === node.id ? connection.node2 : connection.node1;
        })
        .map((id) => {
          return nodes.find((node) => node.id === id);
        })
        .filter((node) => node.on)
        .length;
      
      // If the node is on, it will turn off if it has 0 or 1 on neighbors
      if (node.on) {
        return onNeighbors > 1;
      }

      // If the node is off, it will turn on if it has 2 or more on neighbors
      return onNeighbors >= 2;
    }

    // Create a function that updates the state of all nodes
    function updateNodes() {
      nodes = nodes.map((node) => {
        return {
          ...node,
          on: nextNodeState(node),
        };
      });
    }

    // Every one second, increment the time and update the nodes
    setInterval(() => {
      time += 1;
      updateNodes();

      // Remove all nodes from the scene
      scene.children = scene.children.filter((child) => {
        return child.type !== "Mesh";
      });

      // Render the nodes
      nodes.forEach(renderNode);
    }, 1000);

    // Create a function that updates a node in the array given an id
    function updateNode(id, update) {
      // Find the node in the array and update it
      nodes = nodes.map((node) => {
        if (node.id === id) {
          return {
            ...node,
            ...update,
          };
        }
        return node;
      });
    }

    let draggedNode = null;

    // Enable the user to click and drag a node to a new position
    function onMouseDown(event) {
      // If the command key is being held down, don't do anything
      if (commandDown) {
        return;
      }

      // Get the mouse position
      const mouse = new THREE.Vector2();
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      // Create a raycaster
      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(mouse, camera);

      // Get the intersections
      const intersects = raycaster.intersectObjects(scene.children);
      console.log("intersects", intersects)

      // Find the the first node where the userData id starts with "node_"
      const node = intersects.find((intersect) => {
        return intersect.object.userData.id.startsWith("node_");
      });

      // If there is no intersection, return
      if (!node) {
        return;
      }

      // Get the id of the node
      const id = node.object.userData.id.split("_")[1];

      // Mark which node is being dragged
      draggedNode = id;
    }

    // Add the mouse down event listener
    window.addEventListener("mousedown", onMouseDown);

    // Change the position of the dragged node
    function onMouseMove(event) {
      // If the command key is being held down, don't do anything
      if (commandDown) {
        return;
      }

      // If there is no dragged node, return
      if (!draggedNode) {
        return;
      }

      // Get the mouse position
      const mouse = new THREE.Vector2();
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      // Update the node being dragged with the new position
      updateNode(draggedNode, {
        x: mouse.x,
        y: mouse.y,
      });


      // // Remove all nodes from the scene
      // scene.children = scene.children.filter((child) => {
      //   return child.type !== "Mesh";
      // })

      // Rerender the dragged node
      // renderNode(nodes.find((node) => node.id === draggedNode));

      // Render the connections
      // connections.forEach(renderConnection);
    }

    // Add the mouse move event listener
    window.addEventListener("mousemove", onMouseMove);

    // // When the mouse is released, set the dragged node to null and update the node
    // function onMouseUp() {
    //   // If the command key is being held down, don't do anything
    //   if (commandDown) {
    //     return;
    //   }

    //   // If there is no dragged node, return
    //   if (!draggedNode) {
    //     return;
    //   }

    //   // Update the node
    //   nodes = nodes.map((node) => {
    //     if (node.id === draggedNode.id) {
    //       return draggedNode;
    //     }

    //     return node;
    //   });

    //   // Set the dragged node to null
    //   draggedNode = null;
    // }

    // // Add the mouse up event listener
    // window.addEventListener("mouseup", onMouseUp);

    // Create a camera and a scene
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

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
        commandDown = true;
      }
    }

    // Set the command key state based on key releases
    function onKeyUp(event) {
      if (event.key === "Meta") {
        commandDown = false;
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
