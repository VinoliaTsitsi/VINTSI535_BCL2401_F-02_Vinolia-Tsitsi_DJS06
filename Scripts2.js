
// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]; 

products.forEach(product => {
    console.log(product.product); 
}); 

const filteredProducts = products.filter(product => product.product.length <= 5); 

console.log(filteredProducts); 



