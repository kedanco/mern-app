"use strict";
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";

import reducers from "./reducers/index";

import { addToCart } from "./actions/cartActions";
import { postBooks, deleteBooks, updateBooks } from "./actions/booksActions";

// Step 1 Create the store
const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

// Step 2 create and dispatch actions
// Action has 2 properties.
// Increment by 1
// store.dispatch({ type: "INCREMENT", payload: 1 });
// store.dispatch({ type: "INCREMENT", payload: 1 });
// store.dispatch({ type: "DECREMENT", payload: 1 });

store.dispatch(
	postBooks([
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
	])
);

store.dispatch(
	updateBooks({
		id: 2,
		title: "learn React in 24h",
		price: 50.0
	})
);

store.dispatch(deleteBooks({ id: 1 }));

// Add to cart
store.dispatch({
	type: "ADD_TO_CART",
	payload: [{ id: 2 }]
});

store.dispatch(addToCart([{ id: 1 }]));
