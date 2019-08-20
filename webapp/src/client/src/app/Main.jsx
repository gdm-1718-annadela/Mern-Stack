/*
Import extenal libraries
*/
import React, { Component } from 'react';
import { Redirect, Switch } from 'react-router-dom';

/*
Utilities
*/
import { RouteWithLayout } from './utilities';

/*
Layout
*/
import { LoginLayout, PageLayout, SignupLayout } from './layouts';
import { AdminLayout } from './admin/layouts';

/*
Page components
*/
import HomePage from './pages/home';
import AdminPage from './admin/pages/admin';
import LoginPage from './pages/login';
import NewsPage from './pages/news';
import PostDetailPage from './pages/post-detail';
import OrderTicketPage from './pages/order-ticket';
import OrderTicketDetailPage from './pages/order-ticket-detail';
import SignupPage from './pages/signup';

/*
Import styling
*/
import './Main.css';

class Main extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <RouteWithLayout exact path='/' layout={ PageLayout } component={ HomePage }/>
          <Redirect from="/home" to="/"/>
          <RouteWithLayout exact path='/musea' layout={ PageLayout } component={ NewsPage }/>
          <RouteWithLayout exact path='/musea/:id' layout={ PageLayout } component={ PostDetailPage }/>
          <RouteWithLayout exact path='/order-ticket' layout={ PageLayout } component={ OrderTicketPage }/>
          <RouteWithLayout exact path='/order-ticket/:id' layout={ PageLayout } component={ OrderTicketDetailPage }/>
          <RouteWithLayout path="/login" layout={ LoginLayout } component={ LoginPage }></RouteWithLayout>
          <RouteWithLayout path="/admin" layout={ AdminLayout } component={ AdminPage }></RouteWithLayout>
          <RouteWithLayout path="/signup" layout={ SignupLayout } component={ SignupPage }></RouteWithLayout>

        </Switch>
      </div>
    );
  }
}

export default Main;