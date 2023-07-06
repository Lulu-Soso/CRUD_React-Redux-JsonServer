import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.scss'

// Redux
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import rootReducer from "./reducers"
import {getPosts} from "./actions/post.action";
import {getUser} from "./actions/user.action";

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
})

store.dispatch(getPosts())
store.dispatch(getUser())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App/>
      </Provider>
    </React.StrictMode>
);
