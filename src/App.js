import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import ToDoList from "./routes/ToDoList";
import CoinTraker from "./routes/CoinTracker";

function App() {
  return (
    <div>
      <Router>
        <RouterBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Detail />} />
          <Route path="/ToDoList" element={<ToDoList />} />
          <Route path="/CoinTracker" element={<CoinTraker />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

function RouterBar(params) {
  return (
    <div>
      <h2>
        <Link to={"/Home/"}>Home</Link>
      </h2>
      <h2>
        <Link to={"/CoinTracker/"}>CoinTracker</Link>
      </h2>
      <h2>
        <Link to={"/ToDoList/"}>ToDoList</Link>
      </h2>
    </div>
  );
}

export default App;
