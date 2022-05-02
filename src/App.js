import './App.css';
import { BrowserRouter as 
  Router, 
  Routes,
  Route, 
} from 'react-router-dom';

import { Home } from './pages/home/Home';
import { Todo } from './pages/todo/Todo';
import { Focus } from './pages/focus/Focus';

function App() {

  return (
    <Router>
      <div className="App">
          <Routes>
            <Route path='/'element={<Home />}/>
            <Route path='/Todo' element={<Todo />}/>
            <Route path='/Focus' element={<Focus />}/>
          </Routes>          
      </div>
    </Router>
    
  );
}

export default App;
