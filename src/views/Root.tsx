import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import MainTemplate from '../components/templates/MainTemplate';
import HeaderTemplate from '../components/templates/Header';
import ProfileTemplate from '../components/templates/Profile';
import ProfileRoutes from '../routes/Profile';

const Root = () => (
  <Router>
    <MainTemplate>
      <Switch>
        <HeaderTemplate>
          <Route exact path="/">
            <App />
          </Route>
          <Route path="/profile">
            <ProfileTemplate>
              <ProfileRoutes />
            </ProfileTemplate>
          </Route>
        </HeaderTemplate>
      </Switch>
    </MainTemplate>
  </Router>
);

export default Root;
