const input = `abccccccccccccccccccccaaaaaaaacccccccccccccaacaaaaacccccccccccccccccccccaaaaaacccccaaaaaccccccccccccccccccccaaaccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaa\nabcccccccccccccccccccaaaaaaaaacccccccccccccaaaaaaaaccccccccccccccaacccccaaaaaaaaaaaaaaaaccccccccccccccccccccaaaccccccccccccccccccccccccaccaccccccccccccccccccccccccccccaaaaaa\nabccccccccccccccccccaaaaaaaaaacccccaacccccccaaaaaccccccccccccccaaaaaacccaaaaaaaaaaaaaaaaccccccccccccccccccaacaaaaacccccccccccccccccccccaaaaccccccccccccccccccccccccccccaaaaaa\nabccccccccccaaacaaacaaacaaacccccacaaaccccccccaaaaacccccccccccccaaaaaacaaaaaaaaaaaaaaaaaaccccccccccccccccccaaaaaaaaccccccccccccccccccccaaaaaccccccccaaaccccaaaccccccccccaaacaa\nabccccccccaaaaaccaaaaaccaaaccccaaaaaaaacccccaaacaaccccccccccccccaaaaccaaaaaaaaccccaaaaaacccccccccccccccccccaaaaaccccccccccccccccccccccaaaaaacccccccaaaacccaaaccccccccccccccaa\nabccccccccaaaaaaccaaaaaaaaaaaccaaaaaaaaccccccaacccccccccccccccccaaaacaaaacaaaacccccaaacccccccaacaaccccccccccaaaaacccaaccccccccccccccccaaaaaaccccccccaaaaaaaacccccccccccccccaa\nabccccccccaaaaaaaaaaaaaaaaaaacccaaaaaaccccccccccccccccccccccccccaccaccccccaaaaaccccccccccccccaaaaacccccccccaaacaacaaaaaaccccccccccccccccaacccccccckkkkkkaaaaccccccccccccccccc\nabccccccccaaaaacaaaaaccaaaaaaaacaaaaaccccccccccccccccccccccccccccccccccccccaaaccccccccccccccccaaaaacccccccccaaccccaaaaaaccccccccccccccccccccccccckkkkkkklaaccccccccaacccccccc\nabccccccccaaaaacaacaaacaaaaaaaacaaaaaacccccccccccccccccccccaacccccccccccccccaaaccccccccccccccaaaaaacccccccccccccccaaaaaacccccccccccccccccccccccckkkkkkkklllccccccccccaaaacccc\nabcaaccccccccccccccaaaccaaaaaaaccccaaccccccccccccccccccaaccaacccccccccccccccccccaacccccccccccaaaacccccccccccccccccaaaaacccccccaaaacccccccccccccckkkoppppllllllccccccccaaccccc\nabcaacccccccccccccccccccaaaaaccccccccccccccccccccccccccaaaaaacccccccccccccccccaaaaaacccccccccccaaccccccccccccccccccaaaacccccccaaaaacccccccccccckkkooppppplllllllllccccdaccccc\nabaaaccccccaaacccccccccaaaaaaccccccccaaaccccccccccccccccaaaaaaacccccccccccccccaaaaaacccccccccccccccccccccccccccccccccccccccccaaaaaaccccccccccccjkoooopuppplllllllmmmddddacccc\nabaaaaaccccaaaaacccccccccccaaaaacccccaaaaccccccccccccccccaaaaaaccccccccccccccccaaaacccccccccccccccccaaaccccccccccccccccccccccaaaaaacccccccccccjjjooouuuuppppppqqmmmmmdddacccc\nabaaaaacccaaaaaacccaacaaacccaaaaaacccaaaacccccccccccccccaaaaaccccccccccaaccccccaaaaccccccaacccccacccaaccccccccccaacaaccccccccaaaaaacccaaaccccjjjjoouuuuuuppppqqqqqmmmdddacccc\nabaaccacccaaaaaacccaaaaaacccaaaaaacccaaacccccccccccccccaaaaaaccccccccaaaaaaccccaccacccccaaaacccaaaaaaaccccccccccaaaaaccccccccccaacacccaaccccjjjjooouuuxuuupppqqqqqmmmdddccccc\nabaaaccccccaaaaacccaaaaaacccaaaaaccccccccccccccccccccccccccaaccccccccaaaaaacccccccccccccaaaaccccaaaaaaaaccccccccaaaaaaccccccccccccaaaaaaacjjjjjoooouuxxxuuvvvvvvqqqmmdddccccc\nabaaaccccccaacaacccaaaaaaacccaaaaacccccccccccccccaaacccccccccccccccccaaaaaccccaaacccccccaaaaccccaaaaaaaaacccccccaaaaaaccccccccccccaaaaaacjjjjjoooouuuxxxuuvvvvvvqqqmmdddccccc\nabccccccccccccccccaaaaaaaacccaaaaacccccccccccccccaaaccccccccccccccccccaaaaacccaaacacccccccccccccaaaaaaaaacccccccaaaaaccccccaacccccaaaaaaajjjnoooottuuxxxxvyyyvvvqqmmmdddccccc\nabccccccccccccccccaaaaaaaacccccccccccccccccaaaaaaaaaccaaccccccccccccccaaaaacaacaaaaaccccccccccccaaaaaaaaccccccccccaaacccccaaaaccccaaaaaajjjnnnntttttxxxxyyyyyvvvqqmmmdddccccc\nabccccccaaaccccccccccaaacccaaccccccccccccccaaaaaaaaaaaaaaaccccccccaaacccccccaaaaaaaacccccccccccaaaaaaaaccccccccccccaacccccaaaaacacaaaaaaiiinnntttxxxxxxxyyyyyvvqqqmmdddcccccc\nSbccccccaaaaaccccccccaaccccaaaccccccccccccccaaaaaaaaaaaaaacccccccaaaaaaccccccaaaaaccccccccacccaaaccaaacccccccccaaacaaccaaaaaaaaaaaaaaaaaiiinnntttxxxEzzzzyyyvvqqqmmmeeecccccc\nabcccccaaaaaacccccccccccaaaaaaaaccccccccccccaaaaaaaaaaaaaccccccccaaaaaacccccccaaaaacccccccaacaaaccccaaacccccccccaaaaaccaaaaaaaaaacaccaaaiiinnntttxxxxxyyyyyvvvqqqnnneeecccccc\nabaacccaaaaaacccccccccccaaaaaaaaccccaaaccccaaaaaaaaaaaaaaacccccccaaaaaccccccccaacaaaaaccccaaaaacccccccccccccccccaaaaaaaccaaaaaacccccccaaiiinnnttttxxxxyyyyyyvvvrrnnneeecccccc\nabaaaaaaaaaaaccccccccccccaaaaaaccccaaaacccaaaaaaaaaaaaacaaccccccccaaaaacccccccaaccccaaaacccaaaaaacaacaaccccccccaaaaaaaaccaaaaaaccccccccciiiinnnttttxxwyywyyyyvvrrrnneeecccccc\nabaaaaacaacaaccccccccccccaaaaaaccccaaaacccaaacaaaacaaaccccccccccccaacaaccccaacccccaaaaaacaaaaaaaacaaaaacccccaaaaaaaaaaaccaaaaaacccccccccciiiinnnttttwwyywwywwwvrrrnneeecccccc\nabaaaacccccccccccccccccccaaaaaacccccaaacccccccaaacccacaaccccccccccccccccccaaccccccaaaaaccaaaaaaaaaaaaaccccccaaaaaaaaacccaaaaaaaacccccccccciiinnnnntswwywwwwwwwwrrrnnneecccccc\nabaaaaaccccccccccccccccccaacaaacccccccccccccccaacaaacaaacccccccccccccccaaaaacaaccccaaaaaccccaacccaaaaaacccccaaacaaaaaccccacccccccaaacccccciiiiinnmsswwwwwswwwwrrrrnnneecccccc\nabaaaaaaccaaaccccccccccccccccccccccccccccccccccccaaaaaaaccccccccaaaccccaaaaaaaaccccaaccaccccaacccccaaaaccaaaaaaaaaaccccccccccccccaaaaacccccciihmmmsswwwwssrrrrrrrrnnneecccccc\nabaaccaacaaaaccccccccccccccccccccccccccccccccccccaaaaaacccccccccaaaaaccccaaaaacccccccccccccccccccccacccccaaaaaaaaacccccccaaccaacaaaaacccccccchhhmmssswwsssrrrrrrrnnneeecccccc\nabaacccccaaaacccccccccccccccccccccccccccccccccccccaaaaaaaacccccaaaaaacccaaaaacccccccccccccccccccccccccccccaaaaaaaccccccccaaaaaacaaaaacccccccchhhmmssssssslllllllnnnnfeecccccc\nabccccccccaaacccccccccccccccaaccccccccccccccaaaccaaaaaaaaacccccaaaaaacccaacaaaccccccccccccccccccccccccaacccaaaaaaccccccccaaaaacccaaaaaccccccchhhmmmssssslllllllllnnfffeaacccc\nabcccccccccccccccccccccccacaaaccccccccccccccaaaaaaaaaaaaaaccaaccaaaaaccccccaaccaacccccccccccccccccccccaaaccaaaaaaacccccccaaaaaaccaaccccccccccchhhmmmmsmllllllllllfffffaaacccc\nabccccccccccccccccccccccaaaaaaaaccccccccccccaaaaaaacaaacaaaaaaccaaaaccccccccccaaaacccccccccccccccccaaaaaaaaaaacaaaccccccaaaaaaaacccccccccccccchhhmmmmmmlllggfffffffffaacccccc\nabccccccccccccccccccccccaaaaaaaaccccccccccccaaacccccaaacaaaaacccccccccccaaacccaaaacccccccccccccccccaaaaaaaaaacccccccccccaaaaaaaaccccccccccccccchhhmmmmmlggggffffffffaaacccccc\nabccccccccccccccccaaaacccaaaaaacccccccccccccccccccccaaacaaaaaaccccccccccaaacccaaaaccccccacccccccccccaaaaaacccccccccccccccccaacccaaccccccccccccchhhhgmgggggggffaccccccaacccccc\nabccccccccccccccccaaaacccaaaaacccccccccccccccccccccccccaaaaaaaacccccccccaaaaccaaacccccccaaacaaacccccaaaaaacccccccccccccccccaaccaaccccccccccccccchhhgggggggaaaaacccccccccccccc\nabccccccccccccccccaaaacccaaaaaaccccccccccccccccccccccccaaaaaaaaccccccccccaaaaaaaaaccccccaaaaaaacccccaaaaaaccccccccccccccccccaaaaacaaccccccccccccchggggggaacccccccccccccccccca\nabcccccccccccccccccaacccccccaaccccccccccccccccccccccccccccaacaccaaacccaacaaaaaaaacccccccaaaaaaccccccaaccaacaaaccacccccaaccccaaaaaaaaccccccccccccccccccaaaccccccccccccccccccca\nabcccccaaccccccccccccccccaaccccccccaacccccccccaaacccccccccaacaaaaaacccaaacaaaaaacccccccaaaaaaacccccccccccccaaaaaacccaaaaccccccaaaaaccccaaacccccccccccccaaccccccccccccccaaaaaa\nabccccaaaacccccccccccccccaaaacccaaaaccccccccccaaaacccccccccccaaaaaaccaaaaaaaaaacccccccaaaaaaaaaaccccccccccccaaaaacccaaaaaacccaaaaacccccaaaacccccccccccaaccccccccccccccccaaaaa\nabccccaaaacccccccccccccaaaaaacccaaaaaaccccccccaaaaccccccccccaaaaaaaacaaaaaaaaaaaaaccccaaaaaaaaaaccccccccccaaaaaaaacccaaaaccccaacaaaccccaaaacccccccccccccccccccccccccccccaaaaa`;

