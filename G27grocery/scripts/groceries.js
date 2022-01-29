	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Bread ($2.35)",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 2.35
	},
	{
		name: "Brocoli - Inorganic ($1.99)",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 2.99
	},
	{
		name: "Brocoli - Organic ($2.99)",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 2.99
	},

	{
		name: "Chicken wings ($5.00)",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 5.00
	},
	{
		name: "Milk ($1.50)",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 1.50
	},
	{
		name: "Rasberries - Organic ($7.50)",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 7.50
	},
	{
		name: "Rasberries - Inorganic ($5.50)",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 5.50
	},
	{
		name: "Salmon ($10.00)",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 10.00
	},
	{
		name: "Strawberries - Inorganic ($5.00)",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 5.00
	},
	{
		name: "Strawberries - Organic ($7.00)",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 7.00
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts1(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {

		// if(restriction == "no"){
		// 	product_names.push(prods[i].name);
		// }

		if( (restriction == "Both") && (prods[i].vegetarian == true) && (prods[i].glutenFree == true) ){
			product_names.push(prods[i].name);
		}

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

function restrictListProducts2(prods, restriction1, restriction2) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {

		if( (restriction2 == "no") && (prods[i].organic == true) ){
		 	continue;
		}

		if( (restriction1 == "Both") && (prods[i].vegetarian == true) && (prods[i].glutenFree == true) ){
			product_names.push(prods[i].name);
		}

		if ((restriction1 == "Vegetarian") && (prods[i].vegetarian == true) ){
			product_names.push(prods[i].name);
		}
		else if ((restriction1 == "GlutenFree") && (prods[i].glutenFree == true) ){
			product_names.push(prods[i].name);
		}
		else if (restriction1 == "None") {
			product_names.push(prods[i].name);
		}
		
	}
	return product_names;
}

function resetRadio(){
	document.getElementById("no").checked = false;
	document.getElementById("yes").checked = true;
}

function lucie(){
	var body = document.getElementsByTagName('body')[0];
	var name = document.getElementById('fname').value;
	if(name == "Lucie"){
		body.style.fontSize = "150%";
	}
	document.getElementById('hi').innerHTML="Hi " + name + "!";
	
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
