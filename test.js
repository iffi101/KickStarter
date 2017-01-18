var animals = [
  { name: 'adog',  type: 'dog', age: 12 },
  { name: 'anotherDog',   type: 'cat', age: 14 },
  { name: 'dog3', type: 'dog', age: 4 },
  { name: 'goodDog',     type: 'dog', age: 11 },
];
var oldDogNames = animals
  .filter(function(animal) {
    return animal.age > 10 && animal.type === 'dog';
  })
  .map(function(animal) {
    return animal.name;
  });
  
  
      function findLength(str) { return str.length 
	  };
     
     var lengths = ["cat", "it", "banana", "fish", "do", "dodo"].map(findLength);
     console.log(lengths); // [3, 2, 6, 4, 2, 4]
	 
	 
	 
	 