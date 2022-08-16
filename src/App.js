import { Routes, Route } from "react-router-dom";
import Home from "./page/Home/Home";
import Header from "./component/Header/Header";
import Libery from "./page/Libery/Libery";
import Test from "./page/Test/Test";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="wrapper">
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Libery />} path="/libery" />
          <Route element={<Test />} path="/test" />
        </Routes>
      </div>
    </div>
  );
}

export default App;
