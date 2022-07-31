// Task: luke_relations

const mapper = {
  'Darth Vader': 'father',
  'Leia': 'sister',
  'R2D2': 'droid',
  'Han': 'brother in law',
};

const solution1 = (person) => `Luke, I am your ${mapper[person]}.`;

console.log(solution1('Leia'));

// Task: squares_and_cubes

const solution2 = (first, second) => {
  const sqrt = Math.sqrt(first);
  const cbrt = Math.cbrt(second);

  if (sqrt === cbrt) {
    return true;
  }

  return false;
};

console.log(solution2(4, 8));

// Task: smallest_second_number

const solution3 = (numbers) => {
  const sort = numbers.sort((a, b) => a - b);
  return sort[1];
};

console.log(solution3([1, 2, 3]));

// Task: minmax_find

const solution4 = (numbers) => [Math.min(...numbers), Math.max(...numbers)];

console.log(solution4([-3, 2, 10, 22]));

// Закончил на 31.07 14:02
