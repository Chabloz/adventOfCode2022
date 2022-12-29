const input = `Blueprint 1: Each ore robot costs 3 ore. Each clay robot costs 3 ore. Each obsidian robot costs 3 ore and 16 clay. Each geode robot costs 3 ore and 9 obsidian.
Blueprint 2: Each ore robot costs 3 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 5 clay. Each geode robot costs 4 ore and 8 obsidian.
Blueprint 3: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 14 clay. Each geode robot costs 2 ore and 16 obsidian.
Blueprint 4: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 2 ore and 18 clay. Each geode robot costs 4 ore and 20 obsidian.
Blueprint 5: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 16 clay. Each geode robot costs 2 ore and 15 obsidian.
Blueprint 6: Each ore robot costs 2 ore. Each clay robot costs 3 ore. Each obsidian robot costs 2 ore and 14 clay. Each geode robot costs 3 ore and 8 obsidian.
Blueprint 7: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 15 clay. Each geode robot costs 4 ore and 17 obsidian.
Blueprint 8: Each ore robot costs 3 ore. Each clay robot costs 4 ore. Each obsidian robot costs 3 ore and 10 clay. Each geode robot costs 2 ore and 7 obsidian.
Blueprint 9: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 8 clay. Each geode robot costs 2 ore and 18 obsidian.
Blueprint 10: Each ore robot costs 3 ore. Each clay robot costs 3 ore. Each obsidian robot costs 2 ore and 11 clay. Each geode robot costs 2 ore and 19 obsidian.
Blueprint 11: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 9 clay. Each geode robot costs 4 ore and 16 obsidian.
Blueprint 12: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 2 ore and 16 clay. Each geode robot costs 4 ore and 16 obsidian.
Blueprint 13: Each ore robot costs 3 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 18 clay. Each geode robot costs 2 ore and 11 obsidian.
Blueprint 14: Each ore robot costs 3 ore. Each clay robot costs 3 ore. Each obsidian robot costs 2 ore and 7 clay. Each geode robot costs 2 ore and 9 obsidian.
Blueprint 15: Each ore robot costs 2 ore. Each clay robot costs 4 ore. Each obsidian robot costs 3 ore and 17 clay. Each geode robot costs 4 ore and 20 obsidian.
Blueprint 16: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 9 clay. Each geode robot costs 2 ore and 20 obsidian.
Blueprint 17: Each ore robot costs 2 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 20 clay. Each geode robot costs 4 ore and 18 obsidian.
Blueprint 18: Each ore robot costs 4 ore. Each clay robot costs 3 ore. Each obsidian robot costs 4 ore and 18 clay. Each geode robot costs 4 ore and 11 obsidian.
Blueprint 19: Each ore robot costs 3 ore. Each clay robot costs 3 ore. Each obsidian robot costs 2 ore and 16 clay. Each geode robot costs 2 ore and 18 obsidian.
Blueprint 20: Each ore robot costs 3 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 17 clay. Each geode robot costs 4 ore and 16 obsidian.
Blueprint 21: Each ore robot costs 4 ore. Each clay robot costs 3 ore. Each obsidian robot costs 4 ore and 6 clay. Each geode robot costs 3 ore and 11 obsidian.
Blueprint 22: Each ore robot costs 3 ore. Each clay robot costs 3 ore. Each obsidian robot costs 2 ore and 16 clay. Each geode robot costs 3 ore and 14 obsidian.
Blueprint 23: Each ore robot costs 2 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 19 clay. Each geode robot costs 2 ore and 18 obsidian.
Blueprint 24: Each ore robot costs 2 ore. Each clay robot costs 3 ore. Each obsidian robot costs 3 ore and 9 clay. Each geode robot costs 3 ore and 9 obsidian.
Blueprint 25: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 8 clay. Each geode robot costs 2 ore and 15 obsidian.
Blueprint 26: Each ore robot costs 3 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 10 clay. Each geode robot costs 2 ore and 13 obsidian.
Blueprint 27: Each ore robot costs 3 ore. Each clay robot costs 4 ore. Each obsidian robot costs 3 ore and 6 clay. Each geode robot costs 4 ore and 11 obsidian.
Blueprint 28: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 7 clay. Each geode robot costs 2 ore and 19 obsidian.
Blueprint 29: Each ore robot costs 4 ore. Each clay robot costs 3 ore. Each obsidian robot costs 4 ore and 11 clay. Each geode robot costs 3 ore and 15 obsidian.
Blueprint 30: Each ore robot costs 2 ore. Each clay robot costs 2 ore. Each obsidian robot costs 2 ore and 20 clay. Each geode robot costs 2 ore and 14 obsidian`;

