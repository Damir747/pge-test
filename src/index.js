import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/app';
import reportWebVitals from './reportWebVitals';
// import { Provider } from 'react-redux';
// import createAPI from './services/api';
// import { configureStore } from '@reduxjs/toolkit';
// import rootReducer from './store/root-reducer';
// import { redirect } from './store/middleware/redirect';

// const api = createAPI(() => {
// 	// store.dispatch();
// });

// const store = configureStore({
// 	reducer: rootReducer,
// 	middleware: (getDefaultMiddleware) =>
// 		getDefaultMiddleware({
// 			thunk: {
// 				extraArgument: api,
// 			},
// 			redirect,
// 			immutableCheck: { warnAfter: 128 },
// 			serializableCheck: { warnAfter: 128 },
// 		})
// });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		{/* <Provider store={store}> */}
		<App />
		{/* </Provider> */}
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
