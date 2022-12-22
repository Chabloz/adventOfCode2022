const input = `        ...#
        .#..
        #...
        ....
...#.......#
........#...
..#....#....
..........#.
        ...#....
        .....#..
        .#......
        ......#.

10R5L5R10L4R5L5`;

const empty = ' ';
const air = '.';
const wall = '#';
const east = 0;
const south = 1;
const west = 2;
const north = 3;
const right = 'R';
const left = 'L';

function parseInput(input) {
  const [mazeInput, actionsInput] = input.split('\n\n');
  const maze = mazeInput.split('\n').map(row => [...row]);
  const maxRowLength = Math.max(...maze.map(row => row.length));

  for (const row of maze) {
    while (row.length < maxRowLength) row.push(empty);
  }
  const actions = actionsInput
    .replaceAll(/([RL])/g, ' $1 ')
    .split(' ')
    .map(nb => nb.match(/\d+/) ? Number(nb) : nb);
  const start = {row: 0, col: maze[0].indexOf('.')};
  const dir = east;
  return {maze, actions, start, dir};
}

function moduloEuclidian(op1, op2) {
  return ((op1 % op2) + op2) % op2;
}

class Maze {
  constructor({maze, actions, start, dir}) {
    this.maze = maze;
    this.actions = actions;
    this.current = start;
    this.dir = dir;
  }

  walk() {
    for (const action of this.actions) {
      if (typeof action === 'number') {
        this.moves(action);
      } else {
        this.turn(action);
      }
    }
  }

  turn(dir) {
    const step = dir == right ? +1 : -1;
    this.dir = moduloEuclidian(this.dir + step, 4);
  }

  moves(amount) {
    for (let i = 0; i < amount; i++) {
      this.move();
    }
  }

  move() {
    let nextPos = {...this.current};
    nextPos = this.moveInDir(nextPos);
    // for part 2: do the cube
    while (this.maze[nextPos.row][nextPos.col] === empty) {
      nextPos = this.moveInDir(nextPos);
    }
    if (this.maze[nextPos.row][nextPos.col] === wall) return;
    this.current = nextPos;
  }

  moveInDir(pos) {
    switch (this.dir) {
      case east: pos.col++; break;
      case west: pos.col--; break;
      case south: pos.row++; break;
      case north: pos.row--; break;
    }
    pos.row = moduloEuclidian(pos.row, this.maze.length);
    pos.col = moduloEuclidian(pos.col, this.maze[0].length);
    return pos;
  }

}

const maze = new Maze(parseInput(input));
maze.walk();
console.log((maze.current.row + 1) * 1000 + (maze.current.col + 1) * 4 + maze.dir);