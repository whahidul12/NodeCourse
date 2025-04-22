myObj = {
  name: 'whahid',
  status: 'alive',
  time: 12
}

anotherObj = {}

for (let [key, value] of Object.entries(myObj)) {

  console.log(key, value);


}