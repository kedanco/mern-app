"use strict";
import { createStore } from "redux";

// Step 3 define reducers
const reducer = function(state = { books: [] }, action) {
	switch (action.type) {
		case "POST_BOOK":
			// let books = state.books.concat(action.payload);
			return { books: [...state.books, ...action.payload] };
			break;
		case "DELETE_BOOK":
			// Create copy of current array of books
			const currentBookToDelete = [...state.books];
			// Determine at which index in books array is the book to be deleted
			const indexToDelete = currentBookToDelete.findIndex(function(book) {
				return book.id === action.payload.id;
			});
			// Use slice to remove book at specified index
			return {
				books: [
					...currentBookToDelete.slice(0, indexToDelete),
					...currentBookToDelete.slice(indexToDelete + 1)
				]
			};
			break;
		case "UPDATE_BOOK":
			// Create copy of current array of books
			const currentBookToUpdate = [...state.books];
			// Determine at which index in books array is the book to be deleted
			const indexToUpdate = currentBookToUpdate.findIndex(function(book) {
				return book.id === action.payload.id;
			});
			// Create a new book object with the new values, and same array index of item we want to replace.
			const newBookToUpdate = {
				...currentBookToUpdate[indexToUpdate],
				title: action.payload.title
			};
			// This log has the purpose to show you how newBookToUpdate looks like
			console.log(newBookToUpdate);
			// Use slice to remove book at specified index, replace with new object, and concat with rest of items
			return {
				books: [
					...currentBookToUpdate.slice(0, indexToUpdate),
					newBookToUpdate,
					...currentBookToUpdate.slice(indexToUpdate + 1)
				]
			};
			break;
	}
	return state;
};

// Step 1 Create the store
const store = createStore(reducer);

// See the current state in the store
store.subscribe(function() {
	console.log("current state is: ", store.getState());
	// console.log('current price: '. store.getState()[1].price);
});

// Step 2 create and dispatch actions
// Action has 2 properties.
// Increment by 1
// store.dispatch({ type: "INCREMENT", payload: 1 });
// store.dispatch({ type: "INCREMENT", payload: 1 });
// store.dispatch({ type: "DECREMENT", payload: 1 });

store.dispatch({
	type: "POST_BOOK",
	payload: [
		{
			id: 1,
			title: "this is the book title",
			description: "this is the book description",
			price: 33.33
		},
		{
			id: 2,
			title: "this is the second title",
			description: "this is the second description",
			price: 12.34
		}
	]
});

// Delete a book
store.dispatch({
	type: "DELETE_BOOK",
	payload: [{ id: 1 }]
});

// Update a book
store.dispatch({
	type: "UPDATE_BOOK",
	payload: [
		{
			id: 2,
			title: "learn React in 24h",
			price: 50.0
		}
	]
});
