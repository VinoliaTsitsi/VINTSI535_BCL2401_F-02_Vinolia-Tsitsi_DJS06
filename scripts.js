// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']


// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie'] 

names.forEach((name, index) => {
  console.log (`${name} (${provinces[index]})`)
 }); 

 const uppercaseProvinces = provinces.map(province => province.toUpperCase()); 

 console.log(uppercaseProvinces); 



/*
// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

*/