import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './containers/Landing';
import Students from './containers/Students';
import StudentDetail from './containers/StudentDetail';
import AddStudent from './containers/AddStudent';
import EditStudent from './containers/EditStudent';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/batch/:batchYr/students" component={Students} />
      <Route exact path="/batch/:batchYr/students/:studentId" component={StudentDetail} />
      <Route exact path="/batch/:batchYr/students/add" component={AddStudent} />
      <Route exact path="/batch/:batchYr/students/:studentId/edit" component={EditStudent} />
    </Switch>
  </BrowserRouter>
);

export default Router;
