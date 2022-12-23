const input = `....##....#.##....###....#.#.#.#..##..#.####.#.##..#..#....#######...##.##
.#..##.#.#.##..###.#####..#.#.#.###.#####..#.##..######...#.####.#.#.#.#.#
.##..#####..######.##.#..####.###.###....#....#.#.###.##.######...#.##.###
..##....#.....#..#..#.#.#..#...#.####.##..#...#..#.##..#.....##.#.##..#.##
###..##...###.....###..#.##.##.###.#..#...#.....###..#..#.##..###.###.##..
.#..#..#.#.#.#.###.....####...#..###..#.#....###.###...##..#..##.##.#...##
..##..##.#.#.#.##..#...#.#..####.###..#.###.##.#...#.#.##.###..###.###...#
##..##.....####.#..#.#....##.#.#.#..#######.#.#......##.#....#.##..#..#.##
..#......#....##.#..##.###....#.#.#.###.##..####.#...#.#..#..#.##...##.#..
.##.##.##.#.#.#####...##..#..##....#.#...#....#..###.###...#..#..#.##.##..
.....#####..#......#.........##.###.#.#....#..##..#####.#..####..#..#.#...
###..###..####.###....####..######.###.##.#.#..#.....########.##.##.#..###
###...#.#..##.##...##.##..###.###.#####...#....#..#.#...###.#.#..#...###..
.....###.#....##....#........#.##.##...##.#.##.#...#.###.###..#####.#.###.
....#..#....#...#.#.#....###..#.#..#.#.###.#.#...#...#.##.#.#...#.##.##.##
##.##.###.##..##.###.###.#.##....#..#.....#####..#.......#....##.#.......#
#..#.#.##...####.##...####.#......###.###.####..##..####..#..#.#.###.#..#.
#..#....##....##.....#...###..###.#...##..#.####.##..##.#.#...#.##...###..
#....##..#.##.#.##.#.###.###..#...#..#.###.#.##..#.##..#.#.#........######
##..##.##..#####.....##.#.....#.#####.....#..#.##.#.#..##..#...##......#.#
..##...#.#...###...##.##.##.###.#....#..###.#.#.######.##.#.####.#..###...
##.#######.###..##.###.#...#.#..##.####.##...#...#..#..###....##..#..###.#
###.#..#..#..#...#...####....####.#..#..##.#.#..#..#....####.##.##..#....#
#.#.#..######.#.###.....####....###.##.##...#..##.###.#.#.#.#.###.#.#.#.#.
..##...##.....#..###.##.##.###.#.#.#.#...##.#.#.#.#...#.#.###.###..#.####.
#..#...#.###..#.#.####..##.#.#.#.....##.####....#.####..######....#..#.###
.##.#..#......#.#######..##.####..#.......####......#..#.##..#.#.##.##.#..
......##.##..###.#.#.#.##....###.##.#.#......#.#....##.##.#.##.#.#.#.....#
#####.####...###.#.###.###..#.....####.#.#.#..#.#.#.###.##.#######..####..
##.##..###..######.##....##.###.###.##..####.###.##.##......#.#.###..#####
#..###...#.####..#..####...###.#..##.#...#.#.###.#..###..###.###.###...#.#
.#.####..###.#.#...####.###.##.....###...###.##..#.########.##.#.###.##.#.
#.###.#...######...##.#.......#..##.....#.#..##.#.##....#.##.##.#.##.##.#.
##............#.#.###.######...###.#....#..#..###..#......#####.####.#.##.
....#...#..#.##.#..#.#####...#.#.#.##.####.#..#.#..##.####.#.###....####..
..#...##..####.#.#.##.####...##.#.###.####...###.###.#.##.#.#.##....###..#
#..##.######....#####...#.#.#.#.#...####..####.##....##..####....##..#.#..
.#.#...#...#..#.##....###.#.###...#.#..#...#.##.##.#.##.##.###..##.###.###
.......###.#.#.##.......########..##.#.....##.#.##.###...##..#######.#..#.
####.##.#.###..#.#.##.#####.....##.#..#.#..##..###.##..#...######..###..#.
..##...#.#.#..###....####.....#......#.#.#..##.##..###..#.##########.#..#.
....#..####.##.#.##..##.#...######.###..#.#..#..#....####.#....####.....##
##.###.##.###..###.##.##.#.#...#####.#.####..##....#.#..####.....#..#.....
##.##..#...#..#####.##.....##.####.#...###.####..#..#########...##..#.##..
..#.###.#.#.##.#...#..#..#...#.#....##.#####.#...#.##.########..##....#...
..##.##.##..#..##.########.#.#####......#.##..#..##.....###..#.###.....##.
#.....#..##.#.##.###.#....####.##.##.#......###..#..###..........###..#..#
#######.######....#.##...#.....######..###...#..#..##.####..###.#.###.#...
#.#..#.#.###...#.##....#.#.##.#..#.#.###.##....##.####.....##.#.##......#.
.#.#.#..###.#.##...####.#.#.###.#.##.#.#.#..##...###.#.#.#..####....##..#.
###.#..##.#.#.#.#.##..###.#.##...#....###..###.#.#####.##.#..######.......
..#.####..#.....###.....#...#..#...#.####.#.#.#..#.#..###.##.#.....##...##
#.###.#.#..##.#.#.#.##.###....#..##.####...##..#..##.###.##.#.##..#...#.##
###..#.###.....#.#.####.#......#..#.#.#...........#.###..#........##...###
##..##..#....#.#.#..###..#####..##..######.####.##.....###...#.#..##.#.#..
..#.#...##..#.####...#...#.#.####.#.#...#..##.##.###.....####.##.#..#.#...
#......##.#.#....###.#.##.#.##.###.#..######..#.##..#....#.##.#.###.#.###.
#..#.#..#.#.#.....#.##..#.###.######...#.#.#....##..##....##..####..#.###.
.##..#.##.#..##..#.##.#######........##.#####...#..#####.##..##...##..##..
.##.#.##...#.##..##.#####.####.#.......##.#.....######..###.#..#.##..#.#..
##.#..##.#.#.##.#....#..######.##...#.#...########...###..#.#.##...##.###.
.#.#.#...###..##...##..##.##...#.##.##..#.#.#.######.######..##.#..#..#.#.
###########.#.#####.#.#.##...#####...#..#####.##.#....#...#..##..##.#.#.##
.####.##..#..#...#.#..#..#.#####.#.#.##.#..######...##.##.##.#....#.#.....
##....#...#.#.#.#...#..#.#...#.#...#.#####..##.####.....#...#....###...##.
.#.##..###...##.####..#######.####....#.##..#.#.#.#.....##.#...#....#..#.#
#.###.....#.............#.....#.#...###..#.#.#.....#.######.#.####...##..#
..#.#...##...######.......######.##..##..##..#.###...#####..##..#..#..#..#
.###.#..###.#.####...#.#.##..#..###..####.#..###.##.##.#....####.#.######.
#....##.#..##..###..#.#######.#.#.#.#.....######.####.###.....#..#.##.#.#.
####..#..#.##.###.#....######...#.#.##.#####..#..#.#...###...#####..###.#.
..##..#.##.#.#...##.##..#.#...#..##.##.##.##.##......####...####.###...##.
.#........#.....#.##.#.##.#..###.#..###....##.#.#.#.#...#..#...#.####..#.#
##..###.####...####.#....##.###...##..##....#.#.###.##.#..#....##.##.###.#`;

