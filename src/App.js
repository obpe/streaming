import './App.css';
import Home from './home';
import Categories from './categories';
import { Switch, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/categories' component={Categories} />
      </Switch>
    </div>
  );
}

export default App;
