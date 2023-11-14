const fruitList = [];

// Function called by pushing the button
function add() {
  // Creating the variables
  let fruit = document.getElementById("product").value;
  let price = Number(document.getElementById("price").value);

	// Checking that fruit variable is not empty
	if (fruit) {
	  // Adding product-price pair to products-list
		let listItem = {name: fruit, price: price};
    fruitList.push(listItem);

    // Calling for function to finding the cheapest and most expensive products
    const minMaxProducts = minMaxProduct(fruitList);

    // Calling for function to list the items on html page
    list(minMaxProducts);

    // Clearing the fields
    document.getElementById("product").value = "";
    document.getElementById("price").value = "";

    // Clearing the potential error message
		document.getElementById("msg").innerHTML = ""
	} else {
		document.getElementById("msg").innerHTML = "Please provide a product";
	}
}

function minMaxProduct(fList) {
	const products = [];

	// Finding the cheapest product
  let minProduct = fList.reduce(function(accumulator, currentValue){
    return (accumulator.price < currentValue.price ? accumulator : currentValue);
  });

  // Finding the most expensive product
  let maxProduct = fList.reduce(function(accumulator, currentValue){
      return (accumulator.price > currentValue.price ? accumulator : currentValue);
  });

	// Adding the cheapest & most expensive product to a list
	products.push(minProduct, maxProduct);

	return products;
}

function list(minMaxProducts) {
  // Variable where the list is written as string
  let listingFruits = "";

  // Listing the products
  fruitList.forEach(fruit =>
    listingFruits += "<li><strong>" + fruit.name + "</strong> (" + fruit.price + " euros)</li>"
  );

  // Listing the products on the html page
  document.getElementById("list").innerHTML = "<ul>" + listingFruits + "<p>The cheapest product is <strong>" + minMaxProducts[0].name + " (" + minMaxProducts[0].price + " euros)</strong></p><p>The most expensive product is <strong>" + minMaxProducts[1].name  + " (" + minMaxProducts[1].price + " euros)</strong>";
}