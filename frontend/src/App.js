import Navbar from './Components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './Views/Home/Home';
function App() {
  return (
    <>
      <Navbar />
      <Home />
      {/* <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes> */}
    </>
  );
}

export default App;
