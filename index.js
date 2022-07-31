// Task: luke_relations

const mapper = {
  'Darth Vader': 'father',
  'Leia': 'sister',
  'R2D2': 'droid',
  'Han': 'brother in law',
}

const solution = (person) => {
  return `Luke, I am your ${mapper[person]}.`;
};