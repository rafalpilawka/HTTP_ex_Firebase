import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL=('https://jsonplaceholder.typicode.com');
// axios.defaults.headers.common['Authorization']='AUTH TOKEN';
axios.defaults.headers.post['Content-type']='application/json';


axios.interceptors.request.use(request=>{
    console.log(request);
    // Add, or edits requests
    return request;
} , error=>{console.log(error);
return Promise.reject(error)});

axios.interceptors.response.use(response=>{
    console.log(response);
    // Add, or edits requests
    return response;
} , error=>{console.log(error);
return Promise.reject(error)});

// var myInterceptor = axios.interceptors.request.use(function () {/*...*/});
// axios.interceptors.request.eject(myInterceptor);
//REMOVING INTERCEPTORS




ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
