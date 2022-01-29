
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Bread ($2.35)",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 2.35,
		image: "images/bread.jpg"
	},
	{
		name: "Brocoli - Inorganic ($1.99)",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 1.99,
		image: "images/broccoli-inorganic.jpg"
	},
	{
		name: "Brocoli - Organic ($2.99)",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 2.99,
		image: "images/broccoli-organic.jpg"
	},

	{
		name: "Chicken wings ($5.00)",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 5.00,
		image: "images/chicken-wings.jpg"
	},
	{
		name: "Milk ($1.50)",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 1.50,
		image: "images/milk.jpg"
	},
	{
		name: "Raspberries - Organic ($7.50)",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 7.50,
		image: "images/raspberries-organic.jpg"
	},
	{
		name: "Raspberries - Inorganic ($5.50)",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 5.50,
		image: "images/raspberries-inorganic.jpg"
	},
	{
		name: "Salmon ($10.00)",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 10.00,
		image: "images/salmon.jpg"
	},
	{
		name: "Strawberries - Inorganic ($5.00)",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 5.00,
		image: "images/strawberries-inorganic.jpg"
	},
	{
		name: "Strawberries - Organic ($7.00)",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 7.00,
		image: "images/strawberries-organic.jpg"
	}
];



// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts1(prods, restriction) {
	var products = [];
	for (let i = 0; i < prods.length; i += 1) {

		// if(restriction == "no"){
		// 	product_names.push(prods[i].name);
		// }

		if ((restriction == "Both") && (prods[i].vegetarian == true) && (prods[i].glutenFree == true)) {
			products.push(prods[i]);
		}

		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)) {
			products.push(prods[i]);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)) {
			products.push(prods[i]);
		}
		else if (restriction == "None") {
			products.push(prods[i]);
		}

	}
	return products;
}

function restrictListProducts2(prods, restriction1, restriction2) {
	var products = [];

	for (let i = 0; i < prods.length; i += 1) {
		if ((restriction2 == "no") && (prods[i].organic == true)) {
			continue;
		}
		if ((restriction1 == "Both") && (prods[i].vegetarian == true) && (prods[i].glutenFree == true)) {
			products.push(prods[i]);
		}
		if ((restriction1 == "Vegetarian") && (prods[i].vegetarian == true)) {
			products.push(prods[i]);
		}
		else if ((restriction1 == "GlutenFree") && (prods[i].glutenFree == true)) {
			products.push(prods[i]);
		}
		else if (restriction1 == "None") {
			products.push(prods[i]);
		}
	}
	return products;
}

function resetRadio() {
	document.getElementById("no").checked = false;
	document.getElementById("yes").checked = true;
}

function lucie() {
	var body = document.getElementsByTagName('body')[0];
	var name = document.getElementById('fname').value;
	if (name == "Lucie") {
		body.style.fontSize = "150%";
	}
	document.getElementById('hi').innerHTML = "Hi " + name + "!";

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