import React from 'react';
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter(
  [
    {
      path:"/",
      element:
      <div>
        <Navbar/>
        <Home/>
      </div>
    },
    {
      path:"/pastes",
      element:
      <div>
      <Navbar/>
      <Paste />

      </div>
    },
   {
    path:"/pastes/:id",
    element:
    <div>
    <Navbar/>
    <ViewPaste />

    </div>
   } ,
  ]
);

const App = () => {
  return (
   <div>
   <RouterProvider router = {router} />
   </div>
  );
};

export default App;
