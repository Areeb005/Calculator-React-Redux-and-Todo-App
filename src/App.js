import Home from './pages/Home'
import Todo from './components/Todo';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';



function App() {
  return <>
    <Header />

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/todo' element={<Todo />} />
    </Routes>

  </>
}

export default App;
