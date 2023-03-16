function createNode(id, computeFn) {
  return {
    id,
    computeFn,
  };
}

function createRelationship(parentId, childId) {
  return {
    parentId,
    childId,
  };
}

function getParentIds(nodeId, relationships) {
  return relationships
    .filter((relationship) => relationship.childId === nodeId)
    .map((relationship) => relationship.parentId);
}

function getChildIds(nodeId, relationships) {
  return relationships
    .filter((relationship) => relationship.parentId === nodeId)
    .map((relationship) => relationship.childId);
}

function executeNode(node, dataMap, relationships) {
  const parentIds = getParentIds(node.id, relationships);
  const parentData = parentIds.map((parentId) => dataMap.get(parentId));
  const nodeData = node.computeFn(parentData);
  dataMap.set(node.id, nodeData);
}

function executeGraph(nodes, relationships) {
  const dataMap = new Map();
  const pendingNodes = [...nodes];
  const visited = new Set();

  while (pendingNodes.length > 0) {
    const node = pendingNodes.shift();
    const parentIds = getParentIds(node.id, relationships);

    const allParentDataAvailable = parentIds.every((parentId) => dataMap.has(parentId));

    if (!allParentDataAvailable) {
      pendingNodes.push(node);
      continue;
    }

    if (!visited.has(node.id)) {
      executeNode(node, dataMap, relationships);
      visited.add(node.id);
    }
  }

  return dataMap;
}

// Define a simple compute function that generates data based on multiple parent data.
function computeNode(parentDataArray) {
  const sum = parentDataArray.reduce((acc, data) => acc + data, 0);
  return sum;
}

// Build the graph.
const nodes = [
  createNode('root', () => 1),
  createNode('child1', ([rootData]) => rootData + 1),
  createNode('child2', ([rootData]) => rootData + 2),
  createNode('child3', ([child1Data, child2Data]) => child1Data * child2Data),
];

// Define relationships between nodes.
const relationships = [
  createRelationship('root', 'child1'),
  createRelationship('root', 'child2'),
  createRelationship('child1', 'child3'),
  createRelationship('child2', 'child3'),
];

// Execute the graph.
const dataMap = executeGraph(nodes, relationships);

// Get the computed data for any node.
console.log('ChildNode3 data:', dataMap.get('child3'));