class ElvesAutomaton {
  air = '.';
  elf = '#';
  north = 0;
  northEast = 1;
  east = 2;
  southEast = 3;
  south = 4;
  southWest = 5;
  west = 6;
  northWest = 7;

  constructor(grid) {
    this.grid = grid;
    this.directionsCheckOrders = [
      {
        check:  [this.north, this.northEast, this.northWest],
        move: {row: -1, col: 0},
      }, {
        check:  [this.south, this.southEast, this.southWest],
        move: {row: +1, col: 0},
      }, {
        check:  [this.west, this.northWest, this.southWest],
        move: {row: 0, col: -1},
      } , {
        check:  [this.east, this.northEast, this.southEast],
        move: {row: 0, col: +1},
      }
    ];
    this.round = 0;
  }

  expand(amount) {
    const rowAirPadding = Array(this.grid[0].length).fill(this.air);
    // expand rows
    for (let i = 0; i < amount; i++) {
      this.grid.unshift([...rowAirPadding]);
      this.grid.push([...rowAirPadding]);
    }
    // expand columns
    const colAirPadding = Array(amount).fill(this.air);
    for (const [rowInd, row] of this.grid.entries()) {
      this.grid[rowInd] = [...colAirPadding, ...row, ...colAirPadding];
    }
  }

