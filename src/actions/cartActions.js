"use strict";

// Actions are your functions - like controllers.
// Take input and then return something.

// ADD TO CART
export function addToCart(book) {
	return {
		type: "ADD_TO_CART",
		payload: book
	};
}
