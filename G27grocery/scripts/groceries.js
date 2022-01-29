	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "A loaf of bread ($2.35)",
		vegetarian: true,
		glutenFree: false,
		organic: true,
		price: 2.35
	},
	{
		name: "200g organic brocoli ($2.99)",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 2.99
	},
	{
		name: "200g inorganic brocoli ($1.99)",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 2.99
	},
	{
		name: "50g chicken wings ($5.00)",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price: 5.00
	},
	{
		name: "2L of milk ($1.50)",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 1.50
	},
	{
		name: "Box of organic rasberries ($7.50)",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 7.50
	},
	{
		name: "Box of inorganic rasberries ($5.50)",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 5.50
	},
	{
		name: "100g salmon ($10.00)",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price: 10.00
	},
	{
		name: "Box of organic strawberries ($7.00)",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 7.00
	},
	{
		name: "Box of inorganic strawberries ($5.00)",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 5.00
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {

		// if(restriction == "no"){
		// 	product_names.push(prods[i].name);
		// }

		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true) ){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true) ){
			product_names.push(prods[i].name);
		}
		else if (restriction == "None") {
			product_names.push(prods[i].name);
		}
		
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
