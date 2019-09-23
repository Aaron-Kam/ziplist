function zipList(data1, data2) {
  let output = [];
  for(let i = 0; i < data1.length; i++) {
    output.push(data1[i]);
    output.push(data2[i]);
  }
  return output;
}

function zipListTheSimpleWay(data1,data2) {
  return _.flatten(_.zip(data1,data2));
}



let thing = [1,2,3,4,5];
let dood = ['a', 'b', 'c', 'd', 'e'];

console.log(zipList(thing, dood));
console.log(zipListTheSimpleWay(thing, dood));