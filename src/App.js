import { Route, Switch } from 'react-router';
import './App.css';
import { Converter } from './Containers/Converter/Converter';
import { Header } from './Containers/Header/Header';
import { TableCurrency } from './Containers/Table/TableCurrency';

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/'>
          <TableCurrency />
        </Route>
        <Route exact path='/converter'>
          <Converter />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
