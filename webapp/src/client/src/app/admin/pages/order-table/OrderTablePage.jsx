/*
Import extenal libraries
*/
import React, { Component } from 'react';

/*
Material UI
*/
import Grid from '@material-ui/core/Grid';

/*
Components
*/
import OrderTable from '../../components/order-table';

class OrderTablePage extends Component {
  render() {
    return (
      <Grid container spacing={24}>
          <Grid item xs={12}>
              <OrderTable />
          </Grid>
      </Grid>
    )
  }
}

export default (OrderTablePage);