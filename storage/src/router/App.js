import React from "react"
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import  AddItem from '../components/AddItem';
import ItemsList from '../components/ItemsList';
import useLocalStorage from '../hooks/useLocalStorage';
import EditItem from '../components/EditItem';
import ItemsContext from '../context/ItemsContext';
import { Button} from 'react-bootstrap';
import CsvDownload from 'react-json-to-csv';
import Data from '../data/data.json';

const App = () => {
  const [items, setItems] = useLocalStorage('items', Data);

  return (
    <BrowserRouter>
      <div>
        <Header />
        
        <div className="main-content">
        
          <ItemsContext.Provider value={{ items, setItems }}>
            <Switch>
              <Route component={ItemsList} path="/" exact={true} />
              <Route component={AddItem} path="/add" />
              <Route component={EditItem} path="/edit/:id" />
              <Route component={() => <Redirect to="/" />} />
            </Switch>
          </ItemsContext.Provider>
          
        </div>
    
      </div>
    </BrowserRouter>
  );
};

export default App;

