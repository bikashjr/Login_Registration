import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from "./SignUp";
import  Login  from './Login';
import { Home } from './Home';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
