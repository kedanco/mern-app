"use strict";
import { createStore } from "redux";

// Step 3 define reducers
const reducer = function(state = { books: [] }, action) {
	switch (action.type) {
		case "POST_BOOK":
			// let books = state.books.concat(action.payload);
			return { books: [...state.books, ...action.payload] };
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

store.dispatch({
	type: "POST_BOOK",
	payload: [
		{
			id: 3,
			title: "this is the third title",
			description: "this is the third description",
			price: 56.78
		}
	]
});
