import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PageWrapper from './components/PageWrapper';
import Sidebar from './components/Sidebar';
import Birthdays from './components/Birthdays';
import Tours from './components/Tours';
import Reviews from './components/Reviews';
import Accordion from './components/Accordion';
import Menu from './components/Menu';
import Tabs from './components/Tabs';

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
            <Route exact path="/birthdays">
              <Birthdays />
            </Route>
            <Route exact path="/tours">
              <Tours />
            </Route>
            <Route exact path="/reviews">
              <Reviews />
            </Route>
            <Route exact path="/questions">
              <Accordion />
            </Route>
            <Route exact path="/menu">
              <Menu />
            </Route>
            <Route exact path="/tabs">
              <Tabs />
            </Route>
          </Switch>
        </main>
      </PageWrapper>
    </BrowserRouter>
  );
}

export default App;
