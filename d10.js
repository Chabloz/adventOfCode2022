const input = `noop
addx 7
addx -1
addx -1
addx 5
noop
noop
addx 1
addx 3
addx 2
noop
addx 2
addx 5
addx 2
addx 10
addx -9
addx 4
noop
noop
noop
addx 3
addx 5
addx -40
addx 26
addx -23
addx 2
addx 5
addx 26
addx -35
addx 12
addx 2
addx 17
addx -10
addx 3
noop
addx 2
addx 3
noop
addx 2
addx 3
noop
addx 2
addx 2
addx -39
noop
addx 15
addx -12
addx 2
addx 10
noop
addx -1
addx -2
noop
addx 5
noop
addx 5
noop
noop
addx 1
addx 4
addx -25
addx 26
addx 2
addx 5
addx 2
noop
addx -3
addx -32
addx 1
addx 4
addx -2
addx 3
noop
noop
addx 3
noop
addx 6
addx -17
addx 27
addx -7
addx 5
addx 2
addx 3
addx -2
addx 4
noop
noop
addx 5
addx 2
addx -39
noop
noop
addx 2
addx 5
addx 3
addx -2
addx 2
addx 11
addx -4
addx -5
noop
addx 10
addx -18
addx 19
addx 2
addx 5
addx 2
addx 2
addx 3
addx -2
addx 2
addx -37
noop
addx 5
addx 4
addx -1
noop
addx 4
noop
noop
addx 1
addx 4
noop
addx 1
addx 2
noop
addx 3
addx 5
noop
addx -3
addx 5
addx 5
addx 2
addx 3
noop
addx -32
noop`;

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
