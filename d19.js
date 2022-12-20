const input = `Blueprint 1: Each ore robot costs 3 ore. Each clay robot costs 3 ore. Each obsidian robot costs 3 ore and 16 clay. Each geode robot costs 3 ore and 9 obsidian.\nBlueprint 2: Each ore robot costs 3 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 5 clay. Each geode robot costs 4 ore and 8 obsidian.\nBlueprint 3: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 14 clay. Each geode robot costs 2 ore and 16 obsidian.\nBlueprint 4: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 2 ore and 18 clay. Each geode robot costs 4 ore and 20 obsidian.\nBlueprint 5: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 16 clay. Each geode robot costs 2 ore and 15 obsidian.\nBlueprint 6: Each ore robot costs 2 ore. Each clay robot costs 3 ore. Each obsidian robot costs 2 ore and 14 clay. Each geode robot costs 3 ore and 8 obsidian.\nBlueprint 7: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 15 clay. Each geode robot costs 4 ore and 17 obsidian.\nBlueprint 8: Each ore robot costs 3 ore. Each clay robot costs 4 ore. Each obsidian robot costs 3 ore and 10 clay. Each geode robot costs 2 ore and 7 obsidian.\nBlueprint 9: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 8 clay. Each geode robot costs 2 ore and 18 obsidian.\nBlueprint 10: Each ore robot costs 3 ore. Each clay robot costs 3 ore. Each obsidian robot costs 2 ore and 11 clay. Each geode robot costs 2 ore and 19 obsidian.\nBlueprint 11: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 9 clay. Each geode robot costs 4 ore and 16 obsidian.\nBlueprint 12: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 2 ore and 16 clay. Each geode robot costs 4 ore and 16 obsidian.\nBlueprint 13: Each ore robot costs 3 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 18 clay. Each geode robot costs 2 ore and 11 obsidian.\nBlueprint 14: Each ore robot costs 3 ore. Each clay robot costs 3 ore. Each obsidian robot costs 2 ore and 7 clay. Each geode robot costs 2 ore and 9 obsidian.\nBlueprint 15: Each ore robot costs 2 ore. Each clay robot costs 4 ore. Each obsidian robot costs 3 ore and 17 clay. Each geode robot costs 4 ore and 20 obsidian.\nBlueprint 16: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 9 clay. Each geode robot costs 2 ore and 20 obsidian.\nBlueprint 17: Each ore robot costs 2 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 20 clay. Each geode robot costs 4 ore and 18 obsidian.\nBlueprint 18: Each ore robot costs 4 ore. Each clay robot costs 3 ore. Each obsidian robot costs 4 ore and 18 clay. Each geode robot costs 4 ore and 11 obsidian.\nBlueprint 19: Each ore robot costs 3 ore. Each clay robot costs 3 ore. Each obsidian robot costs 2 ore and 16 clay. Each geode robot costs 2 ore and 18 obsidian.\nBlueprint 20: Each ore robot costs 3 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 17 clay. Each geode robot costs 4 ore and 16 obsidian.\nBlueprint 21: Each ore robot costs 4 ore. Each clay robot costs 3 ore. Each obsidian robot costs 4 ore and 6 clay. Each geode robot costs 3 ore and 11 obsidian.\nBlueprint 22: Each ore robot costs 3 ore. Each clay robot costs 3 ore. Each obsidian robot costs 2 ore and 16 clay. Each geode robot costs 3 ore and 14 obsidian.\nBlueprint 23: Each ore robot costs 2 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 19 clay. Each geode robot costs 2 ore and 18 obsidian.\nBlueprint 24: Each ore robot costs 2 ore. Each clay robot costs 3 ore. Each obsidian robot costs 3 ore and 9 clay. Each geode robot costs 3 ore and 9 obsidian.\nBlueprint 25: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 8 clay. Each geode robot costs 2 ore and 15 obsidian.\nBlueprint 26: Each ore robot costs 3 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 10 clay. Each geode robot costs 2 ore and 13 obsidian.\nBlueprint 27: Each ore robot costs 3 ore. Each clay robot costs 4 ore. Each obsidian robot costs 3 ore and 6 clay. Each geode robot costs 4 ore and 11 obsidian.\nBlueprint 28: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 7 clay. Each geode robot costs 2 ore and 19 obsidian.\nBlueprint 29: Each ore robot costs 4 ore. Each clay robot costs 3 ore. Each obsidian robot costs 4 ore and 11 clay. Each geode robot costs 3 ore and 15 obsidian.\nBlueprint 30: Each ore robot costs 2 ore. Each clay robot costs 2 ore. Each obsidian robot costs 2 ore and 20 clay. Each geode robot costs 2 ore and 14 obsidian.`;

