const input = `noop\naddx 7\naddx -1\naddx -1\naddx 5\nnoop\nnoop\naddx 1\naddx 3\naddx 2\nnoop\naddx 2\naddx 5\naddx 2\naddx 10\naddx -9\naddx 4\nnoop\nnoop\nnoop\naddx 3\naddx 5\naddx -40\naddx 26\naddx -23\naddx 2\naddx 5\naddx 26\naddx -35\naddx 12\naddx 2\naddx 17\naddx -10\naddx 3\nnoop\naddx 2\naddx 3\nnoop\naddx 2\naddx 3\nnoop\naddx 2\naddx 2\naddx -39\nnoop\naddx 15\naddx -12\naddx 2\naddx 10\nnoop\naddx -1\naddx -2\nnoop\naddx 5\nnoop\naddx 5\nnoop\nnoop\naddx 1\naddx 4\naddx -25\naddx 26\naddx 2\naddx 5\naddx 2\nnoop\naddx -3\naddx -32\naddx 1\naddx 4\naddx -2\naddx 3\nnoop\nnoop\naddx 3\nnoop\naddx 6\naddx -17\naddx 27\naddx -7\naddx 5\naddx 2\naddx 3\naddx -2\naddx 4\nnoop\nnoop\naddx 5\naddx 2\naddx -39\nnoop\nnoop\naddx 2\naddx 5\naddx 3\naddx -2\naddx 2\naddx 11\naddx -4\naddx -5\nnoop\naddx 10\naddx -18\naddx 19\naddx 2\naddx 5\naddx 2\naddx 2\naddx 3\naddx -2\naddx 2\naddx -37\nnoop\naddx 5\naddx 4\naddx -1\nnoop\naddx 4\nnoop\nnoop\naddx 1\naddx 4\nnoop\naddx 1\naddx 2\nnoop\naddx 3\naddx 5\nnoop\naddx -3\naddx 5\naddx 5\naddx 2\naddx 3\nnoop\naddx -32\nnoop`;

class Cpu {

  constructor () {
    this.regX = 1;
    this.clock = 0;
    this.history = new Map();
  }

  tick() {
    this.clock++;
    this.history.set(this.clock, this.regX);
  }

  execute(cmd, arg) {
    if (cmd == 'addx') {
      this.addx(arg);
    } else if (cmd == 'noop') {
      this.noop();
    }
  }

  addx(value) {
    this.tick();
    this.tick();
    this.regX += value;
  }

  noop() {
    this.tick();
  }

  getRegxAt(clock) {
    return this.history.get(clock);
  }

}

const instructions = input
  .split('\n')
  .map(line => line.split(' '))
  .map(data => ({
    instr: data[0],
    arg: data[1] ? Number(data[1]) : null
  }));

// part 1
const cpu = new Cpu();

for (const cmd of instructions) {
  cpu.execute(cmd.instr, cmd.arg);
}

let sum = 0;
for (let clock = 20; clock <= 220; clock += 40) {
  sum += cpu.getRegxAt(clock) * clock;
}
console.log(sum);

//part 2
for (let row = 0; row < 6; row++) {
  let lineBuffer = '';
  for (let col = 0; col < 40; col++) {
    const clock = col + 1 + row * 40;
    lineBuffer += Math.abs(cpu.getRegxAt(clock) - col) < 2 ? '#' : ' ';
  }
  console.log(lineBuffer);
}
