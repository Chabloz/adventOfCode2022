let input = `Sensor at x=3523437, y=2746095: closest beacon is at x=3546605, y=2721324\nSensor at x=282831, y=991087: closest beacon is at x=743030, y=-87472\nSensor at x=1473740, y=3283213: closest beacon is at x=1846785, y=3045894\nSensor at x=1290563, y=46916: closest beacon is at x=743030, y=-87472\nSensor at x=3999451, y=15688: closest beacon is at x=3283637, y=-753607\nSensor at x=1139483, y=2716286: closest beacon is at x=1846785, y=3045894\nSensor at x=3137614, y=2929987: closest beacon is at x=3392051, y=3245262\nSensor at x=2667083, y=2286333: closest beacon is at x=2126582, y=2282363\nSensor at x=3699264, y=2920959: closest beacon is at x=3546605, y=2721324\nSensor at x=3280991, y=2338486: closest beacon is at x=3546605, y=2721324\nSensor at x=833202, y=92320: closest beacon is at x=743030, y=-87472\nSensor at x=3961416, y=2485266: closest beacon is at x=3546605, y=2721324\nSensor at x=3002132, y=3500345: closest beacon is at x=3392051, y=3245262\nSensor at x=2482128, y=2934657: closest beacon is at x=1846785, y=3045894\nSensor at x=111006, y=2376713: closest beacon is at x=354526, y=3163958\nSensor at x=424237, y=2718408: closest beacon is at x=354526, y=3163958\nSensor at x=3954504, y=3606495: closest beacon is at x=3392051, y=3245262\nSensor at x=2275050, y=2067292: closest beacon is at x=2333853, y=2000000\nSensor at x=1944813, y=2557878: closest beacon is at x=2126582, y=2282363\nSensor at x=2227536, y=2152792: closest beacon is at x=2126582, y=2282363\nSensor at x=3633714, y=1229193: closest beacon is at x=3546605, y=2721324\nSensor at x=1446898, y=1674290: closest beacon is at x=2333853, y=2000000\nSensor at x=3713985, y=2744503: closest beacon is at x=3546605, y=2721324\nSensor at x=2281504, y=3945638: closest beacon is at x=1846785, y=3045894\nSensor at x=822012, y=3898848: closest beacon is at x=354526, y=3163958\nSensor at x=89817, y=3512049: closest beacon is at x=354526, y=3163958\nSensor at x=2594265, y=638715: closest beacon is at x=2333853, y=2000000`;

function parseInput(input) {
  const sensors = [];
  for (const line of input.split('\n')) {
    const [sensorData, beaconData] = line.split(':');
    const coordSensor = sensorData.match(/-?\d+/g);
    const sensor = {x: Number(coordSensor[0]), y: Number(coordSensor[1])};
    const coordBeacon = beaconData.match(/-?\d+/g);
    sensor.beacon = {x: Number(coordBeacon[0]), y: Number(coordBeacon[1])};
    sensor.manhattanDistance = Math.abs(sensor.x - sensor.beacon.x) + Math.abs(sensor.y - sensor.beacon.y);
    sensors.push(sensor);
  }
  return sensors;
}

const sensors = parseInput(input);

//part 1
function getImpossibleBeaconPos(sensors, row = 10) {
  const impossibleX = new Set();
  for (const sensor of sensors) {
    // Use the manhattanDistance to know how many cells of the sensor scan are on the row
    const distToRow = Math.abs(sensor.y - row);
    const nbOfCells = sensor.manhattanDistance - distToRow;
    if (nbOfCells < 0 ) continue; //if no cells, this sensor scan does not contain any cells of the row
    // Add all cells of the sensor scan to the impossibleX set
    for (let x = sensor.x - nbOfCells; x <= sensor.x + nbOfCells; x++) {
      impossibleX.add(x);
    }
  }
  //remove beacon from the impossibleX set
  for (const sensor of sensors) {
    if (sensor.beacon.y == row) impossibleX.delete(sensor.beacon.x);
  }
  return impossibleX;
}

console.log(getImpossibleBeaconPos(sensors, 2000000).size);

// part 2
function isRangeOverlapping(range1, range2) {
  // see day 4 : https://github.com/Chabloz/adventOfCode2022/blob/main/d04.js
  return range2.min <= range1.max && range2.max >= range1.min;
}


function mergeOverlap(ranges) {
  ranges.sort((a, b) => a.min - b.min);
  let i = 0;
  while (i < ranges.length - 1) {
    const range1 = ranges[i];
    const range2 = ranges[i + 1];
    if (isRangeOverlapping(range1, range2)) {
      const min = Math.min(range1.min, range2.min);
      const max = Math.max(range1.max, range2.max);
      ranges.splice(i, 2, {min, max});
    } else {
      i++;
    }
  }
}

function findXY(sensors, minSearchRange = 0, maxSearchRange = 4_000_000) {
  for (let y = minSearchRange; y <= maxSearchRange; y++) {
    let impossibleX = [];
    for (const sensor of sensors) {
      // Same as part 1, but instead of adding all cells to the set, we add the min and max of the range
      const distToRow = Math.abs(sensor.y - y);
      const nbOfCells = sensor.manhattanDistance - distToRow;
      if (nbOfCells < 0 ) continue;
      impossibleX.push({min: sensor.x - nbOfCells, max: sensor.x + nbOfCells});
    }
    // Now we need to make the union of all the range that overlap
    mergeOverlap(impossibleX);
    // If there is more than one ranges left, there is a free empty x in this row, so we found the solution
    // (because we know that the solution is unique)
    // (And we skip the edge case of the beacon being on the border of the area)
     if (impossibleX.length > 1) {
      return {y, x: impossibleX[0].max + 1};
    }
  }
  throw new Error('No solution found');
}


const {y, x} = findXY(sensors);
console.log(x * 4_000_000 + y);
