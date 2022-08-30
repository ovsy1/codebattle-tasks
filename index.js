// Task: luke_relations

const mapper = {
  'Darth Vader': 'father',
  Leia: 'sister',
  R2D2: 'droid',
  Han: 'brother in law',
};

const solution1 = (person) => `Luke, I am your ${mapper[person]}.`;

console.log(solution1('Leia')); // "Luke, I am your sister."

// Task: squares_and_cubes

const solution2 = (first, second) => {
  const sqrt = Math.sqrt(first);
  const cbrt = Math.cbrt(second);

  if (sqrt === cbrt) {
    return true;
  }

  return false;
};

console.log(solution2(4, 8)); // true

// Task: smallest_second_number

const solution3 = (numbers) => {
  const sort = numbers.sort((a, b) => a - b);
  return sort[1];
};

console.log(solution3([1, 2, 3])); // 2

// Task: minmax_find

const solution4 = (numbers) => [Math.min(...numbers), Math.max(...numbers)];

console.log(solution4([-3, 2, 10, 22])); // -3 22

// Task: reverse_each_word

const solution5 = (s) => {
  let str = '';
  for (let i = s.length - 1; i >= 0; i -= 1) {
    str += s[i];
  }

  return str.split(' ').reverse().join(' ');
};

console.log(solution5('Hello there, and how are you?')); // "olleH ,ereht dna woh era ?uoy"

// Task: celsius_to_kelvin

const solution6 = (temperature) => temperature + 273;

console.log(solution6(35)); // 308

// Task: cube_sum

const solution7 = (num) => {
  let res = 0;
  for (let i = 0; i <= num; i++) {
    res += i ** 3;
  }

  return res;
};

console.log(solution7(20)); // 44100

// Task: fizzbuzz

const solution8 = (n) => {
  if (n % 3 === 0 && n % 5 === 0) return 'FizzBuzz';
  if (n % 3 === 0) return 'Fizz';
  if (n % 5 === 0) return 'Buzz';
  return '';
};

console.log(solution8(150)); // FizzBuzz

// Task: stickers_count

const solution9 = (num) => num * num * 6;

console.log(solution9(1)); // 6

// Task: max_abs_elem

const solution10 = (arr) => Math.max(...arr.map((item) => Math.abs(item)));

console.log(solution10([1, -2, 3, 4])); // 4

// Task: leap__year

const solution11 = (year) => {
  if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
    return true;
  }
};

console.log(solution11(2012)); // true