  shrink() {
    // remove air only line
    while  (this.grid[0].every(cell => cell === this.air)) {
      this.grid.shift();
    }
    while  (this.grid[this.grid.length - 1].every(cell => cell === this.air)) {
      this.grid.pop();
    }
    // remove  air only column
    while (this.grid.every(row => row[0] === this.air )) {
      for (const row of this.grid) {
        row.shift();
      }
    }
    while (this.grid.every(row => row[row.length-1] === this.air )) {
      for (const row of this.grid) {
        row.pop();
      }
    }
  }

  getCell({row, col}) {
    return this.grid[row][col];
  }

  hash({row, col}) {
    return `${row}:${col}`;
  }

  unhash(key) {
    const [row, col] = key.split(':').map(Number);
    return {row, col};
  }

  makeRound() {
    const destinations = new Map();
    for (let row = 0; row < this.grid.length; row++) {
      for (let col = 0; col < this.grid[0].length; col++) {
        const cell = {row, col};

        // apply rule only for the elves
        if (this.getCell(cell) != this.elf) continue;

        const neighboorhood = this.getMooreNeighboorhood(cell);
        if (this.countElvesInCells(neighboorhood) === 0) continue;

        // The Elf looks in each of four directions in the following order and proposes moving one step in the first valid direction
        for (const direction of this.directionsCheckOrders) {
          const neighborsToCheck =  neighboorhood.filter((_, i) => direction.check.includes(i));
          if (this.countElvesInCells(neighborsToCheck) != 0) continue;
          const destKey = this.hash({
            row: row + direction.move.row,
            col: col + direction.move.col,
          })
          if (destinations.has(destKey)) {
            destinations.get(destKey).push(cell);
          } else {
            destinations.set(destKey, [cell]);
          }
          break;
        }
      }
    }

    this.round++;

    let atLeastOneElfMoved = false;
    for (const [key, cameFrom] of destinations.entries()) {
      if (cameFrom.length != 1) continue;
      atLeastOneElfMoved = true;
      const origin = cameFrom[0];
      const dest = this.unhash(key);
      this.grid[origin.row][origin.col] = this.air;
      this.grid[dest.row][dest.col] = this.elf;
    }

    if (!atLeastOneElfMoved) return false;

    this.directionsCheckOrders.push(this.directionsCheckOrders.shift());
    return true;
  }

  countElvesInCells(cells){
    let count = 0;
    for (const cell of cells) {
      if (this.getCell(cell) === this.elf) count++;
    }
    return count;
  }

  getMooreNeighboorhood({row, col}) {
    return [
      {row: row - 1, col}, // north
      {row: row - 1, col: col + 1}, // north-east
      {row, col: col + 1}, // east
      {row: row + 1, col: col + 1}, // south-east
      {row: row + 1, col}, // south
      {row: row + 1, col: col - 1}, // south-west
      {row, col: col - 1}, // west
      {row: row - 1, col: col - 1}, // north-west
    ];
  }

}

// part 1
const grid = input.split('\n').map(row => [...row]);

const automaton = new ElvesAutomaton(grid);
automaton.expand(10);
for (let round = 0; round < 10; round++) {
  automaton.makeRound();
}
automaton.shrink();
console.log(automaton.grid.flat(1).filter(cell => cell === automaton.air).length);

// part 2
const automaton2 = new ElvesAutomaton(grid);
automaton2.expand(70);
while (automaton.makeRound());
console.log(automaton.round);