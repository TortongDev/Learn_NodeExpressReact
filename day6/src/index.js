import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import MyButton from './pages/MyButton';
import MyUseEffect from './pages/MyUseEffect';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import MyInput from './pages/Myinput';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MyButton />,
  },
  {
    path: "/page2",
    element: <MyInput />
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
