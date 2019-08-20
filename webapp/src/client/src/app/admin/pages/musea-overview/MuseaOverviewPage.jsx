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
import MuseaTablePage from '../musea-table';
import MuseaFormPage from '../museum-form';

const tabs = [
  { id: 'List', link: '/admin/musea' },
  { id: 'Create new post', link: '/admin/musea/create' },
];

class MuseaOverviewPage extends Component {
  render() {
    const { children } = this.props;

    return (
      <ContentLayout title="Musea Overview" tabs={tabs}>
        { children }
        <Route exact path="/admin/musea" component={ MuseaTablePage }></Route>
        <Route path="/admin/musea/create" component={ MuseaFormPage }></Route>
        <Route path="/admin/musea/:id/edit" component={ MuseaFormPage }></Route>
      </ContentLayout>
    )
  }
}

export default (MuseaOverviewPage);