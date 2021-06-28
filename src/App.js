import './App.css';
import Home from './home';
import Categories from './categories';
import axios from 'axios';
import Table from './table';
import { BrowserRouter as Router, Route, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';


function Chart() {
  const [data, setData] = useState([]);
  const { items } = useParams();
  const base_url = 'https://stream-restaurant-menu-svc.herokuapp.com/item?category=';
  useEffect(() => {
    (async () => {
      const result = await axios(
        `${base_url}${items}`
      );
      setData(result.data)
    })();
  }, [items])

  const renderTable = data.map(i => (
    <Table name={i.name} description={i.description} />
  ))

  return (
    <div>
      <h1>items: {items}</h1>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
          {renderTable}
        </tbody>
      </table>
    </div>
  )
}

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path='/' component={Home} />
        <Route path='/categories' component={Categories} />
        <Route path='/categories/:items' component={Chart} />
      </div>
    </Router>

  );
}

export default App;
