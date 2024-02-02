import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import SignIn from './pages/Signin';

function App() {
  return (
         <BrowserRouter>
         <Routes>

          <Route path='/' element={<Home/>}/>
           <Route path='/sign-in' element={<SignIn/>}/>
            <Route path='/sign-up' element={<SignUp/>}/>
             <Route path='/about' element={<About/>}/>
              <Route path='/profile' element={<Profile/>}/>
          
         </Routes>
         </BrowserRouter>

  )
}

export default App
