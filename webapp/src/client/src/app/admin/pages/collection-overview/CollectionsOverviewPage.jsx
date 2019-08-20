/*
Import extenal libraries
*/
import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';

/*
Layout
*/
import { ContentLayout } from '../../layouts';

/*
Pages
*/
import CollectionsTablePage from '../collection-table';
import CollectionFormPage from '../collection-form';

const tabs = [
  { id: 'List', link: '/admin/collections' },
  { id: 'Create new collection', link: '/admin/collections/create' },
];

class CollectionsOverviewPage extends Component {
  render() {
    const { children } = this.props;

    return (
      <ContentLayout title="Collections Overview" tabs={tabs}>
        { children }
        <Route exact path="/admin/collections" component={ CollectionsTablePage }></Route>
        <Route path="/admin/collections/create" component={ CollectionFormPage }></Route>
        <Route path="/admin/collections/:id/edit" component={ CollectionFormPage }></Route>
      </ContentLayout>
    )
  }
}

export default (CollectionsOverviewPage);