const foo = { name: "Muhsin", age: 27 };
const bar = { name: "Albert", age: 23 };
const baz = { name: "John", age: 32 };

//  Computed Property Names
//Bad code
console.log(foo);
console.log(bar);
console.log(baz);

//Good Code
console.log({ foo, bar, baz });

//  With custom css
console.log("%c " + foo.name);

//  With the table
console.table([foo, bar, baz]);

//  Destructuring
const cat = {
  name: "Tekir",
  legs: "4"
};
//Bad Code
function animalInfo(cat) {
  return `${cat.name} has ${cat.legs} legs`;
}
//Good Code
function animalInfo({ name, legs }) {
  return `${name} has ${legs} legs`;
}
//Or
function animalInfo(cat) {
  const { name, legs } = animal;
  return `${name} has ${legs} legs`;
}

//  Template literals
const horse = {
  name: "Jojo",
  size: "large",
  skills: ["jousting", "racing"],
  age: 7
};
//Bad Code
let bio = horse.name + " is a " + horse.size;

//Good Code
const { name, size } = horse;
bio = `${name} is a ${size}`;
console.log(bio);

//   Advanced Tag Example
function horseAge(str, age) {
  const ageStr = age > 5 ? "old" : "young";
  return `${str[0]}${ageStr} at ${age} years`;
}
const bio2 = horseAge`This horse is ${horse.age}`;
console.log(bio2);

//   Spread Syntax
const pikachu = { name: "Pikachu" };
const stats = { hp: 20, attack: 80, defense: 30 };

//Bad Code
pikachu["hp"] = stats.hp;
pikachu["attack"] = stats.attack;
pikachu["defense"] = stats.defense;
//  OR
const lv0 = Object.assign(pikachu, stats);
const lv1 = Object.assign(pikachu, { hp: 57 });

//Good Code
const lvl0 = { ...pikachu, ...stats };
const lvl0 = { ...pikachu, hp: 57 };

//   Arrays
let pokemon = ["Arbok", "Raichu", "Sandshrew"];
//Bad Code
pokemon.push("Bulbasaur");
pokemon.push("Metapod");
pokemon.push("Weedle");

//Good code
//  Push
pokemon = [...pokemon, "Bulbasaur", "Metapod", "Weedle"];
//  Shift
pokemon = ["Bulbasaur", "Metapod", "Weedle", ...pokemon];

//  Loops
const orders = [500, 30, 99, 55, 54, 734];
//Bad Code
const total = 0;
const withTax = [];
const highValue = [];
for (i = 0; i < orders.length; i++) {
  //  Reduce
  total += orders[i];
  //  Map
  withTax.push(orders[i] * 1.1);
  //  Filter
  if (orders[i] > 100) {
    highValue.push(orders[i]);
  }
}
//Good Code
//  Reduce
const total = orders.reduce((acc, cur) => acc + cur);
//  Map
const withTax = orders.map(v => v * 1.1);
//  Filter
const highValue = orders.filter(v => v > 100);

//   Async & Await
const random = () => {
  return Promise.resolve(Math.random());
};

//Bad Code
const sumRandomAsyncNums = () => {
  let first;
  let second;
  let third;

  return random()
    .then(v => {
      first = v;
      return random();
    })
    .then(v => {
      second = v;
      return random();
    })
    .then(v => {
      third = v;
      return first + second + third;
    });
};
//Good Code
const sumRandomAsyncNums = async () => {
  const first = await random();
  const second = await random();
  const third = await random();
  console.log(`Result ${first + second + third}`);

  if (await random()) {
  }

  const randos = Promise.all([random(), random(), random()]);

  for (const r of await randos) {
  }
};
