/*
Import extenal libraries
*/
import React, { Component } from 'react';
import { Route } from 'react-router-dom';

/*
Pages
*/
import BlogsOverviewPage from '../blogs-overview';
import CategoriesOverviewPage from '../categories-overview';
import PostsOverviewPage from '../posts-overview';
import MuseaOverviewPage from '../musea-overview';
import OrderOverviewPage from '../order-overview';
import CollectionsOverviewPage from '../collection-overview';

class AdminPage extends Component {
  render() {
    return (
      <div className="Admin">
        <Route path="/admin/blogs" component={ BlogsOverviewPage }></Route>
        <Route path="/admin/categories" component={ CategoriesOverviewPage }></Route>
        <Route path="/admin/posts" component={ PostsOverviewPage }></Route>
        <Route path="/admin/musea" component = {MuseaOverviewPage}></Route>
        <Route path="/admin/order" component = {OrderOverviewPage}></Route>
        <Route path="/admin/collections" component = {CollectionsOverviewPage}></Route>

      </div>
    )
  }
}

export default (AdminPage);