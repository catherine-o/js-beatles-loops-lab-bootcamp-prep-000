function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (let i = 0; i < 4; i++) {
   array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  
  return array;
}


function johnLennonFacts(facts) {
  var arrayTwo = [];
  let i = 0;
  while (i < facts.length) {
    arrayTwo.push(`${facts[i]}!!!`);
    i++;
  }
  
  return arrayTwo;
}


function iLoveTheBeatles(num) {
  var arrayThree = [];
  let i = 0;
  do {
    arrayThree.push("I love the Beatles!");
    i++;
  } while (i < 15);
  
  return arrayThree;
}