function parseInput(input) {
  let from;
  let to;
  const lines = input.split(`\n`);
  const matrix = Array.from({length: lines.length}, () => []);
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < lines[0].length; col++) {
      const c = lines[row][col];
      if (c == 'S') {
        from = {row, col};
        matrix[row][col] = 0;
      } else if (c == 'E') {
        to = {row, col};
        matrix[row][col] = 25;
      } else {
        matrix[row][col] = c.charCodeAt(0) - 'a'.charCodeAt(0);
      }
    }
  }
  return {matrix, from, to};
}

// Breadth First Search BFS
function flowFieldTo(row, col) {
  const flowMap = new Map();
  // The flowMap is a map of coord to the coord of the next tile to go to
  // The frontier will store the cells who needs to be visited
  const frontier = [];
  // At the beginning, only the destination is in the frontier
  frontier.push({row, col});
  flowMap.set(`${row}:${col}`, {row, col});

  // While the frontier is not empty, we must continue to visit the cells inside it
  while (frontier.length > 0) {
    // We get the first cell of the frontier
    const cell = frontier.shift();
    // We get the neighbors of the cell
    const neighbors = getVonNeumannNeighborhood(cell.row, cell.col);
    // For each neighbor
    for (const neighbor of neighbors) {
      // Ignore allready visited cells
      if (flowMap.has(`${neighbor.row}:${neighbor.col}`)) continue;
      // Add the neighbor to the frontier
      frontier.push(neighbor);
      // Add the neighbor to the flowMap with the current cell as the next cell to go to
      flowMap.set(`${neighbor.row}:${neighbor.col}`, cell);
    }
  }
  // The destination is the final step. There is no destination from it.
  flowMap.delete(`${row}:${col}`);
  return flowMap;
}

