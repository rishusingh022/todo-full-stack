import './App.css';
import { Error, Home, PageNotFound, Tasklist } from './pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/error" element={<Error />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/task/:id" element={<Tasklist />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
