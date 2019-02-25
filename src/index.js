import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.css';
import App from './screens/App';
import * as serviceWorker from './serviceWorker';
import { createStore}  from 'redux';
import { Provider} from 'react-redux';


const initialState={
    page:1,
    movie_list: [],
};


function reducer(state=initialState,action) {
    switch (action.type) {
        case "next":
            return {
                page: state.page+1,
            };
        case "previous":
            return {
                page: state.page-1,
            };
        case "fetch":
            return {
                page: state.page,
                movie_list:action.movie_list
            };
        default:
            return state;
        
    }

}

const store = createStore(reducer);



ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
