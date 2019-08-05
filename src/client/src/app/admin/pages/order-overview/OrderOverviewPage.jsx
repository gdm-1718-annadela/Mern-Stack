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
import OrderTablePage from '../order-table';
// import OrderFormPage from '../order-form';

const tabs = [
  { id: 'List', link: '/admin/order' },
  { id: 'Create new post', link: '/admin/order/create' },
];

class OrderOverviewPage extends Component {
  render() {
    const { children } = this.props;

    return (
      <ContentLayout title="Order Overview" tabs={tabs}>
        { children }
        <Route exact path="/admin/order" component={ OrderTablePage }></Route>
        {/* <Route path="/admin/order/create" component={ OrderFormPage }></Route>
        <Route path="/admin/order/:id/edit" component={ OrderFormPage }></Route> */}
      </ContentLayout>
    )
  }
}

export default (OrderOverviewPage);