const ore = 'ore';
const clay = 'clay';
const obsidian = 'obsidian';
const geode = 'geode';

const resourcesTypes = [ore, clay, obsidian, geode];
let maxTime = 24;

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

  blueprint.maxRobots = {
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

  blueprint.currTime = maxTime;
  return blueprint;
});

function clone(bp) {
  const clone = {
    ...bp,
    resources: {...bp.resources},
    robots: {...bp.robots},
  };
  return clone;
}

function getMaxGeodes(bp) {
  // no time to build a useful robot, we exit
  if (bp.currTime <= 1) {
    maxGeode = Math.max(maxGeode, bp.resources[geode]);
    return;
  }

  // We exit if the number of geodes we can produce is not better than the current max
  const timeLeft = bp.currTime - 1;
  const futurGeodes = (timeLeft * (timeLeft + 1)) / 2;
  if (futurGeodes + bp.resources[geode] < maxGeode) return;

  // We dont need more robots of a type if we already have the max
  // And we cannot build a robot if doesnt have a gathering robot for all the resources needed
  const canBuild = resourcesTypes
    .filter(type => bp.robots[type] < bp.maxRobots[type])
    .filter(type => {
      for (const resource in bp.costs[type]) {
        if (bp.costs[type][resource] == 0) continue;
        if (bp.robots[resource] == 0) return false;
      }
      return true;
    });


  for (const robotType of canBuild) {
    // Calculate the time needed to gather all the resources to build it
    let time = 0;
    for (const resource in bp.costs[robotType]) {
      // If we allready have the ressources, we dont need to wait
      if (bp.resources[resource] >= bp.costs[robotType][resource]) continue;
      // Otherwise , we need to wait depending on the number of robots we have for this resource
      const timeToGather = Math.ceil((bp.costs[robotType][resource] - bp.resources[resource]) / bp.robots[resource]);
      time = Math.max(time, timeToGather);
    }
    // we need to wait 1 more turn to actually build the robot
    time++;

    // If we dont have enough time to build the robot, we dont consider it
    if (time >= bp.currTime) {
      maxGeode = Math.max(maxGeode, bp.resources[geode]);
      continue;
    }

    const bpClone = clone(bp);
    // decrease the time left
    bpClone.currTime -= time;

    // gather the resources
    for (const resource of resourcesTypes) {
      if (resource == geode) continue;
      bpClone.resources[resource] += (bpClone.robots[resource] * time);
    }
    if (robotType === geode) {
      bpClone.resources[geode] += bpClone.currTime;
    }

    maxGeode = Math.max(maxGeode, bpClone.resources[geode]);

    // spend the resources to build the robot
    for (const resource in bpClone.costs[robotType]) {
      bpClone.resources[resource] -= bpClone.costs[robotType][resource];
    }

    // build the robot
    bpClone.robots[robotType]++;

    // explore the branch
    getMaxGeodes(bpClone);
  }
}

// Part 1
let sum = 0;
let maxGeode;
for (const [id, bp] of blueprints.entries()) {
  maxGeode = 0;
  getMaxGeodes(bp);
  sum += maxGeode * (id + 1);
}
console.log(sum);

// Part 2
maxTime = 32;
console.log(
  blueprints.slice(0, 3).reduce((total, bp) => {
    maxGeode = 0;
    bp.currTime = maxTime;
    getMaxGeodes(bp);
    return maxGeode * total;
  }, 1)
);
