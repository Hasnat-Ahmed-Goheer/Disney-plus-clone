import { Routes, Route } from "react-router-dom";
import "./App.css";
import MainRouter from "./routes/MainRouter";
import Start from "./pages/Start";

function App() {
  return (
    <>
      <div className="min-h-screen bg-primary font-sans text-[#f9f9f9]">
        <Routes>
          <Route path="/" element={<Start/>}/>
          <Route path="/*" element={<MainRouter />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
