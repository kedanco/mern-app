"use strict";

// React
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";

import reducers from "./reducers/index";

import { addToCart } from "./actions/cartActions";
import { postBooks, deleteBooks, updateBooks } from "./actions/booksActions";

// Step 1 Create the store
const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

import BooksList from "./components/pages/booksList";

render(
	<Provider store={store}>
		<BooksList />
	</Provider>,
	document.getElementById("app")
);

// Step 2 create and dispatch actions
// Action has 2 properties.
// Increment by 1
// store.dispatch({ type: "INCREMENT", payload: 1 });
// store.dispatch({ type: "INCREMENT", payload: 1 });
// store.dispatch({ type: "DECREMENT", payload: 1 });
