/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { 
  HashRouter as Router, 
  Switch, 
  Route 
} from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import GlobalStyle from '../../global-styles';
import AppWrapper from './AppWrapper';

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - Oohscanner"
        defaultTitle="Oohscanner"
      >
        <meta name="description" content="Oohscanner" />
      </Helmet>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="" component={NotFoundPage} />
        </Switch>
      </Router>
      <GlobalStyle />
    </AppWrapper>
  );
}
