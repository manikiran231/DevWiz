import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ColorPicker from './components/ColorPicker';
import JsonFormatter from './components/JsonFormatter';
import TypingTest from './components/TypingTest';
import PasswordGenerator from './components/PasswordGenerator';
import LoremGenerator from './components/LoremGenerator';
import Navbar from './components/Navbar';
import About from './components/About';
import Textform from './components/textform';
import Footer from './components/Footer';
import TodoApp from './components/TodoApp';
import './App.css'; 
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          {/* Use `element` to pass the component as JSX */}
          <Route path="/" element={<Dashboard />} />
          <Route path="/colorpicker" element={<ColorPicker />} />
          <Route path="/jsonformatter" element={<JsonFormatter />} />
          <Route path="/typingtest" element={<TypingTest />} />
          <Route path="/passwordgenerator" element={<PasswordGenerator />} />
          <Route path="/loremgenerator" element={<LoremGenerator />} />
          <Route path="/about" element={<About />} />
          <Route path="/textutils" element={<Textform />} />
          <Route path="/todoapp" element={<TodoApp mode="dark" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
