
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

//3. Price Manipulation
console.log("\nAdvanced 3. Price Manipulation:");
const totalPrice = products
 .filter((product) => String(product.price).trim() !== "") //Convert to string before trimming
 .map((product) => parseFloat(product.price) || 0) //Handle possible NaN values
 .reduce((acc, price) => acc + price, 0);
console.log("Total Price:", totalPrice);

//4. Concatenate Product Name
console.log("\nAdvanced 4. Concatenate Product Names:");
const concatenatedNames = products
 .reduce((acc, product) => acc + " " + product.product, "")
 .trim();
console.log(concatenatedNames);

// 5. Find Extremes in Prices
console.log("\nAdvanced 5. Find Extremes in Prices:");
const validPrices = products
 .filter((product) => String(product.price).trim() !== "") // Convert to string before trimming
 .map((product) => parseFloat(product.price));
const highestPrice = Math.max(...validPrices);
const lowestPrice = Math.min(...validPrices);
console.log(`Highest: ${highestPrice}. Lowest: ${lowestPrice}.`);

// 6. Object Transformation
console.log("\nAdvanced 6. Object Transformation:");
const transformedProducts = products.reduce((acc, product) => {
 if (String(product.price).trim() !== "") {
  // Convert to string before trimming
  acc[product.product] = {
   name: product.product,
   cost: parseFloat(product.price),
  };
 }
 return acc;
}, {});
console.log(transformedProducts);