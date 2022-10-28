import { Routes, Route } from 'react-router-dom';
import Home from './Views/Home/Home';
import Login from './Views/Login/Login';
import Register from './Views/Register/Register';
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/register" element={<Register />}></Route>
      </Routes>
    </>
  );
}

export default App;
