import React from 'react';
import { Switch, Route } from 'react-router-dom'
import {BookshelvesPage} from "../containers/BookshelvesPage";
import {BooksPage} from "../containers/BooksPage";

const Routes = () => (
  <main>
    <Switch>
      <Route exact path='/' component={BookshelvesPage}/>
      <Route path='/books' component={BooksPage}/>
    </Switch>
  </main>
);

export default Routes;
