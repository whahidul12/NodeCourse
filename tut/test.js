function detectType(value) {
  return Object.prototype.toString.call(value).slice(8, -1);
}


myObj = {
  name: 'whahid',
  status: 'alive',
  time: 12
}

myArr = ['a', 'b', 'c', 'd', 'e']

for (const x of myArr) {
  console.log(x);
}
for (const x of Object.entries(myObj)) {
  console.log(x);
  console.log(detectType(x));
}
console.log(detectType(myArr));

console.log(toString.call('1,2,3'));

