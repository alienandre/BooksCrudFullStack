import './App.css';
import Booklist from './components/booklist';
import Navigationbar from './components/navigationbar';
import {Route, Routes} from 'react-router-dom';
import Register from './components/register';
import Styletest from './components/styletest';

function App() {
  return (
    <>
      <Navigationbar />
      
      <Routes>
        <Route path="/" element={ <Booklist /> }/>
        <Route path="/register" element={ <Register /> }/>
        <Route path='/styletest' element={ <Styletest /> }/>
      </Routes>

    </>
  );
}

export default App;
