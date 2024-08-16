import { Route, Routes } from "react-router";

import "./App.css";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { MovieDetails } from "./pages/MovieDetails";

function App() {
  return (
    <div className="App min-h-screen bg-gradient-to-r from-blue-950 to-blue-900 px-12">
      <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movie/:imdbID" element={<MovieDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
