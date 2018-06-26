"use strict";

// Step 3 define reducers
export function booksReducers(
	state = {
		books: [
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
	},
	action
) {
	switch (action.type) {
		case "GET_BOOKS":
			return { ...state, books: [...state.books] };
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
			console.log("what is it", newBookToUpdate);
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
}
