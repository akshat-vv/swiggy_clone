import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App, {router}  from './App';
import { RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider basename="/swiggy_clone" router={router} />
);
