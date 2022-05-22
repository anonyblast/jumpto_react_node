import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';

function App() {
  return (
    <div className="App">
     <Router>
       <Login/>
     </Router>
    </div>
  );
}

export default App;
