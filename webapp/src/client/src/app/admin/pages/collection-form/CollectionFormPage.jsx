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
import CollectionForm from '../../components/collection-form';

class CollectionFormPage extends Component {
  render() {
    const { id } = this.props.match.params;

    return (
      <Grid container spacing={24}>
          <Grid item xs={12}>
              {id ? (
              <CollectionForm collectionId={id} />
              ) : (
              <CollectionForm />
              )}
          </Grid>
      </Grid>
    )
  }
}

export default (CollectionFormPage);