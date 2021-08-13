import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PageWrapper from './components/PageWrapper';
import Sidebar from './components/Sidebar';
import Birthdays from './components/Birthdays';

function App() {
  return (
    <BrowserRouter>
      <PageWrapper>
        <Sidebar />
        <main className="main-content">
          <Switch>
            <Route exact path="/">
              <h1>Home</h1>
            </Route>
            <Route>
              <Birthdays exact path="/birthdays" />
            </Route>
          </Switch>
        </main>
      </PageWrapper>
    </BrowserRouter>
  );
}

export default App;
