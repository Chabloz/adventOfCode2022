const input = `Monkey 0:\nStarting items: 64\nOperation: new = old * 7\nTest: divisible by 13\n  If true: throw to monkey 1\n  If false: throw to monkey 3\n\nMonkey 1:\nStarting items: 60, 84, 84, 65\nOperation: new = old + 7\nTest: divisible by 19\n  If true: throw to monkey 2\n  If false: throw to monkey 7\n\nMonkey 2:\nStarting items: 52, 67, 74, 88, 51, 61\nOperation: new = old * 3\nTest: divisible by 5\n  If true: throw to monkey 5\n  If false: throw to monkey 7\n\nMonkey 3:\nStarting items: 67, 72\nOperation: new = old + 3\nTest: divisible by 2\n  If true: throw to monkey 1\n  If false: throw to monkey 2\n\nMonkey 4:\nStarting items: 80, 79, 58, 77, 68, 74, 98, 64\nOperation: new = old * old\nTest: divisible by 17\n  If true: throw to monkey 6\n  If false: throw to monkey 0\n\nMonkey 5:\nStarting items: 62, 53, 61, 89, 86\nOperation: new = old + 8\nTest: divisible by 11\n  If true: throw to monkey 4\n  If false: throw to monkey 6\n\nMonkey 6:\nStarting items: 86, 89, 82\nOperation: new = old + 2\nTest: divisible by 7\n  If true: throw to monkey 3\n  If false: throw to monkey 0\n\nMonkey 7:\nStarting items: 92, 81, 70, 96, 69, 84, 83\nOperation: new = old + 4\nTest: divisible by 3\n  If true: throw to monkey 4\n  If false: throw to monkey 5`;

function parseOperation(opInput) {
  const dataOperation = opInput.slice(17).split(' ');
  const operator = dataOperation[1];
  const operand = Number(dataOperation[2]);
  return {operator, operand};
}

function parseInput(input) {
  const monkeys = [];
  for (const monkeyInput of input.split('\n\n')) {
    const monkeyData = monkeyInput.split('\n');
    const id = Number(monkeyData[0].match(/\d+/g));
    const items = monkeyData[1].match(/\d+/g).map(Number);
    const operation = parseOperation(monkeyData[2]);
    const multipleOf = Number(monkeyData[3].match(/\d+/g));
    const success = Number(monkeyData[4].match(/\d+/g));
    const failure = Number(monkeyData[5].match(/\d+/g));
    monkeys.push({id, items, operation, multipleOf, success, failure, inspections: 0});
  }
  return monkeys;
}

function doMonkeyOperation(operation, item) {
  const operand = isNaN(operation.operand) ? item : operation.operand;
  if (operation.operator === '*') {
    return item * operand;
  }
  if (operation.operator === '+') {
    return item + operand;
  }
}

function doMonkeyTurn(monkey, isPart1 = true) {
  for (let item of monkey.items) {
    monkey.inspections++;
    item = doMonkeyOperation(monkey.operation, item);
    // Relief that the monkey's inspection didn't damage the item
    if (isPart1) {
      item = Math.floor(item / 3);
    } else {
      item = item % lcm;
    }
    // Throw the item to the next monkey
    const targetMonkey = item % monkey.multipleOf == 0 ? monkey.success : monkey.failure;
    monkeys[targetMonkey].items.push(item);
  }
  monkey.items = [];
}


// Part 1
let monkeys = parseInput(input);

for (let round = 0; round < 20; round++) {
  for (const monkey of monkeys) {
    doMonkeyTurn(monkey);
  }
}

// Take only the two most active monkeys in consideration
monkeys.sort((m1, m2) => m2.inspections - m1.inspections);
console.log(monkeys[0].inspections * monkeys[1].inspections);

// Part 2

monkeys = parseInput(input);

// As we can see, all divisions are prime numbers
// So we can calculate the lcm of all divisions simply by multiplying them
// we do that because all monkey tests are only checking if the item is divisible
// so increasing the item value greater than the lcm will not change the result
// this will make the item "worry" value not going to infinity
const lcm = monkeys.reduce((acc, monkey) => acc * monkey.multipleOf, 1);

for (let round = 0; round < 10_000; round++) {
  for (const monkey of monkeys) {
    doMonkeyTurn(monkey, false);
  }
}

monkeys.sort((m1, m2) => m2.inspections - m1.inspections);
console.log(monkeys[0].inspections * monkeys[1].inspections);