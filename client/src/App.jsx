import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Service } from "./pages/Service";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Logout } from "./pages/Logout";
import { Navbar } from "./component/Navbar";
import { Error } from "./pages/Error";
const App = ()=>{
  return<>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/About" element={<About />}/>
        <Route path="/Contact" element={<Contact />}/>
        <Route path="/Service" element={<Service/>}/>
        <Route path="/Register" element={<Register />}/>
        <Route path="/Login" element={<Login />}/>
        <Route path="/Logout" element={<Logout />}/>
        <Route path="*" element={<Error />}/>
      </Routes>
    </BrowserRouter>

    
  </>
}

export default App;