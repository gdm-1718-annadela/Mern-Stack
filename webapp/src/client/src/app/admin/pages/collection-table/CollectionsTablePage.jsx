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
import CollectionsTable from '../../components/collection-table';

class CollectionsTablePage extends Component {
  render() {
    return (
      <Grid container spacing={24}>
          <Grid item xs={12}>
              <CollectionsTable />
          </Grid>
      </Grid>
    )
  }
}

export default (CollectionsTablePage);