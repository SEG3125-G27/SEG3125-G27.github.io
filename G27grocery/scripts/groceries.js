	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "200g brocoli ($1.99)",
		vegetarian: true,
		glutenFree: true,
		price: 1.99
	},
	{
		name: "A loaf of bread ($2.35)",
		vegetarian: true,
		glutenFree: false,
		price: 2.35
	},
	{
		name: "100g salmon ($10.00)",
		vegetarian: false,
		glutenFree: true,
		price: 10.00
	},
	{
		name: "50g chicken pizza ($8.00)",
		vegetarian: false,
		glutenFree: false,
		price: 8.00
	}, 
	{
		name: "50g cheese pizza ($6.50)",
		vegetarian: true,
		glutenFree: false,
		price: 6.50
	}, 
	{
		name: "Box of strawberries ($5.00)",
		vegetarian: true,
		glutenFree: true,
		price: 5.00
	},
	{
		name: "Box of rasberries ($5.50)",
		vegetarian: true,
		glutenFree: true,
		price: 5.50
	},
	{
		name: "Box of cookies ($2.99)",
		vegetarian: true,
		glutenFree: false,
		price: 2.99
	},
	{
		name: "50g chicken wings ($5.00)",
		vegetarian: false,
		glutenFree: true,
		price: 5.00
	},
	{
		name: "2L of milk ($1.50)",
		vegetarian: true,
		glutenFree: true,
		price: 1.50
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			product_names.push(prods[i].name);
		}
		else if (restriction == "None"){
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
