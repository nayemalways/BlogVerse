import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Page/Home';
import BlogDetails from './Page/BlogDetails';
import BlogByCategory from './Page/BlogByCategory';
import Login from './Page/Login';
import Registration from './Page/Registration';
import NotFound from './Page/NotFound';
import About from './Page/About';
import Profile from './Page/Profile';



const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path= '/' element={<Home/>} />
          <Route path= '/about' element={<About/>} />
          <Route path= '/contact' element={<About/>} />
          <Route path= '/profile' element={<Profile/>} />
          <Route path= '/blog-details' element={<BlogDetails/>} />
          <Route path= '/blogs/category/:categoryId' element={<BlogByCategory/>} />
          <Route path='/register' element={<Registration/>} />
          <Route path='/login' element={<Login/>} />
          <Route path= '*' element={<NotFound/>}/>
        </Routes>
       </BrowserRouter>
    </div>
  );
};

export default App;