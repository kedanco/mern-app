"use strict";

export function cartReducers(state = { cart: [] }, action) {
	switch (action.type) {
		case "ADD_TO_CART":
			return { cart: [...state, ...action.payload] };
			break;
		case "UPDATE_CART":
			// Create copy of current array of books
			const currentBookToUpdate = [...state.cart];
			// Determine at which index in books array is the book to be deleted
			const indexToUpdate = currentBookToUpdate.findIndex(function(book) {
				return book._id === action._id;
			});
			// Create a new book object with the new values, and same array index of item we want to replace.
			const newBookToUpdate = {
				...currentBookToUpdate[indexToUpdate],
				quantity: currentBookToUpdate[indexToUpdate].quantity + action.unit
			};

			let cartUpdate = [
				...currentBookToUpdate.slice(0, indexToUpdate),
				newBookToUpdate,
				...currentBookToUpdate.slice(indexToUpdate + 1)
			];
			return { ...state, cart: cartUpdate };
			break;

		case "DELETE_CART_ITEM":
			return { cart: [...state, ...action.payload] };
			break;
	}
	return state;
}
