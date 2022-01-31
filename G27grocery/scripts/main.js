
// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp

function openInfo(evt, tabName) {

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";

}

// function openInfo(evt, tabName) {
// 	var i, tabcontent, tablinks;
// 	tabcontent = document.getElementsByClassName("tabcontent");
// 	for (i = 0; i < tabcontent.length; i++) {
// 	  tabcontent[i].style.display = "none";
// 	}
// 	tablinks = document.getElementsByClassName("tablinks");
// 	for (i = 0; i < tablinks.length; i++) {
// 	  tablinks[i].className = tablinks[i].className.replace(" active", "");
// 	}
// 	document.getElementById(tabName).style.display = "block";
// 	evt.currentTarget.className += " active";
//   }


	
// generate a dropdown list from a list of products
// it makes each product name as the label for the dropdown list.

function populateListProductChoices1(slct1, slct2) {
    var s1 = document.getElementById(slct1);
    var s2 = document.getElementById(slct2);
	
	// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
    s2.innerHTML = "";
		
	// obtain a reduced list of products based on restrictions
    var optionArray = restrictListProducts1(products, s1.value);

	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
	// <img src="images/bread.jpg" alt="bread"/>
	// <label for="Bread">Bread</label><br>
		
	for (i = 0; i < optionArray.length; i++) {

		// Get and display the image
		var img = document.createElement('img');
		img.src = optionArray[i].image;
		img.alt = productName;
		img.height = 200;
		img.width = 200;
		s2.appendChild(img);

		s2.appendChild(document.createElement("br")); 
		s2.appendChild(document.createElement("br")); 

		var productName = optionArray[i].name;
		
		s2.appendChild(document.createElement("br"));
		s2.appendChild(document.createElement("br"));

		// create a label for the checkbox, and also add in HTML DOM
		var label = document.createElement('label')
		label.htmlFor = productName;
		label.appendChild(document.createTextNode(productName));
		s2.appendChild(label);

		s2.appendChild(document.createElement("br"));
		s2.appendChild(document.createElement("br"));

		// create the Selection and add in HTML DOM
		var selecter = document.createElement("select");
		selecter.id = "quantity";
		selecter.name = productName;
		selecter.title = "products";
		var option1 = document.createElement("option");
		var option2 = document.createElement("option");
		var option3 = document.createElement("option");
		var option4 = document.createElement("option");
		var option5 = document.createElement("option");
		var option6 = document.createElement("option");

		option1.setAttribute("value", "quantity");
		option1.appendChild(document.createTextNode("Quantity"));
		selecter.appendChild(option1);	

		option2.setAttribute("value", 1);
		option2.appendChild(document.createTextNode("1"));
		selecter.appendChild(option2);

		option3.setAttribute("value", 2);
		option3.appendChild(document.createTextNode("2"));
		selecter.appendChild(option3);	

		option4.setAttribute("value", 3);
		option4.appendChild(document.createTextNode("3"));
		selecter.appendChild(option4);
		
		option5.setAttribute("value", 4);
		option5.appendChild(document.createTextNode("4"));
		selecter.appendChild(option5);

		option6.setAttribute("value", 5);
		option6.appendChild(document.createTextNode("5"));
		selecter.appendChild(option6);

		s2.appendChild(selecter);

		// create a breakline node and add in HTML DOM
		s2.appendChild(document.createElement("br"));     
		s2.appendChild(document.createElement("br"));     
	}
}

function populateListProductChoices2(slct1, slct2, slct3) {
    var s1 = document.getElementById(slct1);
    var s2 = document.getElementById(slct2);
	var s3 = document.getElementById(slct3);
	
	// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
    s2.innerHTML = "";
		
	// obtain a reduced list of products based on restrictions
    var optionArray = restrictListProducts2(products, s1.value, s3.value);

	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
	// <label for="Bread">Bread/label><br>
		
	for (i = 0; i < optionArray.length; i++) {
		
		var img = document.createElement('img');
		img.src = optionArray[i].image;
		img.alt = productName;
		img.height = 200;
		img.width = 200;
		s2.appendChild(img);
			
		var productName = optionArray[i].name;
		
		s2.appendChild(document.createElement("br"));
		s2.appendChild(document.createElement("br"));
		
		// create a label for the checkbox, and also add in HTML DOM
		var label = document.createElement('label')
		label.htmlFor = productName;
		label.appendChild(document.createTextNode(productName));
		s2.appendChild(label);

		s2.appendChild(document.createElement("br"));
		s2.appendChild(document.createElement("br"));

		// create the Selection and add in HTML DOM
		var selecter = document.createElement("select");
		selecter.id = "quantity";
		selecter.name = productName;
		selecter.title = "products";
		var option1 = document.createElement("option");
		var option2 = document.createElement("option");
		var option3 = document.createElement("option");
		var option4 = document.createElement("option");
		var option5 = document.createElement("option");
		var option6 = document.createElement("option");

		option1.setAttribute("value", "quantity");
		option1.appendChild(document.createTextNode("Quantity"));
		selecter.appendChild(option1);	

		option2.setAttribute("value", 1);
		option2.appendChild(document.createTextNode("1"));
		selecter.appendChild(option2);

		option3.setAttribute("value", 2);
		option3.appendChild(document.createTextNode("2"));
		selecter.appendChild(option3);	

		option4.setAttribute("value", 3);
		option4.appendChild(document.createTextNode("3"));
		selecter.appendChild(option4);
				
		option5.setAttribute("value", 4);
		option5.appendChild(document.createTextNode("4"));
		selecter.appendChild(option5);

		option6.setAttribute("value", 5);
		option6.appendChild(document.createTextNode("5"));
		selecter.appendChild(option6);

		s2.appendChild(selecter);

		// create a breakline node and add in HTML DOM
		s2.appendChild(document.createElement("br"));     
		s2.appendChild(document.createElement("br")); 
		
		// create a breakline node and add in HTML DOM
		s2.appendChild(document.createElement("br"));    
	}
}
	
// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems(){
	
	var ele = document.querySelectorAll('select#quantity');
	var chosenProducts = [];
	var productQuantity = [];

	var c = document.getElementById('displayCart');
	c.innerHTML = "";

	// build list of selected item
	var para = document.createElement("P");
	para.innerHTML = "You selected : ";
	para.appendChild(document.createElement("br"));
	for (i = 0; i < ele.length; i++) { 

		if (ele[i].value > 0) {
			para.appendChild(document.createTextNode(ele[i].value + "x ")); 
			para.appendChild(document.createTextNode(ele[i].name));
			para.appendChild(document.createElement("br"));
			chosenProducts.push(ele[i].name);
			productQuantity.push(ele[i].value);
		}
	}	

	// add paragraph and total price
	c.appendChild(para);
	c.appendChild(document.createTextNode("Total Price is $" + getTotalPrice(chosenProducts, productQuantity)));
		
}
