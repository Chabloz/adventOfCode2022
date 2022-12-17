let input = ``;

input = `Valve TM has flow rate=3; tunnels lead to valves GU, KQ, BV, MK
Valve BX has flow rate=0; tunnels lead to valves CD, HX
Valve GV has flow rate=8; tunnels lead to valves MP, SE
Valve OI has flow rate=0; tunnels lead to valves ZB, RG
Valve OY has flow rate=0; tunnels lead to valves XG, ZB
Valve EZ has flow rate=0; tunnels lead to valves OU, LI
Valve TN has flow rate=0; tunnels lead to valves DT, GU
Valve SE has flow rate=0; tunnels lead to valves GV, CD
Valve SG has flow rate=0; tunnels lead to valves XR, NK
Valve EB has flow rate=0; tunnels lead to valves SJ, CE
Valve QB has flow rate=0; tunnels lead to valves AW, MI
Valve GU has flow rate=0; tunnels lead to valves TN, TM
Valve AW has flow rate=11; tunnels lead to valves QB, IG, IK, VK
Valve IG has flow rate=0; tunnels lead to valves AW, SH
Valve MJ has flow rate=0; tunnels lead to valves IK, XR
Valve HX has flow rate=0; tunnels lead to valves BX, AA
Valve IK has flow rate=0; tunnels lead to valves MJ, AW
Valve QZ has flow rate=0; tunnels lead to valves AF, XG
Valve CV has flow rate=0; tunnels lead to valves KT, AA
Valve ES has flow rate=0; tunnels lead to valves BV, CD
Valve NK has flow rate=0; tunnels lead to valves YQ, SG
Valve SL has flow rate=0; tunnels lead to valves DT, XL
Valve RG has flow rate=17; tunnels lead to valves SJ, OI, WC
Valve ZB has flow rate=9; tunnels lead to valves OY, MP, DI, OX, OI
Valve SJ has flow rate=0; tunnels lead to valves RG, EB
Valve GF has flow rate=19; tunnels lead to valves DQ, SH, IH
Valve OU has flow rate=10; tunnels lead to valves EZ, TL, WC
Valve TL has flow rate=0; tunnels lead to valves OU, OX
Valve XG has flow rate=18; tunnels lead to valves QZ, OY
Valve EK has flow rate=20; tunnels lead to valves FD, MI
Valve BV has flow rate=0; tunnels lead to valves TM, ES
Valve AA has flow rate=0; tunnels lead to valves CV, HX, TR, MK, DQ
Valve UO has flow rate=23; tunnel leads to valve AF
Valve LI has flow rate=0; tunnels lead to valves EZ, CE
Valve MI has flow rate=0; tunnels lead to valves EK, QB
Valve MP has flow rate=0; tunnels lead to valves GV, ZB
Valve YQ has flow rate=14; tunnels lead to valves VK, MG, NK
Valve AF has flow rate=0; tunnels lead to valves UO, QZ
Valve SH has flow rate=0; tunnels lead to valves IG, GF
Valve FD has flow rate=0; tunnels lead to valves IH, EK
Valve KQ has flow rate=0; tunnels lead to valves TM, FQ
Valve DI has flow rate=0; tunnels lead to valves ZB, CD
Valve KT has flow rate=0; tunnels lead to valves DT, CV
Valve MG has flow rate=0; tunnels lead to valves NQ, YQ
Valve DQ has flow rate=0; tunnels lead to valves GF, AA
Valve CE has flow rate=21; tunnels lead to valves LI, EB
Valve MK has flow rate=0; tunnels lead to valves AA, TM
Valve XL has flow rate=0; tunnels lead to valves CD, SL
Valve OX has flow rate=0; tunnels lead to valves TL, ZB
Valve DT has flow rate=5; tunnels lead to valves NQ, TP, KT, SL, TN
Valve IH has flow rate=0; tunnels lead to valves GF, FD
Valve TP has flow rate=0; tunnels lead to valves XR, DT
Valve FQ has flow rate=0; tunnels lead to valves XR, KQ
Valve CD has flow rate=6; tunnels lead to valves DI, BX, XL, ES, SE
Valve XR has flow rate=7; tunnels lead to valves TR, FQ, TP, MJ, SG
Valve VK has flow rate=0; tunnels lead to valves YQ, AW
Valve WC has flow rate=0; tunnels lead to valves RG, OU
Valve TR has flow rate=0; tunnels lead to valves XR, AA
Valve NQ has flow rate=0; tunnels lead to valves DT, MG`;

