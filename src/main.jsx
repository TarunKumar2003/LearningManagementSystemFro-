// Components Imports
import App from './App'
import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import store from './Redux/store.js'
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
       <App />
       <Toaster/>
    </BrowserRouter>
  </Provider>
  
    
 
)
