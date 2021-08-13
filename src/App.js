import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PageWrapper from './components/PageWrapper';
import Sidebar from './components/Sidebar';
import BirthdayList from './components/BirthdayList';

function App() {
  return (
    <BrowserRouter>
      <PageWrapper>
        <Sidebar />
        <Switch>
          <Route>
            <BirthdayList />
          </Route>
        </Switch>
      </PageWrapper>
    </BrowserRouter>
  );
}

export default App;