function parseInput(input) {
  const graph = new Map();
  for (const line of input.split('\n')) {
    const rate = Number(line.match(/\d+/g)[0]);
    const [id, ...neighbors] = line.match(/[A-Z]{2}/g);
    graph.set(id, {id, rate, neighbors, open: false});
  }
  return graph;
}

// Breadth First Search (BFS) to find all distances from a node
function getDistanceMap(nodeId, graph) {
  const distancesMap = new Map();
  const frontier = [];
  frontier.push(nodeId);
  distancesMap.set(nodeId, 0);
  while (frontier.length > 0) {
    const nodeId = frontier.shift();
    const neighborsId = graph.get(nodeId).neighbors;
    for (const neighborId of neighborsId) {
      if (distancesMap.has(neighborId)) continue;
      frontier.push(neighborId);
      const distance = distancesMap.get(nodeId) + 1;
      distancesMap.set(neighborId, distance);
    }
  }
  return distancesMap;
}

function findAllPaths(currentNodeId, destNodesId, visitedNodesId, time) {
  const visited = new Set(visitedNodesId);
  visited.add(currentNodeId);
  const targets = new Set(destNodesId);
  targets.delete(currentNodeId);

  allPaths.add([...visited]);

  let maxScore = 0;
  for (const targetId of targets) {
    const timeLeft = time - distanceMaps.get(currentNodeId).get(targetId) - 1; // actual time - distance - 1 (to open the valve)
    if (timeLeft < 0) continue;
    let flow = graph.get(targetId).rate * timeLeft;
    flow += findAllPaths(targetId, targets, visited, timeLeft);
    if (flow > maxScore) {
      maxScore = flow;
    }
  }
  return maxScore;
}


const graph = parseInput(input);

// part 1

// Pre-calculate the distance map for each node
// and get the nodes with a usefull (> 0) valve
const distanceMaps = new Map();
const nodesWithValve = new Set();
for (const nodeId of graph.keys()) {
  distanceMaps.set(nodeId, getDistanceMap(nodeId, graph));
  if (graph.get(nodeId).rate > 0) nodesWithValve.add(nodeId);
}

const allPaths = new Set();
console.log(findAllPaths('AA', nodesWithValve, new Set(), 30));

// part 2
// get all path 26m path
allPaths.clear();
findAllPaths('AA', nodesWithValve, new Set(), 26);

function getScorePath(path, time = 26) {
  let totalScore = 0;
  const allreadyOpened = new Set();
  for (let i=1; i<path.length; i++) {
    const prev = path[i-1];
    const curr = path[i];
    time = time - distanceMaps.get(prev).get(curr) - 1;
    if (time < 0) continue;
    let score = 0;
    if (!allreadyOpened.has(curr)) {
      score = time * graph.get(curr).rate;
      allreadyOpened.add(curr);
    }
    totalScore += score;
  }
  return totalScore;
}

const paths = [...allPaths];
const scoreMap = new Map();
for (let i = 0; i < paths.length; i++) {
  scoreMap.set(i, getScorePath(paths[i]));
  // purify path to keep only the valve nodes
  paths[i] = new Set(paths[i].filter(nodeId => nodesWithValve.has(nodeId)));
}

function everyItemIsDifferent(set1, set2) {
  for (const item of set1) {
    if (set2.has(item)) return false;
  }
  return true;
}

let max = -Infinity;
for (let iHuman = 0; iHuman < paths.length; iHuman++) {
  for (let iElephant = iHuman + 1; iElephant < paths.length; iElephant++) {
    // search pair of paths when one path contains only the valve not cointained by the other path
    if (everyItemIsDifferent(paths[iHuman], paths[iElephant])) {
      const score = scoreMap.get(iHuman) + scoreMap.get(iElephant);
      if (score > max) max = score;
    }
  }
}

console.log(max);