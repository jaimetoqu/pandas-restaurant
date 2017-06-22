// $ is the name of jquery function
// which is the same as document.addEventListener("DOMContentLoaded"..)
$(function () {

	// $ same as document.querySelector("#navbarToggle").addEventListener("blur",....)
	$("navbarToggle").blur(function (event) {
		var screenWidth = window.innerWidth; //is the width of the browser not the entire screen of monitor
		if (screenWidth < 768) {
			$("#collapsable-nav").collapse('hide');
			console.log("hello");
		}
	});

});

(function (global) {
	var dc = {};
	var homeHtml = "snippets/home-snippets.html";
	var allCategoriesUrl = "http://davids-restaurant.herokuapp.com/categories.json";
	var categoriesTitleHtml = "snippets/categories-title-snippet.html";
	var categoryHtml = "snippets/category-snippet.html";
	var menuItemsUrl = "http://davids-restaurant.herokuapp.com/menu_items.json?category=";
	var menuItemsTitleHtml = "snippets/menu-items-title.html";
	var menuItemHtml = "snippets/menu-items-title.html";

	//convinience function for inserting innerHTML for 'selector'
	var inserHtml = function (selector, html) {
		var targetElem = document.querySelector(selector);
		targetElem.innerHTML = html;
	};

	//Show loading icon inside element identified by 'selector'
	var showLoading = function (selector) {
		var html = "<div class='text-center'>";
		html += "<img src='images/ajax-loader.gif'></div>";
		inserHtml(selector, html);
	};

	var insertProperty = function (string, propName, propValue) {
		var propToReplace = "{{" + propName + "}}";
		string = string.replace(new RegExp(propToReplace, "g"), propValue);
		return string;
	};

	//On page load (before images or CSS)
	document.addEventListener("DOMContentLoaded", function (event) {

		//on first load, show home view, its going to place the ajax image
		showLoading("#main-content");
		$ajaxUtils.sendGetRequest(
			homeHtml,
			function (responseText) {
				document.querySelector("#main-content")
				  .innerHTML = responseText;
			},
			false); //dont preprocess this as json
	});

	//Load the menu categories view
	dc.loadMenuCategories = function () {
		showLoading("main-content");
		$ajaxUtils.sendGetRequest(
			allCategoriesUrl,
			buildAndShowCategoriesHTML);
	};

	//Load the menu items view
	//'categoryShort' is short_name for a category
	dc.loadMenuCategories = function (categoryShort) {
		showLoading("main-content");
		$ajaxUtils.sendGetRequest(
			menuItemsUrl + categoryShort, buildAndShowMenuItemsHtml);
	};

	//Build HTML for the categories page based on the data from the server
	function buildAndShowCategoriesHTML (categories) {
		// Load title snippet of categories page
		$ajaxUtils.sendGetRequest(
			categoriesTitleHtml,
			function (categoriesTitleHtml) {
				//Retrieve single category snippet
				$ajaxUtils.sendGetRequest(
					categoryHtml,
					function (categoryHtml) {
						var categoriesViewHtml = 
						  buildCategoriesViewHtml(categories, categoriesTitleHtml, categoryHtml);
						inserHtml("#main-content", categoriesViewHtml);
					},
					false);

			},
			false);
	}


	// Build HTML for the single category page based on the data from the server
	function buildAndShowMenuItemsHtml(categoryMenuItems) {
		// Load title snippet of menu items page
		$ajaxUtils.sendGetRequest(
			menuItemsTitleHtml, 
			function (menuItemHtml) {
				// Retrieve single menu item snippet
				$ajaxUtils.sendGetRequest(
					menuItemHtml,
					function (menuItemHtml) {
						var menuItemsViewHtml = 
						  buildMenuItemsViewHtml(categoryMenuItems, menuItemsTitleHtml, menuItemHtml);
						inserHtml("#main-content", menuItemsViewHtml);
					},
					false);
			},
			false);
	}

	//Using categories data and snippets html
	//build categories view HTML to be inserted into page
	function buildCategoriesViewHtml(categories, categoriesTitleHtml, categoryHtml) {
		var finalHtml = categoriesTitleHtml;
		finalHtml += "<section class='row'>";

		//Loop over categories
		for (var i = 0; i < categories.length; i++) {
			//Insert category values
			var html = categoryHtml;
			var name = "" + categories[i].name;
			var short_name = categories[i].short_name;
			//insertPropert does that in every place that is "name" it replaces it with name
			html = insertProperty(html, "name", name);
			html = insertProperty(html, "short_name", short_name);
			finalHtml += html;
		}

		finalHtml += "</section>";
		return finalHtml
	}

	//Using category and menu items data and snippets html
	//build menu items view HTML to be inserted into page
	function buildMenuItemsViewHtml(categoryMenuItems, menuItemsTitleHtml, menuItemHtml) {
		
		menuItemsTitleHtml = insertProperty(menuItemsTitleHtml, "name", categoryMenuItems.category.name);
		menuItemsTitleHtml = insertProperty(menuItemsTitleHtml, "special_instructions", categoryMenuItems.category.special_instructions);

		var finalHtml = menuItemsTitleHtml;
		finalHtml += "<section class='row'>";

		var menuItems = categoryMenuItems.menu_items;
		var catShortName = categoryMenuItems.category.short_name;
		//Loop over menu items
		for (var i = 0; i < menuItems.length; i++) {
			//Insert menu items values
			var html = menuItemHtml;
			
			//insertPropert does that in every place that is "name" it replaces it with name
			html = insertProperty(html, "short_name", menuItems[i].short_name);
			html = insertProperty(html, "catShortName", catShortName);
			html = insertItemPrice(html, "price_small", menuItems[i].price_small);
			html = insertItemPortionName(html, "small_portion_name", menuItems[i].small_portion_name);
			html = insertItemPrice(html, "price_large", menuItems[i].price_large);
			html = insertItemPortionName(html, "large_portion_name", menuItems[i].large_portion_name);
			html = insertProperty(html, "name", menuItems[i].name);
			html = insertProperty(html, "description", menuItems[i].description);

			// Add clearfix after every second menu item
			if (i % 2 != 0) {
				html += "<div class='clearfix visible-lg-block visible-md-block'></div>";
			}

			finalHtml += html;
		}

		finalHtml += "</section>"; //gets inserted into main-content
		return finalHtml
	}

	// Appends price with '$' if price exists
	function insertItemPrice(html, pricePropName, priceValue) {
		// if not specified, replace with empty string
		if (!priceValue) {
			return insertProperty(html, pricePropName, "");
		}

		priceValue = "$" + priceValue.toFixed(2);
		html = insertProperty(html, pricePropName, priceValue);
		return html;
	}

	// Appends portion name in parens if it exists
	function insertItemPortionName(html, portionPropName, portionValue) {
		// if not specified, return original string
		if (!portionValue) {
			return insertProperty(html, portionPropName, "");
		}

		portionValue = "$" + portionValue.toFixed(2);
		html = insertProperty(html, portionPropName, portionValue);
		return html;
	}


	//whatever is attached to the dc property is going to be exposed to the global object
	global.$dc = dc;

})(window);

