// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']


// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie'] 

names.forEach((name, index) => {
  console.log (`${name} (${provinces[index]})`)

 }); 

 //writes the provinces in capital letters. 

 const uppercaseProvinces = provinces.map(province => province.toUpperCase()); 

 console.log(uppercaseProvinces);
 
 //Displays the length of the names in numbers. 

 const nameLengths = names.map(name => name.length);

 console.log(nameLengths);

 //Sorted the provinces alphabertically

 const sortedProvinces = [...provinces].sort(); 

 console.log(sortedProvinces);
 
 //Excluding provinces containg cape word then prints the number of the remaining provinces

 const noCapeProvinces = provinces.filter(province => !province.includes('Cape')); 

 console.log(noCapeProvinces.length); 

 //bollean array to determine if names have "S"
const namesContaingS = names.map(name => name.includes('S') || name.includes('s')); 

console.log(namesContaingS); 

//added the 

const namesWithRelevantProvince = names.reduce((acc, name, index) => {
  acc[name]=provinces[index]; 
  return acc; 
}, {}); 

console.log(namesWithRelevantProvince);