import { Redirect, Route, Switch } from 'react-router-dom';

const ProfileRoutes = () => (
  <Switch>
    <Route path="/profile/account">
      <div>Account view</div>
    </Route>
    <Route path="/profile/deleteaccount">
      <div>Delete account view</div>
    </Route>
    <Route path="/profile/changepassword">
      <div>Change password view</div>
    </Route>
    <Route path="*">
      <Redirect to="/profile/account" />
    </Route>
  </Switch>
);

export default ProfileRoutes;