function getVonNeumannNeighborhood(row, col) {
  return [
    {row: row + 1, col},
    {row: row - 1, col},
    {row: row, col: col - 1},
    {row: row, col: col + 1},
  ].filter(cell => isValidCoord(cell.row, cell.col))
   .filter(cell => isWalkableFrom(cell.row, cell.col, row, col));
}

function isValidCoord(row, col) {
  return row >= 0 && row < matrix.length && col >= 0 && col < matrix[0].length;
}

function isWalkableFrom(row, col, fromRow, fromCol) {
  return matrix[row][col] >= matrix[fromRow][fromCol] - 1;
}

function getPathFrom(row, col, flowMap) {
  const path = [];
  let target =  flowMap.get(`${row}:${col}`);
  while (target) {
    path.push(target);
    target =  flowMap.get(`${target.row}:${target.col}`);
  }
  return path;
}

const  {matrix, from, to} = parseInput(input);


// Part 1
// Breadth First Search
// https://www.redblobgames.com/pathfinding/a-star/introduction.html
const flowMap = flowFieldTo(to.row, to.col);
console.log(getPathFrom(from.row, from.col, flowMap).length);

// Part 2
let min = Infinity;
for (let row = 0; row < matrix.length; row++) {
  for (let col = 0; col < matrix[0].length; col++) {
    const elevation = matrix[row][col];
    if (elevation != 0) continue;
    const pathSize = getPathFrom(row, col, flowMap).length;
    if (pathSize < min && pathSize != 0) min = pathSize;
  }
}

console.log(min);