const ore = 'ore';
const clay = 'clay';
const obsidian = 'obsidian';
const geode = 'geode';

const resourcesTypes = [ore, clay, obsidian, geode];

const blueprints = input.split('\n').map(line => {
  const numbers = line.match(/\d+/g).map(Number);
  const blueprint = {};
  blueprint.costs = {
    [ore]: {
      [ore]: numbers[1],
      [clay]: 0,
      [obsidian]: 0,
    },
    [clay]: {
      [ore]: numbers[2],
      [clay]: 0,
      [obsidian]: 0,
    },
    [obsidian]: {
      [ore]: numbers[3],
      [clay]: numbers[4],
      [obsidian]: 0,
    },
    [geode]: {
      [ore]: numbers[5],
      [clay]: 0,
      [obsidian]: numbers[6],
    }
  };

  blueprint.upperRobotsLimits = {
    [ore]: Math.max(numbers[1], numbers[2], numbers[3], numbers[5]),
    [clay]: numbers[4],
    [obsidian]: numbers[6],
    [geode]: Infinity,
  };

  // we start with no resource and only 1 ore robot
  blueprint.robots = {};
  blueprint.resources = {};
  for (const resource of resourcesTypes) {
    blueprint.robots[resource] = 0;
    blueprint.resources[resource] = 0;
  }
  blueprint.robots[ore] = 1;

  blueprint.currTime = 0;
  return blueprint;
});

function getListOfRobotsWeShouldBuild(bp) {
  const canBuild = [];
  // dont build anything if the next cycle is the end
  if (bp.currTime >= maxTime) return canBuild;

  for (const robotType of resourcesTypes) {
    // We dont need more robots of this type than the max limit
    if (bp.robots[robotType] >= bp.upperRobotsLimits[robotType]) continue;
    let canBuildRobot = true;
    for (const resourceCost of Object.keys(bp.costs[robotType])) {
      if (bp.resources[resourceCost] >= bp.costs[robotType][resourceCost]) continue;
      canBuildRobot = false;
      break;
    }
    if (canBuildRobot) {
      // Always build geodes first if we can
      if (robotType === geode) return [robotType];
      canBuild.push(robotType);
    }
  }
  return canBuild;
}

function clone(bp) {
  const clone = {
    resources: {...bp.resources},
    robots: {...bp.robots},
    upperRobotsLimits: bp.upperRobotsLimits,
    costs: bp.costs,
    currTime: bp.currTime + 1,
  };
  return clone;
}

// TODO: This is to slow, we need to jump directly to the time we can build the next robot
function exploreAllPaths(bp) {
  if (bp.currTime > maxTime) return;

  let canBuild = getListOfRobotsWeShouldBuild(bp);

  // gather all resources
  for (const resource of resourcesTypes) {
    bp.resources[resource] += bp.robots[resource];
  }
  maxGeode = Math.max(maxGeode, bp.resources[geode]);

  // explore the "do nothing" path only if we cannot build a geode
  if (canBuild.length != 1 || canBuild[0] != geode) {
    exploreAllPaths(clone(bp));
  }

  // explore the "build a robot" path
  for (let choice = 0; choice < canBuild.length; choice++) {
    const bpClone = clone(bp);
    const robot = canBuild[choice];
    for (const resourceCost of Object.keys(bpClone.costs[robot])) {
      bpClone.resources[resourceCost] -= bpClone.costs[robot][resourceCost];
    }
    bpClone.robots[robot]++;
    exploreAllPaths(bpClone);
  }
}

const maxTime = 23;
let sum = 0;
let maxGeode;
for (const [id, bp] of blueprints.entries()) {
  maxGeode = 0;
  exploreAllPaths(bp);
  sum += maxGeode * (id + 1);
}
console.log(sum);