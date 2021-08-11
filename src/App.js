import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route>
          <Sidebar />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
